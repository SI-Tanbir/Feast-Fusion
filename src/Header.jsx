import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "./Authprovider/Authprovider";
import app from "../firebase";
import { getAuth, signOut } from "firebase/auth";
import { TiShoppingCart } from "react-icons/ti";




const Header = () => {
  const {user} = useContext(AuthContext)
  // console.log(user)
  const auth=getAuth(app)

  const handlesignout =async()=>{
    try {
      await signOut(auth);
      console.log("User signed out successfully.");
  } catch (error) {
      console.error("Error signing out:", error);
  }


  
  }
  return (

 
    <div className="navbar fixed max-w-screen-xl m-auto  z-10 opacity-50 bg-black text-white pt-0">
      <div className="navbar-start">
        <div className="dropdown">
          
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              {/* <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul> */}
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Feast Fusion Resturants</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
          <Link to={'/'}>Home</Link>
          </li>


          <li>
            <Link to={'/menu'}>Menu</Link>
              
              {/* <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul> */}
          </li>
          <li>
          <Link to={'/shop'}>Shop</Link>
          </li>

                {
                  user ? ( <>
                   <li>
          <Link to={'/dashboard'}>Dashboard</Link>
          </li>
          
          <div className="indicator text-4xl">
  <span className="indicator-item badge badge-secondary">0+</span>
  <TiShoppingCart  />

</div>

                    <li>
                    <Link onClick={handlesignout} to={'/'}>Signout</Link>
                    </li>

                  </>

                  )
                  
                  
                  
                  
                  
                  :(
                    <>  <li>
                    <Link to={'/login'}>Login</Link>
                    </li>
                    <li>
                    <Link to={'/register'}>Register</Link>
                    </li>
                    </>
                  )
                }
        
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Header;
