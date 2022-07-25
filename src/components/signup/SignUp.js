import React from "react";
import Error from "../error/error";
import { useEffect, useState } from "react";
import { getSession } from '../../storage/session';
import { useNavigate } from "react-router-dom";
import Logo from '../logo/logo';
import './signup.scss'


function SignUp(){
    const message = 'Username doesnt match'
    const navigate = useNavigate()
    const [user, setUser] = useState({
      username: '',
      confirmed:''
    })
    const logged = getSession('session')
    
    useEffect(() => {
      if (logged){
       navigate("/")   
      }
  },[])

  const check = user.username !== user.confirmed;
  const auth = user.username === user.confirmed && user.username.length >= 4;

    return(
        <section className="signup-section">
            <div className="signup-bg">
                <Logo/>
                 <form className='log-form' onSubmit={(e) => {
                    e.preventDefault()
                    navigate('/login')
                    }}>
                    <input type="text" placeholder='Username' value ={user.username} onChange={(e) => {
                        setUser({...user, username: e.target.value})
                        console.log(auth)
                    }}/>
                    <input type="text" placeholder='Confirm username' value ={user.confirmed} onChange={(e) => {
                        setUser({...user, confirmed: e.target.value})
                        console.log(auth)
                    }}/>
                    <button type="button" disabled={!auth} onClick={() => {
                    }}>Sign up</button>
                    {check && <Error message={message}/>}
                 <p>Already have an account? <a href="/login">Sign in</a> </p>
                 </form>
            </div>
        </section>
    )
}

export default SignUp