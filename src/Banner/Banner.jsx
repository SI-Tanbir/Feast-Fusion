import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import img1 from '../assets/home/01.jpg'
import img2 from '../assets/home/02.jpg'
import img3 from '../assets/home/03.png'

import slider1 from '../assets/home/slide1.jpg'
import slider2 from '../assets/home/slide2.jpg'
import slider3 from '../assets/home/slide3.jpg'
import slider4 from '../assets/home/slide4.jpg'
import slider5 from '../assets/home/slide5.jpg'
import HeaderTitiles from '../HeaderTitiles';
import gallery from '../assets/home/chef-service.jpg'
import PopularMenu from '../PopularMenu';
import ChefRecomended from '../ChefRecomended';
import CheckitoutSection from '../CheckitoutSection';
import Testimonial from '../Testimonial';

const Banner = () => {
  return (




    <div>

 <Carousel autoPlay={true} >
                <div>
                    <img src={img1} />
                  
                </div>
                <div>
                    <img src={img2} />
                 
                </div>
                <div>
                    <img src={img3} />
                </div>
            </Carousel>




{/* adding order page */}





<HeaderTitiles subheading="- - From 11:00am to 10:00pm - -" mainheading="order now" ></HeaderTitiles>

<Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={slider1} alt="" /><p className='-mt-12 text-3xl text-white text-center uppercase'>Salad</p></SwiperSlide>
      <SwiperSlide><img src={slider2} alt="" /><p className='-mt-12 text-3xl text-white text-center uppercase'>Pizza</p></SwiperSlide>
      <SwiperSlide><img src={slider3} alt="" /><p className='-mt-12 text-3xl text-white text-center uppercase'>Soup</p></SwiperSlide>
      <SwiperSlide><img src={slider4} alt="" /><p className='-mt-12 text-3xl text-white text-center uppercase'>Cake</p></SwiperSlide>
      <SwiperSlide><img src={slider5} alt="" /><p className='-mt-12 text-3xl text-white text-center uppercase'>mixed salad</p></SwiperSlide>
   
      
    </Swiper>



{/* adding a galary pic section */}


<div className='relative m-4'>
  <img  className='' src={gallery} alt="" />
  <div className='absolute top-[30%] m-4 p-16 left-0 text-center bg-slate-100'>
    <span className='text-3xl'>Feast Fusion</span>
    <p>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum rerum velit totam animi blanditiis sequi eveniet neque odio pariatur, corporis cupiditate quo ex illum eligendi ut omnis numquam sunt aliquam.</p>

  </div>

</div>



{/* adding popularmenu */}

<PopularMenu></PopularMenu>


<div className="  text-white p-8 m-auto text-3xl max-w-[1200px] text-center bg-black"> Call us: +80079709089 </div>




<ChefRecomended></ChefRecomended>



{/* starting of checkit out section */}

<CheckitoutSection></CheckitoutSection>



    </div>




  )
}

export default Banner