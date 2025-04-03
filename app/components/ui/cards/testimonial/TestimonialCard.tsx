import { BubblePointerIcon, QuoteCloseIcon, QuoteOpenIcon } from "@/assets/Icons";
import { LoremText } from "@/data/mockup/MockupText";
import Image from "next/image";

interface TestimonialCardProps {
    userName?: string;
    image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ userName = "Unknown Hero", image }) => {
    return (
        <div className="flex flex-col w-full items-center">

            {/* Top Section */}
            <div className="flex flex-col gap-xs p-sm w-full bg-primary h-[200px]">
                <QuoteOpenIcon color="var(--secondary)" />
                <p className="text-secondary">{LoremText.set20}</p>
                <div className="self-end">
                    <QuoteCloseIcon color="var(--secondary)" />
                </div>
            </div>

            {/* Bottom Section Container */}
            <div className="bg-secondary w-full">
                <div className="pl-[60px] mb-xs">
                    <BubblePointerIcon />
                </div>

                {/* Avatar & Name Container */}
                <div className="flex w-full items-center gap-sm pb-sm">

                    {/* Image Container */}
                    <div className="w-[100px] h-[100px] ml-sm relative">
                        <Image
                            src={image}
                            alt="Avatar Image"
                            fill
                            className="object-cover rounded-full"
                            priority
                        />
                    </div>
                    {/* User's Name */}
                    <h4 className="font-semibold text-lg">{userName}</h4>
                </div>

            </div>
            
        </div>
    )
}

export default TestimonialCard;