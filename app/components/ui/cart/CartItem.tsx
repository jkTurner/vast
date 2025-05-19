'use client'

import { CloseIcon } from "@/assets/Icons";
import { useCart } from "@/hooks/zustand/useCart";
import Image from "next/image";
import styles from "./cart.module.css"
import { useUser } from "@/hooks/useUser";

interface CartItemProps {
    id: string;
    name: string;
    image: string;
    quantity: number;
    price: number;
    originalPrice: number;
}

const CartItem = ({ id, name, image, quantity, price, originalPrice }: CartItemProps) => {

    const { data: user } = useUser();
    const updateQuantity = useCart((state) => state.updateQuantity);
    const updateQuantityOnServer = useCart((state) => state.updateQuantityOnServer)
    const removeItem = useCart((state) => state.removeItem);
    const removeFromServer = useCart((state) => state.removeFromServer);
    const hasPriceChanged = price !== originalPrice;

    const handleUpdateQuantity = (newQuantity: number) => {
        updateQuantity(id, newQuantity);
        if (user?.id) {
            updateQuantityOnServer(id, newQuantity);
        }
    }

    const handleRemove = () => {
        removeItem(id);
        if (user?.id) {
            removeFromServer(id);
        }
    }

    return (
        <div className={styles.mainContainer}>

            {/* Content (excluding close icon) */}
            <div className="flex gap-sm max-[480px]:flex-col w-full justify-between items-center self-end">

                {/* Image */}
                <div className="flex gap-sm items-center justify-center">
                    <div className={styles.imageContainer}>
                        <Image
                            src={image}
                            alt={name}
                            fill
                            priority
                            className="nextImage"
                        />
                    </div>
                </div>

                {/* Name, Quantity, and Price */}
                <div className="flex flex-col gap-xs md:flex-row w-full justify-between">
                    
                    <h2 className={styles.productName}>{name}</h2>

                    {/* Quantity & Price */}
                    <div className={styles.cartItemContainer}>

                        {/* Quantity */}
                        <div className={styles.quantityContainer}>
                            <button
                                // onClick={() => updateQuantity(id, Math.max(1, quantity - 1))}
                                onClick={() => handleUpdateQuantity(Math.max(1, quantity - 1))}
                                className={styles.calIcon}
                            >-</button>
                            <input
                            type="number"
                            value={quantity ?? 0}
                            // onChange={(e) => {
                            //     const value = Math.max(1, Number(e.target.value))
                            //     updateQuantity(id, value)
                            // }}
                            onChange={(e) => {
                                const value = Math.max(1, Number(e.target.value));
                                handleUpdateQuantity(value);
                            }}
                            className="bg-[var(--secondary)] w-[40px] h-[30px] border-[var(--textKill)] border-1 text-center p-0"
                            />
                            <button
                                // onClick={() => updateQuantity(id, Math.max(1, quantity + 1))}
                                onClick={() => handleUpdateQuantity(Math.max(1, quantity + 1))}
                                className={styles.calIcon}
                            >+</button>
                        </div>

                        {/* Price */}
                        <span className="justify-self-center">${price.toFixed(2)}</span>
                        {hasPriceChanged && (
                            <p className="text-xs text-[var(--textLight)] mt-[2px] text-center">
                                Price changed: from ${originalPrice.toFixed(2)} to ${price.toFixed(2)}
                            </p>
                        )}

                    </div>
                </div>
            </div>

            {/* Remove Icon */}
            <div 
                onClick={handleRemove}
                role="button"
                aria-label={`Remove ${name}`}
                className="cursor-pointer hover:opacity-60 justify-self-end max-[480px]:w-full"
            >
                <div className={styles.closeIconContainer}>
                    <CloseIcon size={20} color="var(--textLight)" />
                </div>
            </div>

        </div>
    )
}

export default CartItem;


// 'use client'

// import { CloseIcon } from "@/assets/Icons";
// import { useCart } from "@/hooks/zustand/useCart";
// import Image from "next/image";
// import styles from "./cart.module.css"

// interface CartItemProps {
//     id: string;
//     name: string;
//     image: string;
//     quantity: number;
//     price: number;
// }

// const CartItem = ({ id, name, image, quantity, price }: CartItemProps) => {

//     const updateQuantity = useCart((state) => state.updateQuantity);
//     const removeItem = useCart((state) => state.removeItem);

//     return (
//         <div className={styles.mainContainer}>

//             {/* Content (excluding close icon) */}
//             <div className="flex gap-sm max-[480px]:flex-col w-full justify-between items-center self-end">

//                 {/* Image */}
//                 <div className="flex gap-sm items-center justify-center">
//                     <div className={styles.imageContainer}>
//                         <Image
//                             src={image}
//                             alt={name}
//                             fill
//                             priority
//                             className="nextImage"
//                         />
//                     </div>
//                 </div>

//                 {/* Name, Quantity, and Price */}
//                 <div className="flex flex-col gap-xs md:flex-row w-full justify-between">
                    
//                     <h2 className={styles.productName}>{name}</h2>

//                     {/* Quantity & Price */}
//                     <div className={styles.cartItemContainer}>

//                         {/* Quantity */}
//                         <div className={styles.quantityContainer}>
//                             <button
//                                 onClick={() => updateQuantity(id, Math.max(1, quantity - 1))}
//                                 className={styles.calIcon}
//                             >-</button>
//                             <input
//                             type="number"
//                             value={quantity ?? 0}
//                             onChange={(e) => {
//                                 const value = Math.max(1, Number(e.target.value))
//                                 updateQuantity(id, value)
//                             }}
//                             className="bg-[var(--secondary)] w-[40px] h-[30px] border-[var(--textKill)] border-1 text-center p-0"
//                             />
//                             <button
//                                 onClick={() => updateQuantity(id, Math.max(1, quantity + 1))}
//                                 className={styles.calIcon}
//                             >+</button>
//                         </div>

//                         {/* Price */}
//                         <span className="justify-self-center">${price.toFixed(2)}</span>

//                     </div>
//                 </div>
//             </div>

//             {/* Remove Icon */}
//             <div 
//                 onClick={() => removeItem(id)}
//                 role="button"
//                 aria-label={`Remove ${name}`}
//                 className="cursor-pointer hover:opacity-60 justify-self-end max-[480px]:w-full"
//             >
//                 <div className={styles.closeIconContainer}>
//                     <CloseIcon size={20} color="var(--textLight)" />
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default CartItem;


