'use client'

import { useCart } from "@/hooks/zustand/useCart"
import MainButton from "./MainButton"

interface Props {
    id: string
    name: string
    price: number
    image: string
}

const AddToCartButton = ({ id, name, price, image }: Props) => {

    const addItem = useCart((state) => state.addItem)

    return (
        <MainButton
            name="Add to Cart"
            onClick={() => addItem({ id, name, price, image })}
        />
    )
}

export default AddToCartButton;