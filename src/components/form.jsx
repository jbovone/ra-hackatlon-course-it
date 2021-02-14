import React, {useState} from 'react'
import { css } from '@emotion/css'; 
import axios from "axios";
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';

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
  maxWidth: "40em",
  maxHeight: "23em"
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
 const handleSubmit = (values) => {
  axios.post("/login").then((res) => console.log(res.data))
  console.log(values)
 }

 return (
   <div className={formContainer} >
       <Formik 
        initialValues={{email: "", password: ""}} 
        validate={formValidation}
        onSubmit={handleSubmit}>
         { ({isSubmitting, errors}) => (
           <>
           <FormikForm className={form}>
           <div className="field">
                <label htmlFor="email" className={label}>E-Mail</label>
                <Field className="input" name="email" type="email" placeholder="Email"/>
                <ErrorMessage style={{ color: "red"}} name="email" component="span"/>
            </div>
            <div className="field">
              <label htmlFor="password" className={label}>Password</label>
              <Field className="input" name="password" type="password" placeholder="Password" />
              <ErrorMessage style={{ color: "red"}} name="password" component="span"/>
              
            </div>
            <div className="field">
              <p className={ButtonContainer}>
              <button type="submit" className={button} disabled={isSubmitting}>
                Create account
              </button>
              </p>
            </div>
          </FormikForm> 
          
          </>
         )}
         
       </Formik>
    </div>  
  )

  /*
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
      */

} 

export default Form;