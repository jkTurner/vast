interface WhyCardProps {
    header?: string;
    detail?: string;
    icon: React.ElementType;
}

const WhyCard: React.FC<WhyCardProps> = ({ header = "Header", detail = "detail", icon }) => {

    const Icon = icon;

    return (
        <div className="flex flex-col w-full gap-xs bg-[var(--secondary)] p-sm">
            <div className="flex gap-sm items-center">
                {icon && <Icon size={40} color="var(--textLight)"/>}
                <h3>{header}</h3>
            </div>
            <p>{detail}</p>
        </div>
    )
}

export default WhyCard;