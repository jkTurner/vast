'use client'

import { Paths } from "@/data/Paths";
import styles from "./header.module.css"
import Link from "next/link";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
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
            <Link 
                href="/sign-in"
                onClick={onClose}
                className={`
                    md:hidden uppercase
                    ${styles.mobileMenuContainer} 
                    ${styles.menuItem6}
                    ${!isOpen ? styles.mobileMenuHidden : ''}
                `}>
                Sign In
            </Link>
                
            </>
        )
    }

export default MobileMenu;