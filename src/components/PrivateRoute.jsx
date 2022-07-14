import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


function PrivateRouter({children}){
    const {login}= useContext(AuthContext);
    

    if (!login)
    {
        return <Navigate to="/login" />;
    }
    return (children)
}

export default PrivateRouter;