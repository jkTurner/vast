import { getUserClient } from "@/lib/getUserClient";
import { User } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";

export interface ExtendedUser extends User {
    full_name: string | null;
    avatar_url: string | null;
    birth_date: Date | null;
    gender: string | null,
}

export function useUser() {
  return useQuery<ExtendedUser | null>({
    queryKey: ['user'],
    queryFn: getUserClient,
  });
}


// import { getUserClient } from "@/lib/getUserClient";
// import { useQuery } from "@tanstack/react-query";

// export function useUser() {
//     return useQuery({
//         queryKey: ['user'],
//         queryFn: getUserClient,
//     })
// }

