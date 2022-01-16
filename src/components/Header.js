import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constuctor() {
    this.logout = this.logout.bind(this);
  }

 logout(e) {
   e.preventDefault();
   sessionStorage.removeItem("user");
   sessionStorage.removeItem("token");
   
   this.props.history.push('/login');
 }

  isLogged() {

    if (true)
      return (
        <ul className="menu">
          <li className="header-button pr-1">
            <Link to="/user">Thông tin cá nhân</Link>
          </li>
          <li >
            <a href="#0" onClick={e=>this.logout(e)}>Đăng xuất</a>
            </li>
          </ul>
      );
    else
      return (
        <div>
          <li>
            <Link to="/register">Đăng ký</Link>
          </li>
          <li className="header-button pr-0">
            <Link to="/login">Đăng nhập</Link>
          </li>
        </div>
      );
  }
  render() {
    return (
      <header className="header-section">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <Link to="/">
                <img src="/assets/images/logo/logo.png" alt="logo" />
              </Link>
            </div>
           
              {/* <li>
                <a href="#0">Event</a>
              </li> */}
              {/* <li>
                <a href="#0">Contact</a>
                <ul className="submenu">
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="apps-download.html">Apps Download</a>
                  </li>
                </ul>
              </li> */}
              {/* <li>
                <a href="contact.html">Blogs</a>
              </li> */}

              {this.isLogged()}
            
            <div className="header-bar d-lg-none">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </header>
    );
  }
}
