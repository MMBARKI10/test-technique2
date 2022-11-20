import React from 'react'
import { Link } from "react-router-dom";
import "./navbarAnalyse.css"
function NavbarAnalyse() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          {/* <img src={Logo} alt="logo" className="logo"/> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="homelink">List Project</Link>
              </li>
            </div>
            {/* <form className="d-flex" role="search">
              <Link to="/signin"><button className="btn btn-outline-info"  type="submit">Sign In</button></Link>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarAnalyse