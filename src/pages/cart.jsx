import React from 'react'
import useStore from '../store'



export default function Cart() {
const {cart, incrementCartItems,decrementCartItems , getTotalPrice , removeItems } =useStore()

const totalPrice =getTotalPrice();
  return (
    <div>
     <div>

      cart  $ {totalPrice}
     {cart.map((cartItem) => {
        return (
          <div key={cartItem.cartId}>
            {cartItem.name}
            {cartItem.price} $ {cartItem.quility}
            <button onClick={() => {removeItems(cartItem.cartId)}} className="border-black border-2">
              Remove the Item
            </button>

          </div>
        );
      })}
     </div>
    </div>
  )
}
