import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Lama Chat</span>
                <span className='title'>Register</span>
                <form action=''>
                    <input type='text' placeholder='display name' />
                    <input type='email' placeholder='email' />
                    <input type='password' placeholder='password' />
                    <input type='file' />
                    <button>Sign Up</button>
                </form>
                <p>Don't have an account? <Link to="login">Login</Link></p>
            </div>
        </div>
    )
}

export default Register