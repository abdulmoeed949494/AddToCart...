// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Product from "./components/Product";
// import Cart from "./components/Cart";


export default function App() {

  // const initialValue = [
  //   {
  //     id: 1,
  //     title: "Shoes",
  //     url: "https://5.imimg.com/data5/SELLER/Default/2023/2/RD/LE/FP/184929171/bruton-shoes-for-exclusive-trendy-casual-sports-shoes-for-men-running-shoes-for-men-black-red--500x500.jpg",
  //     name: "TRQ Shoes",
  //     category: "Shoes",
  //     seller: "AMZ",
  //     price: 1999,
  //   },
  //   {
  //     id: 2,
  //     title: "Digital Watch",
  //     url: "https://importedgear.pk/cdn/shop/files/1686858773689.png?v=1686858725&width=600",
  //     name: "TRQ Watch",
  //     category: "Digital Watch",
  //     seller: "AMZ",
  //     price: 2599,
  //   },
  //   {
  //     id: 3,
  //     title: "Laptop",
  //     url: "https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/HP%20Pavilion%20Laptop%20151680104202881838.jpg?impolicy=prdimg&imdensity=1&imwidth=600",
  //     name: "TRQ Laptop",
  //     category: "Laptop",
  //     seller: "AMZ",
  //     price: 69999,
  //   },
  //   {
  //     id: 4,
  //     title: "Security Camera",
  //     url: "https://www.agri-linc.com/media/catalog/product/h/a/ha501951_1.png?optimize=low&bg-color=255,255,255&fit=bounds&height=470&width=600&canvas=600:470&format=jpeg",
  //     name: "TRQ Security Camera",
  //     category: "Security Camera",
  //     seller: "AMZ",
  //     price: 7999,
  //   },
  //   {
  //     id: 5,
  //     title: "Watch",
  //     url: "https://doxawatches.com/cdn/shop/files/aquamarine-833412.jpg?v=1717526653&width=1881",
  //     name: "TRQ Watch",
  //     category: "Watch",
  //     seller: "AMZ",
  //     price: 13999,
  //   },
  //   {
  //     id: 6,
  //     url: "https://nestasia.in/cdn/shop/files/Greencoffeemugs_1.jpg?v=1699363178&width=600",
  //     name: "TRQ Mug",
  //     category: "Mug",
  //     seller: "AMZ",
  //     price: "3599",
  //   },
  // ]

  // const [products, setProducts] = useState(initialValue);
  // const [cart, setCart] = useState([]);

  // // const [showCart, setShowCart] = useState(false);

  // const addToCart = (product) => {
  //   const existingItem = cart.find(item => item.id === product.id);

  //   if (existingItem) {
  //     const updatedCart = cart.map(item =>
  //       item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
  //     );
  //     setCart(updatedCart);
  //   } else {
  //     setCart([...cart, { ...product, quantity: 1 }]);
  //   }
  // }

  // const increaseQuantity = (id) => {
  //   const updatedCart = cart.map(item =>
  //     item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  //   );
  //   setCart(updatedCart);
  // }

  // const decreaseQuantity = (id) => {
  //   const p = cart.find(i => i.id === id);
  //   if (p.quantity === 1) {

  //     const updatedCart = cart.filter((item) => item.id != id);
  //     setCart(updatedCart);
  //   } else {

  //     const updatedCart = cart.map((item) =>
  //       item.id === id ? { ...item, quantity: item.quantity - 1 } : item
  //     );
  //     setCart(updatedCart);
  //   }
  // }

  // // const handleShow = (value) => {
  // //   if(cart.length > 0){
  // //     setShowCart(value);
  // //   }
  // // };

  // const [searchFilter, setSearchFilter] = useState("");

  // useEffect(() => {
  //   if (searchFilter != "") {
  //     setProducts(products.filter((product) => product.name.toLowerCase().includes(searchFilter.toLowerCase())));
  //   } else {
  //     setProducts(initialValue);
  //   }
  // }, [searchFilter]);

  // console.log(cart)

  // function handleOrderPlacement() {
  //   setCart([])
  //   setShowCart(false)
  // }

  return (
    <div>
      {/* <div className="bg-blue-500 flex justify-between items-center pr-10 pl-10 text-white h-16 ">
        <input className="text-black h-10 rounded-md w-[800px]" type="text" onChange={(e) => setSearchFilter(e.target.value)} placeholder="Search" />
        <Link to={"/"}>Product</Link>
        <Link to={"/cart"}>Cart
        <sub>{cart.length}</sub>
        </Link>
      </div>
      <Product products={products} addToCart={addToCart} cart={cart} /> */}
      {/* <Cart cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} handleOrderPlacement={handleOrderPlacement} setSearchFilter={setSearchFilter}/> */}
    </div>
  )
}
