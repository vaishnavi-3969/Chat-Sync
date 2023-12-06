import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../src/firebase';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError(true)
      alert(err)
    }
  }
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Chat Sync</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <button>Login</button>
          {error && <span>Something went wrong...</span>}
        </form>
        <p>Already have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  )
}

export default Login