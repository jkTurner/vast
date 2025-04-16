'use client'

import { createClient } from "@/utils/supabase/client"

export async function getUserClient() {
    const supabase = createClient()
    const { data: { user }, error } = await supabase.auth.getUser();

    // if (error) {
    //     console.error("Error fetching user: ", error.message);
    //     return null;
    // }

    if (error?.message === "Auth session missing!") {
        return null;
    }

    if (error) {
        console.error("Unexpected error fetching user: ", error.message)
        return null;
    }

    return user;
}