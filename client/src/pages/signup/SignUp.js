import React from "react";
import "./signUp.css"
// import { Link } from "react-router-dom";
import SignUpForm from "../../components/UI/Forms/signup/SignUpForm"
import ProjectLogo from "../../assets/images/project.png"

const SignUp = (props) => {
  return (
    // Login / Registration start
    <section className="banner login-registration">
      <div className="vector-img">
      <img src={ProjectLogo} alt="" className="projet"/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="content-box">
              <h2>Create Account</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sedo
                <br /> eiusmod tempor incididunt dolore.
              </p>
            </div>
            <SignUpForm />
            {/* <form action="#" className="sl-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Jhone Doe" required />
              </div>
              <div className="form-group">
                <label>Email or Username</label>
                <input type="email" placeholder="example@gmail.com" required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Password" required />
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label">
                  Agree with <a href="#">Terms and Conditions</a>
                </label>
              </div>
              <button className="btn btn-filled btn-round">Signup</button>
              <p className="notice">
                Already have an account?{" "}
                <Link to="/auth/login">Login Account</Link>
              </p>
            </form> */}
          </div>
        </div>
      </div>
    </section>
    // Login / Registration end
  );
};

export default SignUp;
