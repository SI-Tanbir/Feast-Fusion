import { useContext } from "react"
import { AuthContext } from "../Authprovider/Authprovider"
import { useNavigate } from "react-router";
import useAdmin from "../hooks/useAdmin";



const AdminRoute = ({children}) => {
    const navigate =useNavigate()
    const { user, userEmail,loading,setloading,} =useContext(AuthContext);

    const  {isAdmin,isAdminLoading} =useAdmin()


if(loading || isAdminLoading){
    return <progress className="progress w-56"></progress>
}

if(user && isAdmin ){
    return children;
}

 return navigate('/');


}

export default AdminRoute