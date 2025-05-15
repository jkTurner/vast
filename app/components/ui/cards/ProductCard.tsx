import Image from "next/image";
// import MainButton from "../buttons/MainButton";
import AddToCartButton from "../buttons/AddToCartButton";
// import Link from "next/link";

interface ProductCardProps {
    id: string;
    image: string;
    name: string;
    price: number;
    detail: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, image, name, price, detail}) => {
    return (
        <div className="flex flex-col w-full h-[528px] bg-[var(--primary)] items-center">
            
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
            <div className="flex flex-col h-[50%] w-full bg-[var(--secondary)] text-[var(--primary)] p-sm justify-between">
                <div className="flex flex-col gap-xs w-full">
                    <h3 className="text-md font-normal text-[var(--primary)]">{name}</h3>
                    <span className="text-md text-[var(--textLight)]">${price}</span>
                    <p className="line-clamp-3">{detail}</p>
                </div>
                <div className="self-end">
                    {/* <MainButton name="Add to Cart" weight="font-light" /> */}
                    <AddToCartButton id={id} name={name} price={price} image={image} />
                </div>
                {/* <div className="self-end">
                    <Link href={`/shop/${name}`}>
                        <MainButton name="Add to Cart" weight="font-light" />
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

export default ProductCard;