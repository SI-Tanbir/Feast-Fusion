

import Header from '../Header'
import '../App.css'
import { Outlet } from 'react-router'
import Footer from '../Footer'


function Layout() {


  return (
  
  
  <>


<div className="max-w-screen-xl m-auto">

<Header></Header>
  

<Outlet></Outlet>
   

<Footer></Footer>


</div>
   

    </>
  

)

}

export default Layout
