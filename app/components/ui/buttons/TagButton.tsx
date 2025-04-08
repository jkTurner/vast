
interface TagButtonProps {
    name?: string;
    color?: string;
    background?: string;
    hasBoarder?: boolean;
}

const TagButton: React.FC<TagButtonProps> = ({ 
    name = "Tag Name", 
    color = "var(--textLight)", 
    background = "var(--bgMain)", 
    hasBoarder = true 
}) => {
    return (
        <button className={`
            ${`${hasBoarder} ? border border-[${color}] : "" `}
            text-[${color}] bg-[${background}] 
            px-3 py-1 text-sm tracking-wide 
            `}>
            {name}
        </button>
    )
}

export default TagButton;