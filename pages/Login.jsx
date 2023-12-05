import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Chat Sync</span>
                <span className='title'>Register</span>
                <form action=''>
                    <input type='email' placeholder='email' />
                    <input type='password' placeholder='password' />
                    <button>Login</button>
                </form>
                <p>Already have an account? Register</p>
            </div>
        </div>
  )
}

export default Login