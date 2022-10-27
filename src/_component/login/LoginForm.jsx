import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData]  = useState({
    email:'',
    password:'',
  })
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) => {
    const url = 'http://localhost:5000/login'
    e.preventDefault()
    fetch( url, {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(formData)
    })
    .then( res => {
      console.log(res)
      if(res.ok){
        navigate('/profile')
        return res.json()
      }
      throw new Error(res.status)
    })
    .then( data => console.log( 'data', data))
    .catch( err => console.log( err))
  }

  return (
    <form onSubmit={ e => handleSubmit(e)}>
      <div>
        <label>Email</label>
          <input
            name='email' 
            value={ formData.email }
            placeholder='enter an email '
            onChange = { e => handleChange(e)} 
          />
      </div>
      <div>
        <label>Password</label>
          <input
            name='password' 
            value={ formData.password }
            placeholder='password '
            onChange = { e => handleChange(e)} 
          />
      </div>
      <button type='submit' >LOGIN</button>
    </form>
  )
}


export default LoginForm