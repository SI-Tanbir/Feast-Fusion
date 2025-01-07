import React, { useContext } from "react";
import { AuthContext } from "../Authprovider/Authprovider";
import {
  useQuery
} from '@tanstack/react-query'
import axios from "axios";

const AdminDashboard = () => {

const {data:adminStatus,refetch}=useQuery({

  queryKey:["status-key"],
  queryFn:async()=>{
   const res= await  axios.get(`http://localhost:5000/adminstatus`)

   return res.data
  }
})
  const { userEmail } = useContext(AuthContext);
  // console.log("hello from ", userEmail);

  const revenue=adminStatus?.totalRevenue[0]?.totalPrice
  const customers=adminStatus?.userLength;

  const allProducts=adminStatus?.allProduct;

  const orders=adminStatus?.allOrders;
  console.log(adminStatus.allOrders)

   
  return (
    <div>

      <p> welcome     {userEmail?.displayName ? userEmail.displayName : "back"} </p>

 {/* adding stats here */}

      <div className="stats shadow">

  <div className="stat">
    <div className="stat-figure text-secondary">
    
    </div>
    <div className="stat-title">Reveneu</div>
    <div className="stat-value">{revenue} $</div>
    {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
      </svg>
    </div>
    <div className="stat-title">Customers</div>
    <div className="stat-value">{customers}</div>
    {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
  </div>



  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
      </svg>
    </div>
    <div className="stat-title">All Products</div>
    <div className="stat-value">{allProducts}</div>
    {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
      </svg>
    </div>
    <div className="stat-title">Orders</div>
    <div className="stat-value">{orders}</div>
    {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
  </div>
</div>

    </div>
  );
};

export default AdminDashboard;
