"use server";

import { createClient } from "@supabase/supabase-js";
import { releases } from "./releases";

const supabaseUrl = "https://dmthyedfjzcysoekmyns.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

const DOWNLOADS_TABLE = "downloads";
const PLATFORM_COLUMN = "platform";
const COUNT_COLUMN = "count";

export async function incrementDownloadCount(platform: keyof typeof releases) {
  try {
    //? Check if the download count for the platform exists
    const { data, error } = await supabase
      .from(DOWNLOADS_TABLE)
      .select(COUNT_COLUMN)
      .eq(PLATFORM_COLUMN, platform);

    if (error) throw new Error("Error fetching download count");

    if (!data || data.length === 0) {
      //? If it doesn't exist, create it
      const { data: insertData, error: insertError } = await supabase
        .from(DOWNLOADS_TABLE)
        .insert([{ platform, count: 1 }]);

      if (insertError) throw new Error("Error inserting download count");

      return insertData;
    } else {
      //? If it exists, increment the count
      const newCount = data![0][COUNT_COLUMN] + 1;
      const { data: updateData, error: updateError } = await supabase
        .from(DOWNLOADS_TABLE)
        .update({ count: newCount })
        .eq(PLATFORM_COLUMN, platform);

      if (updateError) throw new Error("Error updating download count");

      return updateData;
    }
  } catch (err) {
    console.error("Unexpected error in addDownload:", err);
    throw err;
  }
}
