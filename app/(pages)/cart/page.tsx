'use client'
import ShippingAddress from "@/app/components/profile/ShippingAddress";
import CartItem from "@/app/components/ui/cart/CartItem";
import { useCart } from "@/hooks/zustand/useCart"
import Link from "next/link";
import ShippingMethod from "./ShippingMethod";
import { useEffect, useState } from "react";
import MainButton from "@/app/components/ui/buttons/MainButton";

export default function CartPage () {

    // const { items, getTotalItems, getTotalPrice } = useCart();
    const { items, getTotalPrice } = useCart();
    const DEFAULT_SHIPPING = "Standard: 14 business days ($5)";
    const [method, setMethod] = useState(DEFAULT_SHIPPING);

    // prevent hydration error
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => {
        setHydrated(true);
    }, []);

    const totalPrice = hydrated ? getTotalPrice().toFixed(2) : '...';

    const getShippingCost = (label: string) => {
        const match = label.match(/\$(\d+(\.\d+)?)/);
        return match ? parseFloat(match[1]) :0;
    };

    const shippingCost = hydrated ? getShippingCost(method) : 0;
    const grandTotal = hydrated
        ? (getTotalPrice() + shippingCost).toFixed(2)
        : '...';

    return (
        <div className="w-full max-w-[var(--desktop)] min-h-[50vh]">
            
            <div className="px-sm">
                <div className="flex w-full justify-between items-center">
                    <h1 className="">My Cart</h1>
                    <div className="md:grid grid-cols-[180px_180px_42px] hidden">
                        <span className="justify-self-center">Quantity</span>
                        <span className="justify-self-center">Price</span>
                        <span className="justify-self-end"></span>
                    </div>
                </div>
                <div className="w-full h-[1px] border-b border-[var(--textKill)] pt-sm"/>
            </div>

            {/* <CartItem /> */}

            {items.length === 0 ? (
                <p className="text-[var(--textLight)] py-md px-sm">
                    Your cart is empty.
                    <Link href="/shop">
                        <span className="ml-[10px] underline">Check out the products.</span>
                    </Link>
                </p>
            ) : (
                <div className="w-full px-sm">
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
                </div>
            )}
            <div className="w-full flex md:flex-row flex-col gap-sm mt-sm px-sm">
                <div className="md:max-w-[60%] w-full">
                    <ShippingAddress saveButton={false} />
                </div>
                <div className="flex flex-col gap-sm flex-1 w-full">
                    <h2 className="text-sm text-[var(--primary)] px-sm">Check Out Details</h2>
                    <div className="flex-1 flex flex-col gap-sm w-full bg-[var(--secondary)] p-sm">
                        <div className="flex justify-between w-full">
                            <h4>Sub Total:</h4>
                            {totalPrice}
                        </div>
                        <ShippingMethod method={method} setMethod={setMethod} />
                        <div className="flex justify-between w-full border-b-1 border-[var(--textKill)] pb-xs">
                            <h4 className="">Grand Total:</h4>
                            {grandTotal}
                        </div>
                        <div className="self-end">
                            <MainButton name="Comfirm & Pay" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}




