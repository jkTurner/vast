import { getUserClient } from "@/lib/getUserClient";
import { QueryClient } from "@tanstack/react-query";
import ProfileClient from "../../components/profile/ProfileClient";
import ShippingAddress from "@/app/components/profile/ShippingAddress";
import { getUserServer } from "@/lib/getUserServer";
import { redirect } from "next/navigation";

const ProfilePage = async () => {

    const user = await getUserServer();
    if (!user) {
        redirect("/");
    }

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["user"],
        queryFn: getUserClient,
    });

    return (
            <div className="w-full max-w-[var(--desktop)] min-h-[75vh] flex md:flex-row flex-col gap-sm">
                <div className="flex flex-col gap-sm w-full md:max-w-[68%]">
                    <ProfileClient />
                    <ShippingAddress />
                </div>
                {/* <div className="flex-1 bg-sky-600"></div> */}
            </div>
    )
}

export default ProfilePage;


// with hydration
// import { getUserClient } from "@/lib/getUserClient";
// import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
// import ProfileClient from "../../components/profile/ProfileClient";
// import ShippingAddress from "@/app/components/profile/ShippingAddress";
// import { getUserServer } from "@/lib/getUserServer";
// import { redirect } from "next/navigation";

// const ProfilePage = async () => {

//     const user = await getUserServer();
//     if (!user) {
//         redirect("/");
//     }

//     const queryClient = new QueryClient();

//     await queryClient.prefetchQuery({
//         queryKey: ["user"],
//         queryFn: getUserClient,
//     });

//     return (
//         <HydrationBoundary state={dehydrate(queryClient)}>
//             <div className="w-full max-w-[var(--desktop)] min-h-[75vh] flex md:flex-row flex-col gap-sm">
//                 <div className="flex flex-col gap-sm w-full md:max-w-[68%]">
//                     <ProfileClient />
//                     <ShippingAddress />
//                 </div>
//                 {/* <div className="flex-1 bg-sky-600"></div> */}
//             </div>
//         </HydrationBoundary>
//     )
// }

// export default ProfilePage;


