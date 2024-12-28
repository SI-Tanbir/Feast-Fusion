

import React from 'react'

import gallery from '../assets/home/chef-service.jpg'

import { Parallax, Background } from 'react-parallax';


const MenuPictureCover = ({title,subtitle}) => {
  return (

    <div className='m-10'>

  
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={gallery}
            bgImageAlt="the dog"
            strength={-200}
        >


<div className=' m-[10%]'>


{/* <img  className='' src={gallery}  alt="" /> */}
<div className='   w-full  p-16  text-center opacity-80 bg-slate-100'>
  <span className='text-3xl'>{title}</span>
  <p>{subtitle}</p>

</div>

</div>






           





            <div style={{ height: '100px'  }} />
        </Parallax>




 
    </div>
    
  )
}

export default MenuPictureCover