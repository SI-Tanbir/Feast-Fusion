import axios from "axios";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import app from "../../firebase";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000", // Base URL for your API
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);

  // Request Interceptor
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
        console.log("Interceptor is adding:", config.headers.authorization);
      } else {
        console.warn("No access token found in localStorage");
      }
      return config;
    },
    (error) => {
      console.error("Request error:", error);
      return Promise.reject(error);
    }
  );

  // Response Interceptor
  axiosSecure.interceptors.response.use(
    (response) => {
      return response; // Pass the response to the next handler
    },
    (error) => {
      const status = error.response?.status;

      if (status === 401 || status === 403) {
        console.error("Authentication error: Signing out and redirecting to login",error);


        // signOut(auth)
        //   .then(() => {
        //     navigate("/login");
        //   })
        //   .catch((signOutError) => {
        //     console.error("Sign out error:", signOutError);
        //   });


      } else {
        console.error("Response error:", error);
      }

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
