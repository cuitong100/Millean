import React from 'react'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWprapper'>
            <span className='logo'>Millean</span>
            <span className='title'>Register</span>
            <form>
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <input type = 'file' />
                <button>Sign Up</button>
            </form>
            <p>You do not have an account? Login</p>
        </div>
    </div>
  )
}

export default Register
