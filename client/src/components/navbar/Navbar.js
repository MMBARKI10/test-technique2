import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/images/logo.png"
import { useSelector } from "react-redux";
import FolderAddOutlined from "@ant-design/icons"


function Navbar() {

  const { currentUser } = useSelector((state) => state.user);

  const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

  const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
  cursor:pointer
`;
  return (
    <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <img src={Logo} alt="logo" className="logo"/>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="homelink">Home</Link>
              </li>
            </div>
            {currentUser ? (<User>
              <FolderAddOutlined />
              <Avatar/>
              {currentUser.name}
            </User> ): <form className="d-flex" role="search">
              <Link to="/signin"><button className="btn btn-outline-info"  type="submit">Sign In</button></Link>
            </form>}
          </div>
        </div>
      </nav>
  )
}

export default Navbar
