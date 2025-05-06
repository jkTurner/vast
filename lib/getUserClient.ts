'use client';

import { supabaseClientBrowser } from "@/utils/supabase/client";
import type { ExtendedUser } from "@/hooks/useUser";

export async function getUserClient(): Promise<ExtendedUser | null> {
  const supabase = supabaseClientBrowser();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error?.message === "Auth session missing!" || !user) return null;

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("full_name, avatar_url")
    .eq("id", user.id)
    .single();

    if (profileError) {
        console.error("Error fetching profile: ", profileError.message);
    }

  return {
    ...user,
    full_name: profile?.full_name ?? user.user_metadata?.full_name ?? null,
    avatar_url: profile?.avatar_url ?? null,
  };
}



// if (profileError) {
//     console.error("Error fetching profile: ", profileError.message);
//     return user; // fallback by returning just the auth user (without profile)
// }



// 'use client'

// import { supabaseClientBrowser } from "@/utils/supabase/client"

// export async function getUserClient() {
//     const supabase = supabaseClientBrowser()
//     const { data: { user }, error } = await supabase.auth.getUser();

//     if (error?.message === "Auth session missing!") {
//         return null;
//     }

//     if (error) {
//         console.error("Unexpected error fetching user: ", error.message)
//         return null;
//     }

//     return user;
// }



