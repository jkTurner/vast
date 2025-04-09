import HelpSection from "@/app/components/help-section/HelpSection";
import MainButton from "@/app/components/ui/buttons/MainButton";
import ProductStatusButton from "@/app/components/ui/buttons/ProductStatusButton";
import AssuranceCard from "@/app/components/ui/cards/AssuranceCard";
import SectionHeader from "@/app/components/ui/section-header/SectionHeader";
import { FacebookIcon, LineIcon, TwitterIcon } from "@/assets/Icons";
import { AssuranceData, ProductData } from "@/data/mockup/MockupData";
import Image from "next/image";
import { notFound } from "next/navigation";


type Params = {
    products: string;
}

const ProductPage = async ({ params }: { params: Promise<Params> }) => {

    const { products: slug } = await params;
    const product = ProductData.find(item => item.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="flex flex-col flex-1 w-full max-w-[1280px]">

            {/* Product Section */}
            <div className="flex flex-col md:flex-row gap-md w-full px-sm  mb-2xl">

                {/* Product Image */}
                <div className="w-full md:w-[50%] h-[500px] relative">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                {/* Product Detail */}
                <div className="flex flex-col w-full md:w-[50%] pt-sm">
                    <h1 className="text-2xl font-bold">{product.name}</h1>
                    <span className="pt-xxs">{product.price}</span>
                    <p className="pt-md">{product.detail}</p>

                    {/* Stock & Add to Cart */}
                    <div className="flex justify-between py-md border-b-[var(--textKill)] border-b-1">
                        <ProductStatusButton inStock={product.inStock}  />
                        <div className="flex gap-sm">
                                <input 
                                    placeholder="1"
                                    className="flex w-lg h-lg bg-secondary text-center border-[var(--textKill)] border-1
                                    text-[var(--primary)] placeholder-[var(--textLight)]"
                                />
                            <MainButton name="Add to Cart" />
                        </div>
                    </div>

                    {/* Share Icons */}
                    <div className="flex gap-xs my-xs self-end">
                        <LineIcon size={34} color="var(--textLight)" />
                        <TwitterIcon size={34} color="var(--textLight)" />
                        <FacebookIcon size={34} color="var(--textLight)" />
                    </div>

                </div>
            </div>

            {/* Assurance Section */}
            <div className="cardsContainer ">
                {AssuranceData.map((item, index) => (
                    <AssuranceCard key={index} name = {item.name} detail = {item.detail} />
                ))}
            </div>

            {/* Help Section */}
            <div className="">
                <SectionHeader sectionName="Have a question?" showButton={false} />
                <HelpSection />
            </div>
        </div>
    )
}

export default ProductPage;