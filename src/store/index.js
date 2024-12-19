import { nanoid } from "nanoid/non-secure";
import {create} from "zustand";
import { persist } from "zustand/middleware";


const useStore = create(persist((set,get) => ({
    cart: [],
    
    setCart:(cartItems) => {
        const {cart} =get();
        console.log(cart)
        set(cartItems)
    },
    
    incrementCartItems: (id, title, price ) => {
        console.log("item")
        const {cart} =get();
        const existingCardItem = cart.find((cartItem) => cartItem.productId === id);
        if (existingCardItem) {
          const updatedCart = cart.map((cartItem) => {
            if (cartItem.productId === id) {
              return {
                ...cartItem,
                quility: cartItem.quility + 1,
              }
            }
            return cartItem;
          })
          set({cart:updatedCart})
        } else {
          const cartItem = {
            cartId: "cart" + nanoid(),
            productId: id,
            name: title,
            price: price,
            quility: 1,
          }
          const updatedCart = [...cart, cartItem]
          set({cart:updatedCart})
        }
    },
    
    
    decrementCartItems: (id) => {
        const {cart} = get();
        const updatedCart = cart.map((cartItem) => {
            if (cartItem.productId === id && cartItem.quility > 0) { 
              return {
                ...cartItem,
                quility: Math.max(cartItem.quility - 1, 0),
              };
            }
            return cartItem;
          });
        
          set({cart:updatedCart});
    },
    
    getTotalPrice:() => {
     const {cart} =get()
     const totalPrice = cart.reduce((sum, element) => {
        return (sum += element.price * element.quility)
      }, 0);
    
      return totalPrice;
    },
    
    
    removeItems: (id) => {
     const {cart} = get();
     const FlilterItem = cart.filter((item) => item.cartId !== id);
     set({cart:FlilterItem})
    },
    
    }),
    
    {name:"cart"}

))



export default useStore