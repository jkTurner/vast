'use client'

import { Paths } from "@/data/Paths";
import styles from "./header.module.css"
import Link from "next/link";
import Image from "next/image";

interface MobileMenuProps {
    isOpen: boolean;
    isUser: boolean;
    onClose: () => void;
    onOpenSignIn: () => void;
    name?: string;
    image?: string | null;
}

const MobileMenu = ({ isOpen, isUser, onClose, onOpenSignIn, name, image }: MobileMenuProps) => {
    return (
        <>
            {Paths.map((item, index) => (
                <Link 
                    href={item.path} 
                    onClick={onClose}
                    key={item.name}
                    className={`
                        md:hidden uppercase
                        ${styles.mobileMenuContainer}
                        ${styles[`menuItem${index + 1}`]}
                        ${!isOpen ? styles.mobileMenuHidden : ''}
                        `}
                >
                    {item.name}
                </Link>
            ))}
            {isUser ? (
                <Link
                    href="/profile"
                    onClick={onClose}
                    className={`
                        md:hidden uppercase
                        ${styles.mobileMenuContainer}        
                        ${styles.menuItem6}
                        ${!isOpen ? styles.mobileMenuHidden : ''}
                    `}
                >
                    <p className="text-[var(--textKill)] line-clamp-1">
                        <span className="text-[var(--secondary)]">Profile &nbsp;&nbsp;&nbsp;</span>
                    </p>
                    <div className="flex gap-xs items-center pr-sm flex-1">
                        { image ? (
                            <div className="w-lg h-lg relative">
                                <Image
                                    src={image}
                                    alt="profile image"
                                    fill
                                    className="nextImage rounded-full"
                                    />
                            </div>
                        ) : (
                                <Image
                                    src="/images/placeholder-profile-image.jpg"
                                    alt="placeholder profile image"
                                    fill
                                    className="nextImage rounded-full"
                                />
                            )}
                        {name}
                    </div>
                </Link>
            ) : (
                <div 
                    onClick={(e) => {
                        e.preventDefault();
                        onClose();
                        onOpenSignIn();
                    }}
                    className={`
                        md:hidden uppercase
                        ${styles.mobileMenuContainer} 
                        ${styles.menuItem6}
                        ${!isOpen ? styles.mobileMenuHidden : ''}
                    `}>
                    Sign In
                </div>
            )}
    
            </>
        )
    }

export default MobileMenu;