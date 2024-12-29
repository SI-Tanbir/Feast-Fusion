import React from 'react'
import { Helmet } from 'react-helmet'
import MenuPictureCover from './MenuPictureCovershared/MenuPictureCover'
import MenuCard from './MenuCardshared/MenuCard'

import MenuList from './MenuCardshared/MenuList'

const Menubar = () => {
  return (

  <div>




<Helmet>

                <meta charSet="utf-8" />
                <title>Menu</title>
       
            </Helmet>



 
    {/* our menu section */}





{/* desert section */}


<MenuPictureCover title={"DESSERTS"} subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuPictureCover>




<MenuList filterMenu="dessert"></MenuList>


{/* <MenuCard></MenuCard> */}


{/* pizza setion */}

<MenuPictureCover title={"PIZZA"} subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuPictureCover>

<MenuList filterMenu="pizza"></MenuList>


{/* salad section */}



<MenuPictureCover title={"SALADS"} subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuPictureCover>

<MenuList filterMenu="salad"></MenuList>





{/* SOUP SECTION */}

<MenuPictureCover title={"SOUPS"} subtitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuPictureCover>

<MenuList filterMenu="soup"></MenuList>





                                                                                    

    </div>
  )
}

export default Menubar