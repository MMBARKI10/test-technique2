import React,{ useState,useEffect,useContext,useRef } from 'react'
import { Link,useNavigate  } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { SyncOutlined } from "@ant-design/icons";
import { loginFailure, loginStart, loginSuccess } from "../../../../redux/userSlice";
import { toast } from "react-toastify";
import axios from "axios"
import "./loginForm.css";


function LoginForm(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const emailRef = useRef();
  const passwordRef = useRef();


  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post(`http://localhost:8800/api/auth/signin`, { email, password });
      console.log(res)
      dispatch(loginSuccess(res.data));
      navigate("/")
    } catch (err) {
      dispatch(loginFailure());
    }
  };
  
  
  return (
    <form className="sl-form" onSubmit={handleLogin}>
      <div className="form-group">
        <label>Email</label>
        <input
        //   ref={emailInputRef}
          type="email"
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
          ref={emailRef}
          required
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
        //   ref={passwordInputRef}
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
          ref={passwordRef}
          required
        />
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" />
        <label className="form-check-label">Remember Password</label>
      </div>
      <button className="btn btn-filled btn-round" onSubmit={handleLogin}>
        <span className="bh"></span> <span>Login</span>
      </button>
      <p className="notice">
        Don’t have an account? <Link to="/signup">Signup Now</Link>
      </p>
    </form>
  )
}

export default LoginForm