'use client'

import { Paths } from "@/data/Paths";
import styles from "./header.module.css"
import Link from "next/link";

interface MobileMenuProps {
    isOpen: boolean;
    isUser: boolean;
    onClose: () => void;
    onOpenSignIn: () => void;
    name?: string;
}

const MobileMenu = ({ isOpen, isUser, onClose, onOpenSignIn, name }: MobileMenuProps) => {
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
                        ({name})
                    </p>
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