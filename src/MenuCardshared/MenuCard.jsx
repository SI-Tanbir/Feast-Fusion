import React from 'react'

const MenuCard = ({image,title,recipe,price}) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure>
    <img style={{borderRadius:'0 90% 90% 90%',width:'100px'}}
      src={image}
      alt="Album" />
  </figure>
  <div className="card-body">
   <div className='flex  justify-between gap-4' >
   <h2 className="font-bold">{title}</h2>
   <p className='ml-[45%]'>${price}</p>
   </div>
    <p>{recipe}</p>
  
    
  </div>
</div>
  )
}

export default MenuCard