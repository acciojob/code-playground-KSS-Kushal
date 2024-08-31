import React from 'react'

const Login = ({isLogin, setIsLogin}) => {
  return (
    <div>
      <h3>Login</h3>
      {isLogin?<button onClick={()=>setIsLogin(false)}>Log Out</button>:<button onClick={()=>setIsLogin(true)}>Log In</button>}
    </div>
  )
}

export default Login