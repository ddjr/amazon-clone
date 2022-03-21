import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../media/logo2.png'
import { auth, db } from '../../firebase.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import './Login.scss'
function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signin = e => {
        e.preventDefault() 
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("user: ", user)
            navigate('/')
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage)
            // ..
          });
    }

    async function register(e) {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            navigate('/')
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage)
            // ..
          });
        
    }

  return (
    <div className='login'>
        <Link to="/">
            <img className="login__logo" src={Logo} />
        </Link>
        <div className='login__container'>
            <h1>Sign In</h1>
            <form>
                <label>E-mail</label>
                <input type="text" value={email} 
                    onChange= { e => setEmail(e.target.value) }
                />
                <label>Password</label>
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