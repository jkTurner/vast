import { QuoteOpenIcon, QuoteCloseIcon, BubblePointerIcon } from "@/assets/Icons";
import { LoremText } from "@/data/mockup/MockupData";
import Image from "next/image";

interface Props {
  userName?: string;
  image: string;
}

const TestimonialCardServer: React.FC<Props> = ({ userName = "Unknown Hero", image }) => {

    return (
        <div className="flex flex-col w-full items-center">

            {/* Top Section */}
            <div className="flex flex-col gap-xs p-sm w-full bg-[var(--primary)] h-[200px] md:h-[220px]">
                <div>
                    <QuoteOpenIcon color="var(--secondary)" />
                </div>

                <p className="text-[var(--secondary)] px-sm line-clamp-4">{LoremText.set20}</p>

                <div className="self-end">
                    <QuoteCloseIcon color="var(--secondary)" />
                </div>
                
            </div>

            {/* Bottom Section */}
            <div className="bg-[var(--secondary)] w-full">
                
                {/* Bubble Pointer */}
                <div className="pl-[60px] mb-xs">
                    <BubblePointerIcon />
                </div>

                {/* Avatar & Name */}
                <div className="flex w-full items-center gap-sm pb-sm">

                    {/* Image */}
                    <div className="w-[100px] h-[100px] ml-sm relative">
                        <Image src={image} alt="Avatar" fill className="object-cover rounded-full" priority />
                    </div>

                    {/* Name */}
                    <h4 className="font-semibold text-md text-[var(--textLight)]">{userName}</h4>

                </div>
            </div>
        </div>
    )
}

export default TestimonialCardServer;
