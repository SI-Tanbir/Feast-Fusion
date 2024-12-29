
import { useState } from 'react'
import menu from './assets/menu.json'

const OurShopPages = () => {

    const defaultset=menu.filter(items => items.category === `soup`)

    const [card,setCard]=useState(defaultset)

    const handledata=(food)=>{
        const filter=menu.filter(items => items.category === `${food}`)
        console.log( filter)
        setCard(filter)


    

    }
  return (
    <div>




<div
  className="hero h-[500px]"
  style={{
    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Our Shop</h1>
      <p className="mb-5">
        Would you like to try a dish?
      </p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>



{/* seting the catagories */}

<div className="navbar bg-base-100 text-center justify-center">
  <div className="">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

      <li><button onClick={()=>handledata('salad')} >SALAD</button></li>
      <li><button onClick={()=>handledata('pizza')} >PIZZA</button></li>
      <li><button onClick={()=>handledata('soup')} >SOUPS</button></li>
      <li><button onClick={()=>handledata('dessert')} >DESSERTS</button></li>
      <li><button onClick={()=>handledata('drinks')} >DRINKS</button></li>
 


    </ul>
  </div>



  

</div>



{/* starint of card hter */}

<div className='grid grid-cols-3 gap-8'>


{
    card.map(res => <div key={res._id}>



<div className="card card-compact bg-base-100 w-96 shadow-xl ">
  <figure>
    <img
      src={res.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{res.name}</h2>
    <p>{res.recipe}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>


    </div>)
}


</div>








    </div>
  )
}

export default OurShopPages