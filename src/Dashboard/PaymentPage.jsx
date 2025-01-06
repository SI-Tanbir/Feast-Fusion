import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import CheckoutForm from './CheckoutForm'


  // TODO: adding public key 
  const stripePromise=loadStripe(import.meta.env.VITE_STRIPE_PK)
const PaymentPage = () => {
    
  
    
  return (
    <div> 
        
         <p>taka oo taka tumi wuira wui ra aso</p>

    <Elements stripe={stripePromise} >

    <CheckoutForm></CheckoutForm>

    </Elements>

    


    </div>
  )
}

export default PaymentPage