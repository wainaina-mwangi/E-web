
import React from "react";
import { useState } from "react";

function Auth() {
  const[mode,setMode]=useState('SignUp');
  return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <h1 className="page-title">{mode === 'SignUp' ? 'SignUp':'Login'}</h1>
          <form className="auth-form">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email </label>
              <input type="email"  className="form-input" id='email'/>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password </label>
              <input type="password"  className="form-input" id="password" />
            </div>
            <button className="btn btn-secondary" type="submit">{mode === 'SignUp' ? 'SignUp':'Login'}</button>
          </form>
          <div className="auth-switch">
           {mode === 'SignUp' ? 
            (<p>Already have an account ? <span className="auth-link" onClick={()=>setMode('Login')}>Login</span> </p> ):(

              <p>dont have an account ? <span className="auth-link" onClick={()=>setMode('SignUp')}>SignUp</span> </p>
            )
           
           }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
