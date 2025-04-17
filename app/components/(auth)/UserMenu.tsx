'use client'

import Image from "next/image";
import { useRef, useState } from "react";
import SignOutButton from "./SignOutButton";
import { useClickOutside } from "@/hooks/useClickOutside";
import { usePressEscape } from "@/hooks/usePressEscape";

type UserMenuProps = {
    name: string;
    image?: string;
}

const UserMenu = ({ name, image }: UserMenuProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // close on ESC
    usePressEscape(() => { setIsOpen(false)});

    // close on clicking outside
    useClickOutside(menuRef, () => setIsOpen(false));

    return (
        <div ref={menuRef} className="flex flex-col items-end">
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
                    <div className="self-end p-xs">
                        <SignOutButton />
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserMenu;