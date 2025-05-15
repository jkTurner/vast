import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];

    addItem: (item: Omit<CartItem, "quantity">) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;

    getTotalItems: () => number;
    getTotalPrice: () => number;
}

export const useCart = create<CartState>()(
    persist(
        (set, get) => ({
            items: [], // this is a key, it has to match what we set in CartState (items: CartItem[]);

            addItem: (item) => {
                const items = get().items;
                const existing = items.find((i) => i.id === item.id);

                if(existing) {
                    set({
                        items: items.map((i) =>
                        i.id === item.id ? { ...i, quantity: i.quantity + 1 }: i
                    ),
                    });
                } else {
                    set({
                        items: [...items, { ...item, quantity: 1 }],
                    });
                }
            },

            removeItem: (id) =>
                set({
                    items: get().items.filter((item) => item.id !== id),
                }),

            updateQuantity: (id, quantity) =>
                set({
                    items: get().items.map((item) =>
                        item.id === id ? { ...item, quantity } : item
                    ),
                }),

            clearCart: () => set({ items: [] }),

            getTotalItems: () =>
                get().items.reduce((total, item) => total + item.quantity, 0),

            getTotalPrice: () =>
                get().items.reduce((total, item) => total + item.price * item.quantity, 0),
        }),
        {
            name: "vast-cart-storage",
        }
    )
);