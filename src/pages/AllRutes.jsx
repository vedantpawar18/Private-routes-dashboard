import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import PrivateRouter from '../components/PrivateRoute';
import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login';
import Settings from './Settings';

const AllRutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<PrivateRouter><Dashboard/></PrivateRouter>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard/settings" element={<Settings/>}/>
        </Routes>
    </div>
  )
}

export default AllRutes