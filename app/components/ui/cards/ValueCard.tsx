import { LaurelWreath } from "@/assets/Icons";
import { LoremText } from "@/data/mockup/MockupData";

interface ValueCardProps {
    background?: 'bg-primary' | 'bg-accent';
    contentColor?: 'primary' | 'secondary';
    topic?: string;
    detail?: string;
}

const ValueCard: React.FC<ValueCardProps> = ({background="bg-primary", contentColor="secondary", topic="VALUE", detail=LoremText.set20}) => {
    return (
        <div className={`flex flex-col gap-sm ${background} w-full md:max-w-[50%] p-lg`}>
            <div className="flex gap-sm items-center">
                <LaurelWreath size={60} color={`var(--${contentColor})`} />
                <h2 className={`text-${contentColor} text-xl font-semibold`}>{topic}</h2>
            </div>
                <p className={`text-${contentColor}`}>{detail}</p>
        </div>
    )
}

export default ValueCard;