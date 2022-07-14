import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider ({children}){
    const[login, setLogin] = useState(false)

    function handleLogin(){
        setLogin(true)
    }
    
    return <AuthContext.Provider value={{login, handleLogin}}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;