
import { useContext, useState } from 'react'
// import menu from './assets/menu.json'
import banner from './assets/contact/banner.jpg'
import { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useLocation } from 'react-router'
import { AuthContext } from './Authprovider/Authprovider'

const OurShopPages = () => {

  const location = useLocation();
  const [data ,setData]=useState(null)

  const {loading,setLoading}=useContext(AuthContext)

  // const [loading,setLoading]=useState(true)
  const [card,setCard]=useState([])
useEffect(()=>{
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('cat'); 
  // console.log(category)
  fetch('http://localhost:5000/menu')
  .then(res=> res.json())
  .then(d=>
    {
      setData(d)
     if(category){
      
      handledata(category,d)
      setLoading(false)
    }else{
      handledata('salad',d)
      // setLoading(false)
    }
    
    }
)
},[])

// console.log(data)

    // const defaultset=menu.filter(items => items.category === `soup`)


    const handledata=(food,items)=>{
    if(items){
      const filter=items?.filter(items => items.category === `${food}`)
      // console.log( filter)
      setCard(filter)
    
    }else{

      const filter=data?.filter(items => items.category === `${food}`)
      // console.log( filter)
      setCard(filter)
    }


    

    }


    //ading cart function here
    const handleCart=(data)=>{
      console.log(data)
    }


    
  return (

    

    
    <div>

    {
      loading &&   (
        <div className="grid grid-cols-3 gap-8">
        {Array(3) // Change the number to match your expected cards
           .fill(0)?.map((_, index) => (
              <div key={index}>
                 <Skeleton height={200} />
                 <Skeleton height={30} width="70%" />
                 <Skeleton height={20} width="50%" />
                 <Skeleton height={40} width="80%" />
              </div>
           ))}
     </div>
      )
    }



<div
  className="hero h-[500px]"
  style={{
    backgroundImage: `url(${banner})`,
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
      <button onClick={()=>handleCart(res)} className="btn btn-primary">Add to cart</button>
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