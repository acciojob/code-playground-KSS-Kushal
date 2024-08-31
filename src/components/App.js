
import React from "react";
import './../styles/App.css';
import { Link, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import {useState} from 'react'
import Login from "./Login";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="main-container">
        {/* Do not remove the main div */}
        <p>{isLogin?"Logged in, Now you can enter Playground":"You are not authenticated, Please login first"}</p>
        <ul>
          <li><Link to={'/'}>PlayGround</Link></li>
          <li><Link to={'/login'}>Login</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<PrivateRoute isLogin={isLogin} />} />
          <Route path="/login" element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />} />
        </Routes>
    </div>
  )
}

export default App
