import React from 'react';

const LoginForm = () => {
  return (
    <div id="login-form">
      <div>
        <label >Email</label>
        <input id="email"></input>
      </div>

      <div>
        <label>Password</label>
        <input id="password"></input>
      </div>
      <button id="submit">Submit</button>
    </div>
  )
}

export default LoginForm;