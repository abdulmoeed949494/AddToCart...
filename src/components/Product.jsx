import { useContext } from "react";
import "../App.css"
import { StateContext } from "../state";
import { Link } from "react-router-dom";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";


const Product = () => {

  const { products, addToCart, cart, setSearchFilter, favoriteFunc, wishlist } = useContext(StateContext);
  return (
    <div>
      <div className="bg-blue-500 flex justify-between items-center pr-10 pl-10 text-white h-16 ">
        <input className="text-black h-10 rounded-md w-[800px]" type="text" onChange={(e) => setSearchFilter(e.target.value)} placeholder="Search" />
        <Link to={"/"}>Product</Link>
        <Link to={"/cart"}>Cart
          <sub>{cart.length}</sub>
        </Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/wishlist"}>Favorite
          <sub>{wishlist.length}</sub>
        </Link>
      </div>
      <div className="flex">
        {products.map(product => (
          <div key={product.id} style={{ width: '50%' }}>
            <div className='product-item'>
              <img src={product.url} width="100%" className='image' alt={product.name} />
              <p className="name">{product.name} | {product.category}</p>
              <p className="seller">{product.seller}</p>
              <p className="price"> Rs. {product.price} /-</p>
              <button className="btn" onClick={() => addToCart(product)}>Add To Cart</button>
              <p>Quantity: {cart.find(item => item.id === product.id)?.quantity || 0}</p>
              <div className="flex">
                <button className="btnfaorite" onClick={() => favoriteFunc(product)}>favorite</button>
                <p className="favoriteicon" style={{ cursor: 'pointer' }}>
                  {wishlist.find(item => item.id === product.id) ? <MdFavorite style={{ color: 'red' }} /> : <MdFavoriteBorder style={{ color: 'black' }} />}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product;

