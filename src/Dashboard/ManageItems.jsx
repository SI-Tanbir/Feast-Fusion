import React from 'react'
import useMenu from '../hooks/useMenu'
import { FaEdit } from 'react-icons/fa'
import { FaDeleteLeft } from 'react-icons/fa6'

const ManageItems = () => {
    const {menu}=useMenu()
    console.log("chiking menu",menu)
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
     {
        menu.map((items,index)=>
            <tr key={items._id}>
            <th>{index +1}</th>
            <td>{items.name}</td>
            <td>{items.price} $</td>
            <td><button className='btn'><FaEdit></FaEdit></button></td>
            <td><button className='btn'><FaDeleteLeft></FaDeleteLeft></button></td>
          </tr>


        )

        


}
    
   
    </tbody>
  </table>
</div>


    </div>

  )
}

export default ManageItems