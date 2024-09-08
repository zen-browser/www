"use client";

import React, { useCallback, useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { releaseNotes } from "@/lib/release-notes";

export const VersionList = React.memo(({ currentVersion }: { currentVersion: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <div className="fixed right-0 lg:right-0 top-20 z-10 pr-2">
      <div className="relative">
        <Button
          variant="outline"
          className="w-full flex justify-between items-center lg:w-auto"
          onClick={toggleDropdown}
        >
          {currentVersion}
          <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </Button>
        {isOpen && (
          <div className="absolute top-full right-0 mt-2 w-full lg:w-48 bg-background border rounded-md shadow-lg max-h-[60vh] overflow-y-auto">
            {releaseNotes.map((note) => (
              <a 
                key={note.version} 
                href={`/release-notes/${note.version}`}
                className={`block px-4 py-2 text-sm ${
                  note.version === currentVersion 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-accent'
                }`}
                onClick={toggleDropdown}
              >
                {note.version}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

VersionList.displayName = 'VersionList';