import { CheckIcon, XIcon } from "@/assets/Icons";


const ProductStatusButton = ( {inStock = true }) => {
    return (
        <div className={`flex h-fit self-center justify-center items-center gap-[6px] py-[4px] px-[10px] rounded-3xl
            ${inStock ? "bg-accent" : "bg-textLight" }
        `}>
            {inStock ? <CheckIcon color="var(--secondary)" size={16} /> : <XIcon size={12} color="var(--secondary)" /> }
            <p className="text-secondary text-sm py-0">
                {`${inStock ? "In Stock" : "Out of Stock"}`}
            </p>
        </div>
    )
}

export default ProductStatusButton;