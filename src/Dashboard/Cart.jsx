import React, { useState } from "react";
import { useCart } from "../hooks/useCart";
import { useDeleteCart } from "../hooks/useDeteteCart";
import axios from "axios";
import Swal from 'sweetalert2'
import { Link } from "react-router";


const Cart = () => {
  const { cart, refetch } = useCart();
  // console.log(cart)
  const totalPrice = cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);
  console.log(totalPrice);

  //adding delete functions
  // const [deleteItem,setDeleteItem]=useState(null)
  // const{deletedItem, isLoading, error, refetch}=useDeleteCart(deleteItem)

  // const {cart, isLoading, error ,refetch}=useCart()

  const handleCartDelete = (menuId) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axios.post(`http://localhost:5000/delete?id=${menuId}`);
        console.log("delete complete");
    
        refetch()

        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success"
        // });

        
      }
    });

  ;
  };

  return (
    <div className="w-[80vw] ">
      <div className="flex gap-2 justify-evenly items-center text-white bg-black p-4">
        <p>
          TOTAL ORDERS: <span className=" text-2xl">{cart.length}</span> items
        </p>
        <p>
          TOTAL PRICE: <span className=" text-2xl">{totalPrice} </span>${" "}
        </p>

        {
          cart.length>0 ?
          <Link to={'/dashboard/payment'} className=" bg-[#d3931b]  rounded p-2  ">Pay</Link> 
          :
          <button disabled className=" bg-[#aca8a8]  rounded p-2  ">Pay</button>

        }
        
        <hr />
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {cart.map((items) => (
                <tr key={items._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={items.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{items.recipe}</td>
                  <td>$ {items.price}</td>
                  <th>
                    <button
                      className="btn btn-ghost btn-xs hover:bg-orange-500 hover:text-white"
                      onClick={() => handleCartDelete(items._id)}
                    >
                      delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
