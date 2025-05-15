'use client'

import { CartIcon } from "@/assets/Icons";
import { useCart } from "@/hooks/zustand/useCart";
import Link from "next/link";

const CartMenu = () => {

    const totalItems = useCart((state) => state.getTotalItems());

    return (
        <>
            <Link href="/cart">
                <div className="relative">
                    {totalItems > 0 && (
                        <div className="absolute right-1 top-0
                            bg-[var(--accent)] w-[18px] h-[18px] flex items-center justify-center
                            rounded-full">
                            <span className="text-[12px]">{totalItems}</span>
                        </div>
                    )}
                    <CartIcon size={40} />
                </div>
            </Link>
        </>
    )
}

export default CartMenu;



