import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCart } from '../hooks/useCart';
import { useContext } from 'react';
import { AuthContext } from '../Authprovider/Authprovider';
import { keepPreviousData } from '@tanstack/react-query';

const CheckoutForm = () => {

  const [clientSecret, setClientSecret] = useState('');
  const { cart ,refetch} = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const [cardError, setCardError] = useState('');
  const [loading, setLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const {userEmail} =useContext(AuthContext)
  console.log("it form email",)
  const email =userEmail.email;


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setCardError(error.message); // Show the error message
    }
    
    
    else {
      console.log('[paymentMethod]', paymentMethod);
      setCardError(''); // Clear any previous errors

      const { error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

      if (confirmError) {
        console.log(confirmError.message);
        setCardError(confirmError.message); // Show confirmation error
      } else {
        console.log('Payment Successful',paymentMethod);
        
      
        const payment ={
          email:email,
          price:totalPrice,
          data:new Date() ,//utc data conver .. use moment js to convert 
          cartId:cart.map(item =>item._id),
          transactionId:paymentMethod.id,
          menuItemId:cart.map(item =>item.menuId),
          status:'pending'

        }
        const res = await axios.post('http://localhost:5000/payments',payment)
        console.log('payment saved',res)

        refetch()

      }

      setLoading(false);
    }
  };

  useEffect(() => {
    if (cart.length === 0) {
      return;
    }
    if(!email ){
      return;
    }

    axios
      .post('http://localhost:5000/create-payment-intent', { price: totalPrice,
        billing_details:{
          email:email ||'anornimous'
        }
       })
      .then((res) => {
        console.log('Client secret:', res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      })
      .catch((error) => {
        console.error('Error in Axios request:', error);
      });


  }, [cart, totalPrice,email]);

  return (
    <div>
      <p>CheckoutForm</p>
      {cart.length == 0 ? 
      
      <>
      nothings is in you carts
      </> 
      
      :  
      
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" disabled={loading || !stripe}>
          {loading ? 'Processing…' : 'Pay'}
        </button>
        {cardError && <p>{cardError}</p>}
      </form> }
     
    </div>
  );
};

export default CheckoutForm;
