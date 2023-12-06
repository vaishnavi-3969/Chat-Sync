import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../src/firebase";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            console.log(user)
        })
        return () => {
            // Cleanup function when the component unmounts
            unsubscribe()
        }
    },[])

    return (
       <AuthContext.Provider value={{currentUser}}>
              {children}
       </AuthContext.Provider>
    )
}


