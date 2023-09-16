import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const PF = "http://localhost:5000/images/"

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
        <Link className="link" to="/blobhighlight">
            <h6>HIGHLIGHT</h6>
          </Link>
          <Link className="link" to="/blog">
            <h6>Blog</h6>
          </Link>
          {/* <Link className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?cat=food">
            <h6>FOOD</h6>
          </Link> */}
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          {currentUser ? (
            <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
            </span>
          ) : ( "" )}
          {currentUser ? (
          <Link to="/settings">
            <img className="topImg" src={PF+currentUser.profilePic} alt="" />
          </Link>
        ) : ('')}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
