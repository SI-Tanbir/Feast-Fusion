import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const useMenu = () => {

    const {data:menu=[],refetch,isLoading}=useQuery({
        queryKey:['user'],
        queryFn:async()=>{
           const res= await axios.get(`http://localhost:5000/menu`)
            return res.data
        }
    })
    return {menu,refetch,isLoading}
}

export default useMenu