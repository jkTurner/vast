import WhyCard from "@/app/components/ui/cards/WhyCard";
import { AboutData } from "@/data/mockup/MockupData";
import { BlogImage } from "@/data/mockup/MockupImage";
import Image from "next/image";

const AboutPage = () => {

    console.log(AboutData);

    return (
        <div className="flex flex-col gap-md w-full max-w-[var(--desktop)] mt-xl">

            <div className="flex flex-col lg:flex-row w-full gap-md px-sm relative">

                <div className="w-[100%] lg:w-[50%] h-[400px] relative mb">
                    <Image
                        src={BlogImage.image004}
                        alt="About Image"
                        fill
                        priority
                        className="object-cover overflow-hidden"
                    />       
                </div>
                
                <div className="flex flex-col flex-1 justify-center gap-sm border-b-[var(--textKill)] border-b-1 pb-md">
                    <h4 className="text-xl font-bold">MORE THAN STYLE,<br/>
                        <span className="text-[var(--accent)]">IT&apos;S A STATEMENT</span>
                    </h4>
                    <p className="">{AboutData.intro}</p>
                </div>
            </div>

            {/* Why Us? */}
            <h2 className="px-sm text-md">Why Us?</h2>
            <ul className="flex flex-col gap-sm">
            <div className="cardsContainer">
                {Object.values(AboutData.whyUs).map((item, index) => (
                    <li key={index}>
                        <WhyCard header={item.header} detail={item.detail} icon={item.icon} />
                    </li>
                ))}
            </div>
            <div className="px-sm">
                <div className="border-b-[var(--textKill)] border-b-1 pb-md" />
            </div>

            </ul>

            {/* Drives */}
            <h2 className="px-sm text-md">What Drives Us?</h2>
            <ul className="flex flex-col gap-sm">
                <div className="cardsContainerWithPadding">
                    {Object.values(AboutData.drives).map((item, index) => (
                        <li key={index}>
                            <h3 className="">{item.header}</h3>
                            <p>{item.detail}</p>
                        </li>
                    ))}
                </div>
            </ul>


            {/* <div className="h-lvh" /> */}
        </div>
    )
}

export default AboutPage;