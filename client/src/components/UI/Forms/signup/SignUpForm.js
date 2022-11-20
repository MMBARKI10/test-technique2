import React,{ useState,useEffect,useContext,useRef } from 'react'
import { Link,useNavigate  } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { SyncOutlined } from "@ant-design/icons";
import { loginFailure, loginStart, loginSuccess } from "../../../../redux/userSlice";
import { toast } from "react-toastify";
import axios from "axios"
import "./signUpForm.css"



function SignUpForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
 


  const handleLog = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post(`http://localhost:8800/api/auth/signup`, { name,email, password });
      console.log(res)
      toast("Great Register is succeffully...");
      dispatch(loginSuccess(res.data));
      navigate("/signin")
    } catch (err) {
      dispatch(loginFailure());
    }
  };


  return (
    <form className="sl-form" onSubmit={handleLog}>
    <div className="form-group">
      <label> Name</label>
      <input 
      type="text" 
      placeholder=" Name"
      onChange={(e) => setName(e.target.value)} 
      ref={nameRef}
      required />
    </div>
    <div className="form-group">
      <label>Email</label>
      <input
        type="email"
        placeholder="Your email"
        onChange={(e)=>setEmail(e.target.value)}
        ref={emailRef}
        required
      />
    </div>
    <div className="form-group">
      <label>Password</label>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        ref={passwordRef}
        required
      />
    </div>
    <div className="form-check">
      <input type="checkbox" className="form-check-input" />
      <label className="form-check-label">
        Agree with <a href="#">Terms and Conditions</a>
      </label>
    </div>
    <button type="submit" 
    className="btn btn-filled btn-round"
    // onClick={handleSubmit}
    onClick={handleLog}
      >
        Sign Up
    </button>
    <p className="notice">
      Already have an account? <Link to="/signin">Login Account</Link>
    </p>
  </form>
  )
}

export default SignUpForm