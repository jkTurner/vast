import { Paths } from "@/data/Paths";
import NavLink from "./NavLink";

interface NavbarProps {
    color: 'primary' | 'accent' | 'textKill';
    showHome?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ color = "primary", showHome = false }) => {

    const links = showHome ? Paths : Paths.slice(1);

    return (
        <nav className="flex items-center text-sm font-medium">
            <ul className={`flex items-center
                    ${showHome ? 'flex-wrap gap-y-sm' : ''}
                `}>
                {links.map((item, index) => (
                    <NavLink key={item.name} item={item} isFirst={index === 0} isLast={index === Paths.length - 1} color={color} showHome={showHome} />
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;