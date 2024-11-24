package main

import (
	"bytes"
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"sync"
	"time"
)

var semaphore = make(chan bool, 45)

func uploadFile(storageZoneName, region, apiKey, filePath string) error {
	semaphore <- true
	defer func() { <-semaphore }()

	fileBytes, err := os.ReadFile(filePath)
	if err != nil {
		return err
	}
	relPath, err := filepath.Rel("../dist", filePath)
	if err != nil {
		return err
	}
	req, err := http.NewRequest("PUT", fmt.Sprintf("https://%s.bunnycdn.com/%s/%s", region, storageZoneName, relPath), bytes.NewReader(fileBytes))
	if err != nil {
		return err
	}
	req.Header.Set("AccessKey", apiKey)
	req.Header.Set("Content-Type", "application/octet-stream")
	req.Header.Set("Accept", "application/json")
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()
	if resp.StatusCode != http.StatusOK && resp.StatusCode != http.StatusCreated {
		return fmt.Errorf("upload failed with status code %d", resp.StatusCode)
	}
	log.Printf("Uploaded %s to BunnyStorage\n", relPath)
	return nil
}

func uploadFilesToBunnyCDN(storageZoneName, region, apiKey string) error {
	distDir := "../dist"
	var wg sync.WaitGroup
	errChan := make(chan error)

	filepath.Walk(distDir, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}
		if info.Name() == ".git" {
			return filepath.SkipDir
		}
		if !info.IsDir() {
			wg.Add(1)
			go func(filePath string) {
				defer wg.Done()
				if err := uploadFile(storageZoneName, region, apiKey, filePath); err != nil {
					errChan <- err
				}
			}(path)
		}
		return nil
	})

	go func() {
		wg.Wait()
		close(errChan)
	}()

	for err := range errChan {
		return err
	}

	return nil
}

func main() {
	start := time.Now()
	storageZoneName := "no"
	region := "storage"
	apiKey := "hehe"

	if len(os.Args) >= 3 {
		apiKey = os.Args[1]
	}
	if len(os.Args) >= 3 {
		storageZoneName = os.Args[2]
	}

	if err := uploadFilesToBunnyCDN(storageZoneName, region, apiKey); err != nil {
		log.Fatal(err)
	}
	elapsed := time.Since(start)
	log.Printf("Successfully uploaded files to BunnyCDN in %v\n", elapsed)
}