import Image from "next/image";
import MainButton from "../buttons/MainButton";

interface ProductCardProps {
    image: string;
    name: string;
    price: string;
    detail: string;
}

const ProductCard: React.FC<ProductCardProps> = ({image, name, price, detail}) => {
    return (
        <div className="flex flex-col w-full h-[528px] bg-primary items-center">
            
            {/* top section (image) */}
            <div className="h-[50%] w-full relative">
                <Image
                    src={image}
                    alt="Sample Product"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* bottom section (text) */}
            <div className="flex flex-col h-[50%] w-full bg-secondary text-primary p-sm justify-between">
                <div className="flex flex-col gap-xs w-full">
                    <h3 className="text-lg font-normal">{name}</h3>
                    <span className="text-md">{price}</span>
                    <p>{detail}</p>
                </div>
                <div className="self-end">
                    <MainButton name="Add to Cart" weight="font-light" />
                </div>
            </div>
        </div>
    )
}

export default ProductCard;