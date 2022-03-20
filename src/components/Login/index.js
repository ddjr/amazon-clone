import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../media/logo2.png'
import './Login.scss'
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signin = e => {
        e.preventDefault()
        //fancy firbase login
    }
    const register = e => {
        e.preventDefault()
        //fancy firebase register
    }
  return (
    <div className='login'>
        <Link to="/">
            <img className="login__logo" src={Logo} />
        </Link>
        <div className='login__container'>
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} 
                    onChange= { e => setEmail(e.target.value) }
                />
                <h5>Password</h5>
                <input type="password" value={password}
                     onChange= { e => setPassword(e.target.value) }
                />
                <button type='submit' className='login__signInButton' onClick={signin}>Sign In</button>
            </form>
            <p>
                By signing-in you agree to Amazon Clone's Conditions of Use & Sale. Please see our Privacy Notice, our Cookie Notice and our Interest-Based Ads Notice
            </p>
            <button className='login__registerButton' onClick={register}>Create your Amazon account</button>
        </div>
    </div>
  )
}

export default Login