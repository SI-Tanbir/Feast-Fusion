
import React from 'react'
import { useLoaderData } from 'react-router'

const PaymentHistory = () => {

    const data =useLoaderData()
    const history=data.data
    console.log("geting the data", history)

  return (
    
    
    <div>
        <h1 className='text-3xl text-center mb-10'>Payment history</h1>


        <div className="overflow-x-auto">
  <table className="table text-xl">
    {/* head */}
    <thead>
      <tr>
        <th>Email</th>
        <th>Total Price</th>
        <th>Payment Date</th>
        <th>TransactionId</th>
        {/* <th>Favorite Color</th> */}
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        history.map(item=>
            <tr key={item._id}>
       
        <td>{item.email}</td>
        <td>{item.price}   $</td>
        <td>{item.data}</td>
        <td>{item.transactionId}</td>
      </tr>
        )
      }
   
    </tbody>
  </table>
</div>



    </div>



  )
}

export default PaymentHistory