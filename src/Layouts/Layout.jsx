

import Header from '../Header'
import '../App.css'
import { Outlet } from 'react-router'
import Footer from '../Footer'


function Layout() {


  return (
  
  
  <>

<Header></Header>
  

<Outlet></Outlet>
   

<Footer></Footer>

   

    </>
  

)

}

export default Layout
