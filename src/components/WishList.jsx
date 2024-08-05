import React, { useContext, useEffect, useState } from 'react'
import { StateContext } from '../state'
import { Link, useNavigate } from 'react-router-dom'

const WishList = () => {

    const navigate = useNavigate()

    const { cart, wishlist, increaseWishListQuantity, decreaseWishListQuantity, setCart, setWishList, products } = useContext(StateContext)

    const [checkedItems, setCheckedItems] = useState([])

    useEffect(() => {
        const checkItems = wishlist.map((item) => ({
            id: item.id,
            checked: false,
        }));
        setCheckedItems(checkItems);
    }, [wishlist]);

    const handleChange = (id) => {
        setCheckedItems((prevState) => 
            prevState.map((item) => 
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    };

    const wishAddToCart = () => {
        const selectedItems = wishlist.filter((item) => 
            checkedItems.find((checkedItem) => checkedItem.id === item.id && checkedItem.checked)
        );
        setCart([...cart, ...selectedItems]);
        setWishList(wishlist.filter((item) =>
            !checkedItems.find((checkedItem) => checkedItem.id === item.id && checkedItem.checked)
        ));
        navigate("/cart");
    }

    return (
        <div>
            <div className="bg-blue-500 flex justify-between items-center pr-10 pl-10 text-white h-16 ">
                <Link to={"/"}>Product</Link>
                <Link to={"/cart"}>Cart
                    <sub>{cart.length}</sub>
                </Link>
                <Link to={"/login"}>Login</Link>
                <Link to={"/wishlist"}>Favorite
                    <sub>{wishlist.length}</sub>
                </Link>
            </div>
            {wishlist.map((item) => {
                const checkedItem = checkedItems.find((checkedItem) => checkedItem.id === item.id);
                return (
                    <div key={item.id}>
                        <div className="mt-10 ml-[600px] flex w-[600px]">
                            <div className="mt-5 flex justify-center">
                                <img className='mb-5 flex flex-row justify-center border-4 border-gray-400 rounded-xl h-40 w-40' src={item.url} width={40} alt={item.name} />
                            </div>
                            <div className="ml-5 mb-5 flex gap-2 justify-center items-center">
                                <span className='text-green-600'> {item.name} | {item.category} </span>
                                <button className='text-red-600' onClick={() => decreaseWishListQuantity(item.id)}>-</button>
                                <span> {item.quantity} </span>
                                <button className='text-green-700' onClick={() => increaseWishListQuantity(item.id)}>+</button>
                                <span className='text-red-600'>Rs. {item.price * item.quantity}</span>
                                <input 
                                    type='checkbox' 
                                    checked={checkedItem ? checkedItem.checked : false} 
                                    onChange={() => handleChange(item.id)}
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="right-10 py-10 pr-10 bottom-10 flex justify-end items-center">
                <p className='text-blue-400'>Total: <span>{wishlist.reduce((total, item) => total + (item.price * item.quantity), 0)}</span></p>
                <button className="btn" onClick={wishAddToCart}>Add To Cart</button>
            </div>
        </div>
    )
}

export default WishList;






























// import React, { useContext, useEffect, useState } from 'react'
// import { StateContext } from '../state'
// import { Link, useNavigate } from 'react-router-dom'

// const WishList = () => {

//     const navigate = useNavigate()

//     const { cart, wishlist, increaseWishListQuantity, decreaseWishListQuantity, setCart, setWishList, products } = useContext(StateContext)

//     const [checked, setChecked] = useState({})

//     useEffect(() => {
//         const checkItem = wishlist.reduce((acc, item) => {
//             acc[item.id] = false;
//             return acc
//         }, {})
//         setChecked(checkItem)
//     }, [wishlist])

//     const handleChange = (id) => {
//         setChecked(prevState => ({
//             ...prevState,
//             [id]: !prevState[id]
//         }))
//     }

//     const wishAddToCart = () => {
//         const select = wishlist.filter(item => checked[item.id])
//         setCart([...cart, ...select])
//         setWishList(wishlist.filter(item => !checked[item.id]))
//         navigate("/cart")
//     }


//     return (
//         <div>
//             <div className="bg-blue-500 flex justify-between items-center pr-10 pl-10 text-white h-16 ">
//                 <Link to={"/"}>Product</Link>
//                 <Link to={"/cart"}>Cart
//                     <sub>{cart.length}</sub>
//                 </Link>
//                 <Link to={"/login"}>Login</Link>
//                 <Link to={"/wishlist"}>Favorite
//                     <sub>{wishlist.length}</sub>
//                 </Link>
//             </div>
//             {
//                 wishlist.map((item) => (
//                     <div key={item.id}>
//                         <div className="mt-10 ml-[600px] flex w-[600px]">
//                             <div className="mt-5 flex justify-center">
//                                 <img className='mb-5 flex flex-row justify-center border-4 border-gray-400 rounded-xl h-40 w-40' src={item.url} width={40} alt={item.name} />
//                             </div>
//                             <div className="ml-5 mb-5 flex gap-2 justify-center items-center">
//                                 <span className='text-green-600'> {item.name} | {item.category} </span>
//                                 <button className='text-red-600' onClick={() => decreaseWishListQuantity(item.id)}>-</button>
//                                 <span> {item.quantity} </span>
//                                 <button className='text-green-700' onClick={() => increaseWishListQuantity(item.id)}>+</button>
//                                 <span className='text-red-600'>Rs. {item.price * item.quantity}</span>
//                                 <input type='checkbox' checked={checked[item.id] || false} onChange={() => handleChange(item.id)}/>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             <div className="right-10 py-10 pr-10 bottom-10 flex justify-end items-center">
//                 <p className='text-blue-400'>Total: <span>{wishlist.reduce((total, item) => total + (item.price * item.quantity), 0)}</span></p>
//                 <button className="btn" onClick={wishAddToCart}>Add To Cart</button>
//             </div>
//         </div>
//     )
// }

// export default WishList;
























// import React, { useContext, useEffect, useState } from 'react'
// import { StateContext } from '../state'
// import { Link, useNavigate } from 'react-router-dom'
// import { TbSettingsCheck } from 'react-icons/tb'
// import { FaMountainCity } from 'react-icons/fa6'

// const WishList = () => {

//     const navigate = useNavigate()

//     const { cart, wishlist, increaseWishListQuantity, decreaseWishListQuantity, setCart, setWishList, products } = useContext(StateContext)

//     const [checked, setChecked] = useState({})

//     useEffect(() => {
//         const initialCheckedItems = wishlist.reduce((acc, item) => {
//             acc[item.id] = false;
//             return acc;
//         }, {})
//         setChecked(initialCheckedItems)
//     }, [wishlist])

//     const handleChange = (id) => {
//         setChecked(prevState => ({
//             ...prevState,
//             [id]: !prevState[id]
//         }))
//     }

//     const wishAddToCart = () => {
//         const selectedItms = wishlist.filter(item => checked[item.id])
//         setCart([...cart, ...selectedItms])
//         setWishList(wishlist.filter(item => !checked[item.id]))
//         navigate("/cart")
//     }

//     return (
//         <div>
//             <div className="bg-blue-500 flex justify-between items-center pr-10 pl-10 text-white h-16 ">
//                 <Link to={"/"}>Product</Link>
//                 <Link to={"/cart"}>Cart
//                     <sub>{cart.length}</sub>
//                 </Link>
//                 <Link to={"/login"}>Login</Link>
//                 <Link to={"/wishlist"}>Favorite
//                     <sub>{wishlist.length}</sub>
//                 </Link>
//             </div>
//             {
//                 wishlist.map((item) => (
//                     <div key={item.id}>
//                         <div className="mt-10 ml-[600px] flex w-[600px]">
//                             <div className="mt-5 flex justify-center">
//                                 <img className='mb-5 flex flex-row justify-center border-4 border-gray-400 rounded-xl h-40 w-40' src={item.url} width={40} alt={item.name} />
//                             </div>
//                             <div className="ml-5 mb-5 flex gap-2 justify-center items-center">
//                                 <span className='text-green-600'> {item.name} | {item.category} </span>
//                                 <button className='text-red-600' onClick={() => decreaseWishListQuantity(item.id)}>-</button>
//                                 <span> {item.quantity} </span>
//                                 <button className='text-green-700' onClick={() => increaseWishListQuantity(item.id)}>+</button>
//                                 <span className='text-red-600'>Rs. {item.price * item.quantity}</span>
//                                 <input type='checkbox' checked={checked[item.id] || false} onChange={() => handleChange(item.id)} />
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             <div className="right-10 py-10 pr-10 bottom-10 flex justify-end items-center">
//                 <p className='text-blue-400'>Total: <span>{wishlist.reduce((total, item) => total + (item.price * item.quantity), 0)}</span></p>
//                 <button className="btn" onClick={wishAddToCart}>Add To Cart</button>
//             </div>
//         </div>
//     )
// }

// export default WishList;




















