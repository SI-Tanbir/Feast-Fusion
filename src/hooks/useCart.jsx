import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../Authprovider/Authprovider';

export const useCart = () => {
  // Use TanStack Query to load data
  //i will sort cart items by emails
  const {userEmail}=useContext(AuthContext);
    const email=userEmail?.email

  const { refetch,data: cart = [], isLoading, error } = useQuery({
    queryKey: ['cart',email],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/carts?email=${email}`);
      return res.data;
    },
  });

  // Return cart data along with loading and error states
  return { cart, isLoading, error ,refetch};
};
