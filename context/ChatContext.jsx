import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../src/firebase";

export const ChatContext = createContext()

export const ChatContextProvider = ({children}) => {
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
       <ChatContext.Provider value={{currentUser}}>
              {children}
       </ChatContext.Provider>
    )
}


