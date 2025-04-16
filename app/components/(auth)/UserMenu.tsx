'use client'

import Image from "next/image";
import { useState } from "react";
import SignOutButton from "./SignOutButton";

type UserMenuProps = {
    name: string;
    image?: string;
}

const UserMenu = ({ name, image }: UserMenuProps) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col items-end">
            {/* <p className="text-sm text-[var(--textLight)]">
                Welcome
            </p>
            <span className="font-bold">{name}</span> */}
            <div 
                className="cursor-pointer"
                onClick={() => setIsOpen(prev => !prev)}
            >
                { image ? (
                    <div className="w-md h-md rounded-full">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            priority
                            className="overflow-hidden object-cover"
                        />
                </div>
                ) : (
                    <div className="w-[38px] h-[38px] relative">
                        <Image
                            src="/images/placeholder-profile-image.jpg"
                            alt="Placeholder Image"
                            fill
                            priority
                            className="overflow-hidden object-cover rounded-full"
                        />
                    </div>
                )}
            </div>
            { isOpen && (
                <div className="flex flex-col w-[300px] bg-[var(--secondary)] absolute top-10 right-0 z-[100]">
                    <div className="bg-[var(--primary)] text-[var(--secondary)] text-xs p-xs line-clamp-1">
                        <span>Welcome, {name}</span>
                    </div>
                    <div className="text-xs p-xs text-[var(--textLight)] line-clamp-1
                        hover:bg-accent hover:text-[var(--secondary)]
                    ">
                        <span>Profile</span>
                    </div>
                    <div className="text-xs p-xs text-[var(--textLight)] line-clamp-1
                        hover:bg-accent hover:text-[var(--secondary)]
                    ">
                        <span>Order History</span>
                    </div>
                    {/* <div className="flex flex-col w-full gap-xs p-xs bg-[var(--secondary)] text-xs text-[var(-textLight)]">
                        <p>Profile</p>
                        <p>Order History</p>
                        <p>Sign Out</p>
                    </div> */}
                        <div className="self-end p-xs">
                            <SignOutButton />
                        </div>
                </div>
            )}
        </div>
    )
}

export default UserMenu;


// 'use client'
// import { useEffect, useState } from "react";
// import { createClient } from "@/utils/supabase/client";

// const UserMenu = () => {
//     const [userName, setUserName] = useState<string | null>(null);

//     useEffect(() => {
//         const supabase = createClient();
//         supabase.auth.getUser().then(({ data: { user } }) => {
//         const name = user?.user_metadata?.full_name || user?.email?.split("@")[0];
//         setUserName(name ?? null);
//         });
//     }, []);

//     if (!userName) return null;

//     return (
//         <div className="flex flex-col items-end">
//             <p className="text-sm text-[var(--textLight)]">
//                 Welcome
//             </p>
//             <span className="text-[var(--textLight)] font-bold">{userName}</span>
//         </div>
//     );
// };

// export default UserMenu;


// server-side version
// import { getUser } from "@/lib/getUser";
// const UserMenu = async () => {

//     const user = await getUser();

//     if (!user) return null;

//     const name = user.user_metadata?.full_name || "Friend";

//     return (
//         <p className="text-sm text-[var(--textLight)]">
//             Wlcome, <span className="font-bold">{name}</span>
//         </p>
//     )
// }

// export default UserMenu;