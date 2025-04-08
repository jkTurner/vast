

interface TagButtonProps {
    name: string;
}

const TagButton: React.FC<TagButtonProps> = ({ name = "Tag Name"}) => {
    return (
        <button className="border border-[var(--textLight)] text-[var(--textLight)] px-3 py-1 text-xs tracking-wide">
            {name}
        </button>
    )
}

export default TagButton;