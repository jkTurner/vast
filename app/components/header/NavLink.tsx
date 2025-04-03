import { PathType } from "@/data/Paths";
import Link from "next/link";
import styles from "./header.module.css"

interface NavLinkProps {
    item: PathType;
    isFirst?: boolean;
    color: 'primary' | 'accent' | 'textKill';
    showHome?: boolean;
}

const NavLink = ({item, isFirst = false, color = "primary", showHome = false }: NavLinkProps) => {
    return (
        <li className={`${!isFirst ? `border-l border-${color}` : ''}
            ${isFirst && showHome ? 'pl-0' : 'pl-sm'}
            ${styles.navList} `}>
            <Link href={item.path} className={`uppercase text-sm text-${color}`}>
                {item.name}
            </Link>
        </li>
    )
}

export default NavLink;