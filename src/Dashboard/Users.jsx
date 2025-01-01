
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import React from 'react'



const Users = () => {

    const {data:userData,refetch,isLoading,isError}=useQuery({
        queryKey: ['users'],
        queryFn: async () => {
          const res = await axios.post(`http://localhost:5000/allusers`);
          return res.data;
        },
      })


    //   console.log(users)


if(isLoading){
    return <div>loading...</div>
}

if(isError){
    return <div>error fetching users</div>
}

  return (
    <div>


<div className='text-3xl text-center'>
    All users
</div>

<div>

<div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>email</th>
        <th>Ation</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

    {
        userData.map(items=>  <>


<tr key={items.key}>
        <td>1</td>
        <td>name</td>
        <td>{items.email}</td>
        <td><button>Delete</button></td>
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