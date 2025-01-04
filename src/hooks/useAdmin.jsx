import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import useAxiosSecure from './useAxiosSecure'
import { AuthContext } from '../Authprovider/Authprovider'

const useAdmin = () => {
    const {userEmail}=useContext(AuthContext)
 
    const axiosSecure =useAxiosSecure()

    const {data:isAdmin,isLoading:isAdminLoading} =useQuery({
        queryKey:[userEmail?.email,'isAdmin'],
        queryFn:async()=>{


            

            const res= await axiosSecure.get( `/user/admin/${userEmail.email}`);

            console.log("checking from use admin hook",res.data)
            return res.data?.admin
        }

    }) 
    return [isAdmin,isAdminLoading]


}

export default useAdmin