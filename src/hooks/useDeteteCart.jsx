import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useDeleteCart = (id) => {


  // Use TanStack Query to handle the deletion request
  const { refetch, data: deletedItem = null, isLoading, error } = useQuery({

    queryKey: ['deleteCart', id], // Use a unique key based on ID
    queryFn: async () => {
      return res.data;
    },
    // enabled: !!id, // Only run the query if an ID is provided
  });

  // Return data, loading, error states, and refetch function
  return { deletedItem, isLoading, error, refetch };
};
