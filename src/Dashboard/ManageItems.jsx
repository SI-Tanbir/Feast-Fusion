import React from "react";
import useMenu from "../hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router";

const ManageItems = () => {
  const { menu, refetch } = useMenu();
  console.log("chiking menu",menu)

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to Delete?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        axios.post(`http://localhost:5000/menu/delete?id=${id}`);

        Swal.fire("Deleted!", "", "success");
        refetch()

      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menu.map((items, index) => (
              <tr key={items._id}>
                <th>{index + 1}</th>
                <td>{items.name}</td>
                <td>{items.price} $</td>

                <td>
                  <Link to={`/dashboard/edit/${items._id}`} className="btn">
                    <FaEdit></FaEdit>
                  </Link>
                </td>
                
                <td>
                  <button
                    onClick={() => handleDelete(items._id)}
                    className="btn"
                  >
                    <FaDeleteLeft></FaDeleteLeft>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
