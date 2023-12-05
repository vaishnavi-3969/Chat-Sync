import React from 'react'

const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target[0].value)
    }
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>Chat Sync</span>
                <span className='title'>Register</span>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='display name' />
                    <input type='email' placeholder='email' />
                    <input type='password' placeholder='password' />
                    <input style={{ display: 'none' }} type='file' id='file' />
                    <label htmlFor='file'>
                        <i className='fas fa-upload'></i>
                        <span>Upload an avatar</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>Don't have an account? Login</p>
            </div>
        </div>
    )
}

export default Register

