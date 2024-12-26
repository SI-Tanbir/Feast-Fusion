
import HeaderTitles from './HeaderTitiles'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import review from './assets/reviews.json'
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


// import required modules
import { Navigation } from 'swiper/modules';

const Testimonial = () => {

    console.log(review)
  return (
    <div>

        <HeaderTitles mainheading="Tesitmonial" subheading="What our client Tell about us"></HeaderTitles>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


    {
        review.map(res=>  <div className='p-10 m-10'  key={res._id}>
        
        <SwiperSlide>  
            <div className='text-center'>
            <Rating style={{ maxWidth: 250 }} value={res.rating}  className='text-center justify-center place-content-center ml-[40%]' />
            <p>{res.details}</p>
            <p className='font-bold'>{res.name}</p>

            </div>
          
        
         </SwiperSlide>




        </div>)
    }


      
            
        {/* <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} /> */}


      </Swiper>


        
    </div>
  )
}

export default Testimonial