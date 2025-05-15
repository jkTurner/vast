'use client'
import CartItem from "@/app/components/ui/cart/CartItem";
import { useCart } from "@/hooks/zustand/useCart"
import Link from "next/link";

export default function CartPage () {

    const { items, getTotalItems, getTotalPrice } = useCart();

    return (
        <div className="w-full max-w-[var(--desktop)] px-sm min-h-[60vh]">
            
            <div className="flex w-full justify-between items-center border-b py-sm border-[var(--textKill)]">
                <h1 className="">My Cart</h1>
                <div className="md:grid grid-cols-[180px_180px_42px] hidden">
                    <span className="justify-self-center">Quantity</span>
                    <span className="justify-self-center">Price</span>
                    <span className="justify-self-end"></span>
                </div>
            </div>

            {/* <CartItem /> */}


            {items.length === 0 ? (
                <p className="text-[var(--textLight)] py-md">
                    Your cart is empty.
                    <Link href="/shop">
                        <span className="ml-[10px] underline">Check out the products.</span>
                    </Link>
                </p>
            ) : (
                <div className="w-full">
                    {items.map((item) => (
                        <CartItem 
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            quantity={item.quantity}
                            price={item.price}
                        />
                    ))}

                    <div className="flex justify-between py-sm">
                        <span>Total Items: {getTotalItems()}</span>
                        <span>Total: ${getTotalPrice().toFixed(2)}</span>
                    </div>
                </div>
            )}
        </div>
    )
}