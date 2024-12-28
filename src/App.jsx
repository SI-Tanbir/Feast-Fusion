

import { Helmet } from 'react-helmet'
import './App.css'
import Banner from './Banner/Banner'
import Testimonial from './Testimonial'


function App() {


  return (
  
  
  <>
 
 <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>
<Banner></Banner>
<Testimonial></Testimonial>

    </>
  

)

}

export default App
