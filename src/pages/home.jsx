import axios from "axios";
import { useEffect, useState } from "react"
import useStore from "../store";




function Home() {
  
  const [products, setProducts] = useState([]);
  
  const {cart, incrementCartItems,decrementCartItems , getTotalPrice , removeItems} =useStore()
 

  const fetchData = async () => {
    try {
      const response = await axios("https://dummyjson.com/products")
      console.log(response)
      const productsData = [...response.data.products]
      setProducts(productsData)
    }
    catch (err) {
      console.log(err)
    }
  }


  // const backEndApI = async() => {
  //   try{

  //     const response = await axios("http://localhost:3000/products")
  //     const ProductsData = [...response.data.products]
  //     setProducts(ProductsData)

  //   }catch(err){
  //     console.log("error on APT")
  //   }
  // }

  useEffect(() => {
   fetchData()
  }, [])


  const totalPrice = getTotalPrice();


  // function incrementCartItems(id, title, price, quility) {
  //   const existingCardItem = cart.find((cartItem) => cartItem.productId === id);
  //   if (existingCardItem) {
  //     const updatedCart = cart.map((cartItem) => {
  //       if (cartItem.productId === id) {
  //         return {
  //           ...cartItem,
  //           quility: cartItem.quility + 1,
  //         }
  //       }
  //       return cartItem;
  //     })
  //     setCart(updatedCart)
  //   } else {
  //     const cartItem = {
  //       cartId: "cart" + Math.random(),
  //       productId: id,
  //       name: title,
  //       price: price,
  //       quility: 1,
  //     }
  //     const updatedCart = [...cart, cartItem]
  //     setCart(updatedCart)
  //   }
  // }

  // function decrementCartItems(id) {
  //   const updatedCart = cart.map((cartItem) => {
  //     if (cartItem.productId === id && cartItem.quility > 0) { 
  //       return {
  //         ...cartItem,
  //         quility: Math.max(cartItem.quility - 1, 0),
  //       };
  //     }
  //     return cartItem;
  //   });
  
  //   setCart(updatedCart);
  // }



  return (

    <div>


      <button></button>

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

      <header>
        <span>Total Items In Cart {cart.length}</span>
        <span>Price ${totalPrice}</span>
      </header>

      <div className="grid grid-cols-4 gap-3">
        {products.map((product) => {

          return (
            <div key={product.name} className="">

              <div className="flex flex-col border-black border-2 p-5">
                <img src={product.thumbnail} alt="" className="w-40 h-40" />
                <p>
                  {product.name}<br />
                  {product.price}<br />
                  {product.description}

                  {/* <button onClick={() => {

                    const cartItem = {
                      cartId: "cart" + Math.random(),
                      id: product.id,
                      name: product.name,
                      price: product.price,

                    };
                    const updateCart = [...cart, cartItem];
                    console.log(updateCart)
                    setCart(updateCart);

                  }} className="border-black border-2">
                    add to cart
                  </button> */}

                </p>

                <div className="flex gap-3">

                  <button
                    onClick={() => decrementCartItems(product.id)}
                    className="border-black border-2 p-2" 
                  >
                    -
                  </button>

                  <button onClick={() => { incrementCartItems(product.id, product.title, product.price, product.quility) }} className="border-black border-2 p-2">
                    +
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  )
}
export default Home
