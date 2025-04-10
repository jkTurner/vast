import WhyCard from "@/app/components/ui/cards/WhyCard";
import { AboutData } from "@/data/mockup/MockupData";

const AboutPage = () => {

    console.log(AboutData);

    return (
        <div className="flex flex-col gap-md w-full max-w-[var(--desktop)] mt-xl">

            <div className="flex flex-col gap-md px-sm">
                {/* <h1 className="text-[var(--textLight)] font-light">About VAST Original</h1> */}
                <div className="flex flex-col md:flex-row gap-sm md:gap-xl border-b-[var(--textKill)] border-b-1 pb-md">
                    <h4 className="text-3xl font-bold">MORE THAN STYLE,<br/>
                        <span className="text-[var(--accent)]">IT&apos;S A STATEMENT</span></h4>
                    <p className="flex-1">{AboutData.intro}</p>
                </div>
            </div>

            {/* Why Us? */}
            <h2 className="px-sm">Why Us?</h2>
            <ul className="flex flex-col gap-sm">
            <div className="cardsContainer">
                {Object.values(AboutData.whyUs).map((item, index) => (
                    <li key={index}>
                        <WhyCard header={item.header} detail={item.detail} icon={item.icon} />
                    </li>
                ))}
            </div>
            </ul>

            {/* Drives */}
            <h2 className="px-sm">What Drives Us?</h2>
            <ul className="flex flex-col gap-sm">
                <div className="cardsContainer">
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