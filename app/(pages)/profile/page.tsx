import { getUserClient } from "@/lib/getUserClient";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import ProfileClient from "./ProfileClient";

const ProfilePage = async () => {

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["user"],
        queryFn: getUserClient,
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ProfileClient />
        </HydrationBoundary>
    )
}

export default ProfilePage;