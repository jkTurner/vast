import { PathType } from "@/data/Paths";
import Link from "next/link";
import styles from "./header.module.css"

interface NavLinkProps {
    item: PathType;
    isFirst?: boolean;
    isLast?: boolean;
    color: 'var(--primary)' | 'var(--accent)' | 'var(--textKill)';
    showHome?: boolean;
}

const NavLink = ({item, isFirst = false, isLast = false, color = "var(--primary)", showHome = false }: NavLinkProps) => {
    return (
        <li className={`${!showHome && !isFirst ? `border-l border-[${color}] pl-sm` : ''}
            ${isFirst && showHome ? 'pl-0 mr-sm' : ''}
            ${showHome ? 'pr-sm mr-sm' : ''}
            ${!isFirst && !showHome ? 'mr-0' : ''}
            ${showHome ? `pl-0 border-l-0 border-r border-[${color}]` : ''}
            ${showHome && isLast ? 'border-r-0 pl-0' : ''}
            ${styles.navList} `}>
            <Link href={item.path} className={`uppercase text-sm text-[${color}]`}>
                {item.name}
            </Link>
        </li>
    )
}

export default NavLink;