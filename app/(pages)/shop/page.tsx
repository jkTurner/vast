import { ProductImage } from "@/data/mockup/MockupImage";
import { LoremText } from "@/data/mockup/MockupData";
import ProductCard from "@/app/components/ui/cards/ProductCard";
import ProductCarousel from "@/app/components/ui/carousel/ProductCarousel";
import SectionHeader from "@/app/components/ui/section-header/SectionHeader";

const ShopPage = () => {

    return (
        <>
            <ProductCarousel />
            <SectionHeader sectionName="Products" showButton={false} />
            <div className="cardsContainer">
                <ProductCard image={ProductImage.image001} name={"Product 001"} price={"$35.99"} detail={LoremText.set10} />
                <ProductCard image={ProductImage.image002} name={"Product 002"} price={"$30.99"} detail={LoremText.set10} />
                <ProductCard image={ProductImage.image003} name={"Product 003"} price={"$45.99"} detail={LoremText.set10} />
                {/* <ProductCard image={ProductImage.image004} name={"Product 004"} price={"$35.99"} detail={LoremText.set10} />
                <ProductCard image={ProductImage.image005} name={"Product 005"} price={"$30.99"} detail={LoremText.set10} />
                <ProductCard image={ProductImage.image006} name={"Product 006"} price={"$45.99"} detail={LoremText.set10} />
                <ProductCard image={ProductImage.image007} name={"Product 007"} price={"$35.99"} detail={LoremText.set10} />
                <ProductCard image={ProductImage.image008} name={"Product 008"} price={"$30.99"} detail={LoremText.set10} />
                <ProductCard image={ProductImage.image009} name={"Product 009"} price={"$45.99"} detail={LoremText.set10} /> */}
            </div>
        </>
    )
}

export default ShopPage;