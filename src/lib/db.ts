"use server";

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dmthyedfjzcysoekmyns.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function addDownload(platform: string) {
    // Check if the download count for the platform exists
    const { data, error } = await supabase
        .from('downloads')
        .select('count')
        .eq('platform', platform)
    // If it doesn't exist, create it
    console.log(data)
    if (data?.length === 0 || data === null) {
        const {data, error} = await supabase
            .from('downloads')
            .insert([{ platform, count: 1 }]);
        if (error) {
            console.error(error)
        }
    } else {
        // If it exists, increment the count
        await supabase
            .from('downloads')
            .update({ count: data![0].count + 1 })
            .eq('platform', platform)
    }
}
