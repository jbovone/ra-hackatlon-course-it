import React, {useState} from 'react'
import { css } from '@emotion/css'; 
import axios from "axios";

const form = css({
  width: "100%",
  backdropFilter: "blur",
  background: "lightcoral",
  padding: "50px",
  display: 'flex',
  flexDirection: "column",
  flexGrow: 1,
  borderRadius: "10px"
})

const label = css({
  fontSize: "20px",
  fontFamily: "Roboto",
  color: "white"
})

const formContainer = css({
  display: "flex",
  width: "80%",  
  margin:"auto",
  maxWidth: "40em"
})

const ButtonContainer = css({
  marginTop: "3rem",
  textAlign: "center"
})

const button = css({
  background: "linear-gradient(90deg, #CCFFFF, #FFCCCC)",
  padding: "10px",
  borderRadius: "20px",
  border: "none",
  fontFamily: "Roboto",
  color: "black",
  margin: "auto",
  cursor: "pointer"
})

const formValidation = (values) => {
  let errors = {}

  if(!values.email){
    errors.email = "The email field cannot be empty"
  }
  if(!values.password){
    errors.password = "The password field cannot be empty"
  }

  if(values.password.length < 5){
    errors.password = "Password must be at least 5 characters long"
  }
  return errors
}


const Form  = () => {  
  const [ userValues, setUserValues ] = useState({ email: "", password: ""})

  const handleEmailChange = (event) => {
    setUserValues({...userValues, email: event.target.value})
  }
  const handlePasswordChange = (event) => {
    setUserValues({...userValues, password: event.target.value})
  }

 const handleSubmit = (event) => {
  event.preventDefault()
  axios.post("/login").then((res) => console.log(res.data))
  console.log(userValues)
 }

 return (
   <div className={formContainer} >
       <form className={form} onSubmit={handleSubmit}>
         <div className="field">
              <label htmlFor="email" className={label}>E-Mail</label>
              <input className="input" name="email" type="email" placeholder="Email" onChange={handleEmailChange}/>
          </div>
          <div className="field">
            <label htmlFor="password" className={label}>Password</label>
            <input className="input" name="password" type="password" placeholder="Password" onChange={handlePasswordChange}/>
          </div>
          <div className="field">
            <p className={ButtonContainer}>
            <button className={button}>
              Create account
            </button>
            </p>
          </div>
        </form>
    </div>  
  )

} 

export default Form;