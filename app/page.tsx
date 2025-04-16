import { AvatarImage, ProductImage } from "@/data/mockup/MockupImage";
import HeroBanner from "./components/banners/HeroBanner";
import ProductCard from "./components/ui/cards/ProductCard";
import SectionHeader from "./components/ui/section-header/SectionHeader";
import { LoremText } from "@/data/mockup/MockupData";
import ValueCard from "./components/ui/cards/ValueCard";
import LatestBlogBanner from "./components/banners/LatestBlogBanner";
import TestimonialCardClient from "./components/ui/cards/testimonial/TestimonialCardClient";
import SignOutModal from "./components/(auth)/modals/SignOutModals";

type HomeProps = {
    searchParams?: { logout?: string };
  };
  
  export default async function Home({ searchParams }: HomeProps): Promise<React.ReactElement> {

    const logoutSuccess = searchParams?.logout === "1";

    return (
    <>
        {logoutSuccess && <SignOutModal />}
        
        <HeroBanner />

        {/* Product Section */}
        <SectionHeader sectionName="Products" />
        <div className="cardsContainer">
            <ProductCard image={ProductImage.image001} name={"Product 001"} price={"$35.99"} detail={LoremText.set10} />
            <ProductCard image={ProductImage.image002} name={"Product 002"} price={"$30.99"} detail={LoremText.set10} />
            <ProductCard image={ProductImage.image003} name={"Product 003"} price={"$45.99"} detail={LoremText.set10} />
        </div>

        {/* Value Section */}
        <div className="flex flex-col md:flex-row w-full md:px-sm max-w-[1280px] mt-2xl">
            <ValueCard topic="Handmade" background="var(--accent)" contentColor="var(--primary)" />
            <ValueCard topic="All Natural" />
        </div>

        {/* Blog Section */}
        <LatestBlogBanner />

        {/* Testimonial Section */}
        <SectionHeader sectionName="Our Happy Clients Say:" showButton={false} />
        <div className="cardsContainer">
            <TestimonialCardClient userName="Jimmy Brown" image={AvatarImage.image001} />
            <TestimonialCardClient userName="Samuel Gadhzi" image={AvatarImage.image002} />
            <TestimonialCardClient userName="Michael Fisher" image={AvatarImage.image003} />
        </div>

    </>
  );
}