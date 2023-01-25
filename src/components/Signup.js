import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'


export default function Signup() {
  const [credentials, setCredentials] = useState({name:"", email: "", password: "", cpassword:""}) 
  let history = useHistory();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, password} = credentials;
    const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, password})
    });
    const json = await response.json()
    console.log(json);
    if (json.success){
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken); 
      history.push("/");
  }
  else{
      alert("Invalid credentials");
  }
}

const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
}


  return (
    <>
      <div className="container text-center pb-200 fs-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name='name' onChange={onChange} onaria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name='email' onChange={onChange}aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' onChange={onChange} required/>
        </div>
        {/* <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="cpassword" name='cpasssword' onChange={onChange} required/>
        </div> */} 
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    </>
  )
}
