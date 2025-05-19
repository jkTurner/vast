import { create } from "zustand";
import { persist } from "zustand/middleware";
import { supabaseClientBrowser } from "@/utils/supabase/client";

export interface CartItem {
  id: string;
  quantity: number;
  price: number;
}

interface CartState {
  items: CartItem[];

  // Local state actions
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;

  // Derived
  getTotalItems: () => number;
  getTotalPrice: () => number;

  // Supabase sync
  syncWithServer: (userId: string) => Promise<void>;
  addToServer: (item: CartItem) => Promise<void>;
  updateQuantityOnServer: (id: string, quantity: number) => Promise<void>;
  removeFromServer: (id: string) => Promise<void>;
  clearServerCart: (userId: string) => Promise<void>;
  addAndSyncItem: (item: CartItem) => Promise<void>;
}

// type helper
export type syncWithServerType = (userId: string) => Promise<void>;

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      // Local-only state actions
      addItem: (item) => {
        const items = get().items;
        const existing = items.find((i) => i.id === item.id);
        if (existing) {
          set({
            items: items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
            ),
          });
        } else {
          set({ items: [...items, item] });
        }
      },

      removeItem: (id) => {
        set({
          items: get().items.filter((item) => item.id !== id),
        });
      },

      updateQuantity: (id, quantity) => {
        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        });
      },

      clearCart: () => {
        set({ items: [] });
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.quantity * item.price, 0);
      },

      // Supabase sync methods
      syncWithServer: async (userId) => {
        const supabase = supabaseClientBrowser();
        const { data, error } = await supabase
          .from("cart_items")
          .select("product_id, quantity, price_at_addition")
          .eq("user_id", userId);

        if (error) {
          console.error("Failed to sync cart:", error.message);
          return;
        }

        const syncedItems = (data ?? []).map((item) => ({
          id: item.product_id,
          quantity: item.quantity,
          price: item.price_at_addition,
        }));

        set({ items: syncedItems });
      },

      addToServer: async (item) => {
        const supabase = supabaseClientBrowser();
        const userId = (await supabase.auth.getUser()).data.user?.id;
        if (!userId) return;

        // Try to fetch existing cart item first
        const { data: existing, error: fetchError } = await supabase
          .from("cart_items")
          .select("quantity")
          .eq("user_id", userId)
          .eq("product_id", item.id)
          .single();

        if (fetchError && fetchError.code !== "PGRST116") {
          console.error("Error checking cart: ", fetchError.message);
          return;
        }

        // update quantity if already existed
        if (existing) {
          const newQuantity = existing.quantity + item.quantity;
          const { error: updateError } = await supabase
            .from("cart_items")
            .update({ quantity: newQuantity })
            .eq("user_id", userId)
            .eq("product_id", item.id);

            if (updateError) {
              console.error("Failed to update quantity: ", updateError.message);
            }
        } else {
          const { error: insertError } = await supabase.from("cart_items").insert({
            user_id: userId,
            product_id: item.id,
            quantity: item.quantity,
            price_at_addition: item.price,
          });

          if (insertError) {
            console.error("Failed to insert new item: ", insertError.message);
          }
        }
      },

      updateQuantityOnServer: async (id, quantity) => {
        const supabase = supabaseClientBrowser();
        const userId = (await supabase.auth.getUser()).data.user?.id;
        if (!userId) return;

        const { error } = await supabase
          .from("cart_items")
          .update({ quantity })
          .eq("user_id", userId)
          .eq("product_id", id);

        if (error) {
          console.error("Failed to update quantity:", error.message);
        }
      },

      removeFromServer: async (id) => {
        const supabase = supabaseClientBrowser();
        const userId = (await supabase.auth.getUser()).data.user?.id;
        if (!userId) return;

        const { error } = await supabase
          .from("cart_items")
          .delete()
          .eq("user_id", userId)
          .eq("product_id", id);

        if (error) {
          console.error("Failed to remove item from server:", error.message);
        }
      },

      clearServerCart: async (userId) => {
        const supabase = supabaseClientBrowser();
        const { error } = await supabase
          .from("cart_items")
          .delete()
          .eq("user_id", userId);

        if (error) {
          console.error("Failed to clear cart from server:", error.message);
        }
      },

      addAndSyncItem: async (item) => {
        get().addItem(item);

        const supabase = supabaseClientBrowser();
        const userId = (await supabase.auth.getUser()).data.user?.id;

        if (userId) {
            await get().addToServer(item);
        }
      }
    }),
    {
      name: "vast-cart-storage",
    }
  )
);





