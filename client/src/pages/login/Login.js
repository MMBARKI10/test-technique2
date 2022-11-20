import React from 'react'
import "./login.css"
import LoginForm from '../../components/UI/Forms/login/LoginForm'
import ProjectLogo from "../../assets/images/project.png"

function Login(props) {
  return (
    <section className="banner login-registration">
      <div className="vector-img">
        <img src={ProjectLogo} alt="" className="projet"/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="content-box">
              <h2>Login Account</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sedo
                <br /> eiusmod tempor incididunt dolore.
              </p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login