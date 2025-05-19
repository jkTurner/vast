'use client'

import { useCart } from "@/hooks/zustand/useCart"
import MainButton from "./MainButton"

interface Props {
    id: string;
    price: number;
}

const AddToCartButton = ({ id, price }: Props) => {
    
    const addAndSyncItem = useCart((state) => state.addAndSyncItem);

    return (
        <MainButton
            name="Add to Cart"
            onClick={() => addAndSyncItem({ id, price, quantity: 1 })}
        />
    );
};

export default AddToCartButton;



// 'use client'

// import { useCart } from "@/hooks/zustand/useCart"
// import MainButton from "./MainButton"

// interface Props {
//     id: string
//     name: string
//     price: number
//     image: string
// }

// const AddToCartButton = ({ id, name, price, image }: Props) => {

//     const addItem = useCart((state) => state.addItem)

//     return (
//         <MainButton
//             name="Add to Cart"
//             onClick={() => addItem({ id, name, price, image })}
//         />
//     )
// }

// export default AddToCartButton;




