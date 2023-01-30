import React, { useState, useContext } from "react";
import './SignIn.css';


const Signin = () =>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    

    
   
    return (
        <div className='login__container'>
          <div className='login__area'>
            <form >
              <h1>Login</h1>
              <input type='text' placeholder='email@email.com' value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type='password' placeholder='********' value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type='submit'>Entrar</button>
            </form>
          </div>
        </div>
      )
}

export default Signin;