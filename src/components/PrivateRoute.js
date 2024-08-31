import React from 'react'
import { useNavigate } from 'react-router-dom'

const PrivateRoute = ({isLogin}) => {
  const navigate = useNavigate();
  if(!isLogin){
    navigate('/login');
  }
  return (
    <div>
        {isLogin?<p>Hi Welcome to Code PlayGround</p>:<p>Page not Found</p>}
    </div>
  )
}

export default PrivateRoute