// import { supabaseClientBrowser } from "@/utils/supabase/client";
// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// interface CartItem {
//     id: string;
//     name: string;
//     price: number;
//     image: string;
//     quantity: number;
// }

// interface CartState {
//     items: CartItem[];

//     addItem: (item: Omit<CartItem, "quantity">) => void;
//     removeItem: (id: string) => void;
//     updateQuantity: (id: string, quantity: number) => void;
//     clearCart: () => void;

//     getTotalItems: () => number;
//     getTotalPrice: () => number;

//     syncWithServer: (userId: string) => Promise<void>;
//     addToServer: (item: Omit<CartItem, "quantity">) => Promise<void>;
//     updateQuantityOnServer: (id: string, quantity: number) => Promise<void>;
//     removeFromServer: (id: string) => Promise<void>;
//     clearServerCart: (userId: string) => Promise<void>;
// }

// export const useCart = create<CartState>()(
//     persist(
//         (set, get) => ({
//             items: [], // this is a key, it has to match what we set in CartState (items: CartItem[]);

//             // local state actions
//             addItem: (item) => {
//                 const items = get().items;
//                 const existing = items.find((i) => i.id === item.id);

//                 if(existing) {
//                     set({
//                         items: items.map((i) =>
//                         i.id === item.id ? { ...i, quantity: i.quantity + 1 }: i
//                     ),
//                     });
//                 } else {
//                     set({
//                         items: [...items, { ...item, quantity: 1 }],
//                     });
//                 }
//             },

//             removeItem: (id) =>
//                 set({
//                     items: get().items.filter((item) => item.id !== id),
//                 }),

//             updateQuantity: (id, quantity) =>
//                 set({
//                     items: get().items.map((item) =>
//                         item.id === id ? { ...item, quantity } : item
//                     ),
//                 }),

//             clearCart: () => set({ items: [] }),

//             // computed getters
//             getTotalItems: () =>
//                 get().items.reduce((total, item) => total + item.quantity, 0),

//             getTotalPrice: () =>
//                 get().items.reduce((total, item) => total + item.price * item.quantity, 0),

//             // server sync actions
//             syncWithServer: async (userId) => {
//                 const supabase = supabaseClientBrowser();
//                 const { data, error } = await supabase
//                     .from("cart_items")
//                     .select("*")
//                     .eq("user_id", userId);

//                 if (error) {
//                     console.error("Failed to fetch cart from server: ", error.message);
//                     return;
//                 }
//                 if (data) {
//                     const syncedItems = data.map((item) => ({
//                         id: item.product_id,
//                         price: item.price_at_addition,
//                         quantity: item.quantity,
//                         name: "",
//                         image: "",
//                     }));
//                     set({ items: syncedItems });
//                 }
//             },

//             addToServer: async (item) => {
//                 const supabase = supabaseClientBrowser();
//                 const userId = (await supabase.auth.getUser()).data.user?.id;
//                 if (!userId) return;

//                 const { error } = await supabase.from("cart_items").upsert({
//                     user_id: userId,
//                     product_id: item.id,
//                     price_at_addition: item.price,
//                     quantity: 1,
//                 });
                
//                 if (error) {
//                     console.error("Failed to add cart item to server: ", error.message);
//                 }
//             },

//             updateQuantityOnServer: async (id, quantity) => {
//                 const supabase = supabaseClientBrowser();
//                 const userId = (await supabase.auth.getUser()).data.user?.id;
//                 if (!userId) return;

//                 const { error } = await supabase
//                     .from("cart_items")
//                     .update({ quantity })
//                     .eq("user_id", userId)
//                     .eq("product_id", id);

//                     if (error ) {
//                         console.error("Failed to update quantity on server: ", error.message);
//                     }
//             },

//             removeFromServer: async (id) => {
//                 const supabase = supabaseClientBrowser();
//                 const userId = (await supabase.auth.getUser()).data.user?.id;
//                 if (!userId) return;

//                 const { error } = await supabase
//                     .from("cart_items")
//                     .delete()
//                     .eq("user_id", userId)
//                     .eq("product_id", id);

//                     if (error) {
//                         console.error("Failed to remove item from server: ", error.message);
//                     }
//             },

//             clearServerCart: async (userId) => {
//                 const supabase = supabaseClientBrowser();
//                 const { error } = await supabase
//                     .from("cart_items")
//                     .delete()
//                     .eq("user_id", userId);

//                 if (error) {
//                     console.error("Failed to clear server cart: ", error.message);
//                 }
//             }
//         }),
        
//         {
//             name: "vast-cart-storage",
//         }
//     )
// );




