import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './regisForm.styles.scss'

const RegisForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email:'',
    password:'',
  })
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) => {
    const url = 'http://localhost:5000/users'
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
      throw new Error(res)
    })
    .then( data => console.log( 'data', data))
    .catch( err => console.log(err.status, err.statusText))
  }

  return (
    <form onSubmit={ e => handleSubmit(e)}>
      <div>
        <label>Username</label>
        <input
          name='username' 
          value={ formData.username }
          placeholder='enter a username'
          onChange = { e => handleChange(e)} 
        />
      </div>
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
      <button type='submit' >REGISTER</button>
    </form>
  )
}

export default RegisForm