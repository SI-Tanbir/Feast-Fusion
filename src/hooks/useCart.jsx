import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useCart = () => {
  // Use TanStack Query to load data
  const { data: cart = [], isLoading, error } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/carts');
      return res.data;
    },
  });

  // Return cart data along with loading and error states
  return { cart, isLoading, error };
};
