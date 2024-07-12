"use server";

import { sql } from '@vercel/postgres';
import { releases } from './releases';

async function createDownloadsTable() {
    await sql`
        CREATE TABLE IF NOT EXISTS downloads (
            platform TEXT NOT NULL PRIMARY KEY,
            count INT NOT NULL DEFAULT 0
        );
    `;
}

export async function addDownload(platform: string) {
    await createDownloadsTable();
    let hasPlatform: any = await sql`
        SELECT COUNT(*) FROM downloads WHERE platform = ${platform};
    `;
    if (hasPlatform.rows[0].count > 0) {
        await sql`
            UPDATE downloads
            SET count = count + 1
            WHERE platform = ${platform};
        `;
        return;
    }
    await sql`
        INSERT INTO downloads (platform, count)
        VALUES (${platform}, 1);
    `;
}
