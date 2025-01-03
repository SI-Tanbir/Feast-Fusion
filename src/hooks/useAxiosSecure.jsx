import axios from "axios";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import app from "../../firebase";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000", // Base URL for your API
});



const useAxiosSecure = () => {
  // Add a request interceptor
  const navigate =useNavigate()
  const auth=getAuth(app)
  axiosSecure.interceptors.request.use(
    (config)=> {
      // Retrieve the token from localStorage
      const token = localStorage.getItem("access-token");

   
        // Add the Authorization header to the request
        config.headers.authorization = `Bearer ${token}`;
        console.log('interceptor is adding ',config.headers.authorization)

      // Do something before the request is sent
      return config;
    },
    function (error) {
      // Handle any request errors
   
      console.error("Request error:", error);
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
 (error)=> {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const status=error.response.status
    console.log("status error interceptor",status)
    if(status === 401 || status === 403){
    
        signOut(auth)
        navigate('/login')


    }
    return Promise.reject(error);
  });



  return axiosSecure;
};

export default useAxiosSecure;
