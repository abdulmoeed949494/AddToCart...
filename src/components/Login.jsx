import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StateContext } from "../state";

const Login = () => {

  const navigate = useNavigate()

  const LoginCart = () => {
    if (email.length >= 2 && password.length >= 2) {
      navigate("/cart")
      alert("Login Successful")
    } else {
      alert("Please Login")
    }
  }


  const { cart, email, password, setEmail, setPassword, submitForm, wishlist } = useContext(StateContext)

  return (
    <div>
      <div className="bg-blue-500 flex justify-between items-center pr-10 pl-10 text-white h-16 ">
        <Link to={"/"}>Product</Link>
        <Link to={"/cart"}>Cart
          <sub>{cart.length}</sub>
        </Link>
        <Link to={"/wishlist"}>Favorite
          <sub>{wishlist.length}</sub>
        </Link>
      </div>
      <form className='loginscreen' onSubmit={submitForm}>
        <div className='main'>
          <div className='emaildiv'>
            <p className='emailp'>Email</p>
            <input className='emailinputp' type='email' name="email" id="email" placeholder='Email' autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='passdiv'>
            <p className='passwordp'>Password</p>
            <input className='passinputp' type='text' name="password" id="password" placeholder='Password' autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='btnlogin'>
            <button className='loginbtn' type="submit" onClick={LoginCart}>Login</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login
