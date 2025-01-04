
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import React from 'react'
import { MdDelete } from 'react-icons/md';
import { RiAdminFill } from 'react-icons/ri';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAdmin from '../hooks/useAdmin';



const Users = () => {



  const axiosSecure=useAxiosSecure()
  const [isAdmin]=useAdmin()
  // console.log('it from usrs',isAdmin)

  // axiosSecure.post('/allusers',{Headers:{authorization: `Bearer ${localStorage.getItem('access-token')}`}})
  // .then(res=>console.log(res.data))


    const {data:userData,refetch,isLoading,isError}=useQuery({
        queryKey: ['users'],
        queryFn: async () => {
      console.log(userData)
      const res = await axiosSecure.post(`/allusers`)
          return res.data;
        },
      })


  console.log("it from users ",userData)



if(isLoading){
    return <div>loading...</div>
}

if(isError){
    return <div>error fetching users</div>
}

//adding user delete 
const handleDelete=(id)=>{

    
    const sendDelete= axios.post(`http://localhost:5000/deleteuser/${id}`)
    
    console.log(sendDelete)
    refetch()
}

const handleAdmin=(id)=>{
    // console.log(id)
    const send=axios.post(`http://localhost:5000/makeAdmin/${id}`)
    console.log(send)

}

  return (
    <div>


<div className='text-3xl text-center'>
    All users
</div>

<div>

<div className="overflow-x-auto">
  <table className="table table-zebra w-[70vw]">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>email</th>
        <th>Admin</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

    {
        userData?.map((user,index)=>  <>
        


<tr key={user.key}>
        <td>{index +1}</td>
        <td>name</td>
        <td>{user.email}</td>
        <td><button onClick={()=>handleAdmin(user._id)}>
          <RiAdminFill className='text-3xl' />
          
          

          </button></td>
        <td><button className='btn' onClick={()=>handleDelete(user._id)}><MdDelete className='text-3xl' /></button></td>
      </tr>
      </>


        )
    }
      
    
    </tbody>
  </table>
</div>


</div>


    </div>
  )
}

export default Users