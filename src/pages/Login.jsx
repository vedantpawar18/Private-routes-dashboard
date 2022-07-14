import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const [formState, setFormstate] = useState({
        email:"",
        password:""
    });

    const auth= useContext(AuthContext);

    function handleChange(e) {
        const {name, value} = e.target;
        setFormstate({
            ...formState,
            [name]:value
        });
    }

    function handleSubmit(e){
      e.preventDefault()
        auth.handleLogin();
        <Navigate to="/dashboard/settings"/>
        console.log(auth.login)
    };

    
  return (
    <div>
        <form onSubmit={handleSubmit} action="">
          <div> 
            <input  placeholder='email' onChange={handleChange} name="email" value={formState.email} type="email" />
          </div> 
          <div> 
            <input placeholder='password' onChange={handleChange} name="password" value={formState.password} type="password" />
          </div> 
          <div> 
            <input type="submit" />
          </div>  
        </form>
    </div>
  )
}

export default Login