import React from 'react'
import HeaderTitles from './HeaderTitiles'
import reviewData from './assets/reviews.json'


const ChefRecomended = () => {
    
    let refineData=reviewData.slice(0,3)
    
    console.log(refineData)

  return (
    <div>


<HeaderTitles mainheading='Chef Recomended' subheading='--Should Try--' > </HeaderTitles>


<div className='flex gap-8'>


{ 
refineData.map(res=>  <>


<div key={res._id} className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{res.name}</h2>
    <p>{res.details}</p>
    <div className="card-actions text-center justify-center">
      <button className="btn btn-primary ">Buy Now</button>
    </div>
  </div>
</div>

</>)


}


</div>




    </div>
  )
}

export default ChefRecomended