import { sql } from '@vercel/postgres';
import { config } from 'dotenv';
 
var hasLoadedEnv = false;
function loadEnv() {
    if (hasLoadedEnv) {
        return;
    }
    config();
}

async function createDownloadsTable() {
    loadEnv();
    await sql`
        CREATE TABLE IF NOT EXISTS downloads (
        id SERIAL PRIMARY KEY,
        platform TEXT NOT NULL,
        count INT NOT NULL
        );
    `;
} 

export async function addDownload(platform: string) {
    await createDownloadsTable();
    await sql`
        INSERT INTO downloads (platform, count)
        VALUES (${platform}, 1)
        ON CONFLICT (platform)
        DO UPDATE SET count = downloads.count + 1;
    `;
}
