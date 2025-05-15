import ProductCard from "@/app/components/ui/cards/ProductCard";
import ProductCarousel from "@/app/components/ui/carousel/ProductCarousel";
import SectionHeader from "@/app/components/ui/section-header/SectionHeader";
import { ProductData } from "@/data/mockup/ProductData";

const ShopPage = () => {

    return (
        <>
            <ProductCarousel />
            <SectionHeader sectionName="Products" showButton={false} />
            <div className="cardsContainer mb-sm md:mb-0">
                {ProductData.map((item) => (
                    <ProductCard 
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        detail={item.detail}
                        price={item.price}
                        image={item.image}
                    />
                ))}
            </div>
        </>
    )
}

export default ShopPage;