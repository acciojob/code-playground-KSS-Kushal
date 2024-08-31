import React from 'react'

const PrivateRoute = ({isLogin}) => {
  return (
    <div>
        {isLogin?<p>Hi Welcome to Code PlayGround</p>:<p>Page not Found</p>}
    </div>
  )
}

export default PrivateRoute