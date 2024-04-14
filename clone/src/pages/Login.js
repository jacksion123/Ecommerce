import React, {useState} from 'react'
import './CSS/Login.css';
const Login = () => {
const [state,setState] = useState("Login");
 const [formData,setFormdata] = useState({
  username:"",
  password:"",
  email:"",
 })
 const changeHandler = (e)=>{
  setFormdata({...formData,[e.target.name]:e.target.value})
 }

 const login = async()=>{
console.log("Login finction",formData)
let responseData;
await fetch('http://localhost:4000/login',{
  method:'POST',
  headers:{ 
    Accept:'application/form-data',
  'Content-Type':'application/json',
 },
 body:JSON.stringify(formData),
}).then((res)=>res.json()).then((data)=>responseData= data)
if(responseData.success){
  localStorage.setItem('auth-token',responseData.token);
  window.location.replace("/");
  
}else{
  alert(responseData.errors);
}
 }
 const signup = async()=>{
console.log("sign up",formData)
let responseData;
await fetch('http://localhost:4000/signup',{
  method:'POST',
  headers:{ 
    Accept:'application/form-data',
  'Content-Type':'application/json',
 },
 body:JSON.stringify(formData),
}).then((res)=>res.json()).then((data)=>responseData= data)
if(responseData.success){
  localStorage.setItem('auth-token',responseData.token);
  window.location.replace("/");
  
}else{
  alert(responseData.errors);
}
 }

  return (
    <div className='loginSign'>
      <div className="loginSign-container">
        <h1>{state}</h1>
        <div className="loginsign-fields">
          {state === "Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' />:<></>}
       
       <input type="email" name='email' value={formData.email} onChange={changeHandler} placeholder='Email Address'/>
       <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='password'/>
        </div>
        <button onClick={()=>{state === "Login"?login():signup()}}>Continue</button>
        {state === "Sign Up"?<p className='loginSign-login'>Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>: <p className='loginSign-login'>Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
        
       
        <div className="loginSign-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, i agree to the terms of use & prevacy policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Login
