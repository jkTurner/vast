import { getUserClient } from "@/lib/getUserClient";
import { useQuery } from "@tanstack/react-query";

export function useUser() {
    return useQuery({
        queryKey: ['user'],
        queryFn: getUserClient,
    })
}