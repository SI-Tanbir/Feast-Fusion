
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import app from '../../firebase';

export const AuthContext = createContext();


const Authprovider = ({children}) => {

const [loading,setloading]=useState(true)
const [userEmail,setUserEmail]=useState('')

const [user, setUser] = useState(null);

const auth=getAuth(app)

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            setUser(true); // User is logged in
            setUserEmail(currentUser) //preserving the user data
            console.log("User logged in:", currentUser);
            // console.log('from auth ceking ',user)
        } else {
            setUser(null); // User is logged out
            setUserEmail(null)
            console.log("No user logged in");
            

        }
        
        setloading(false)

    });
    
    
    // Cleanup subscription on unmount
    return () => unsubscribe();
}, []);





const info={loading,
    setloading,
    user,
    userEmail
                }


  return (

<AuthContext.Provider value={info}>
    {children}
</AuthContext.Provider>
 
  )
}

export default Authprovider