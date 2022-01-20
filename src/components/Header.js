import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

function Header() {
  const [name, setName] = useState(
    window.sessionStorage.getItem("user")
      ? JSON.parse(window.sessionStorage.getItem("user")).fullName
      : ""
  );

  const logout = (e) => {
    // e.preventDefault();
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");

    setName("");
    // this.props.history.push("/login");
  };

  const isLogged = () => {
    // let data = [];
    if (window.sessionStorage.getItem("user"))
      return (
        <ul className="menu">
          {/* <li>
            <Link to="/user">{"Xin chào " + name}</Link>
            <ul className="submenu">
              <li>
                <Link to="/user">Thông tin cá nhân</Link>
              </li>
              <li>
                <Link to="/user">Lịch sử đặt vé</Link>
              </li>
            </ul>
          </li> */}

          <li className="header-button pr-1">
            <Link to="/user">Thông tin cá nhân</Link>
          </li>
          <li>
            <Link to="/login" onClick={(e) => logout(e)}>
              Đăng xuất
            </Link>
          </li>
        </ul>
      );
    else
      return (
        <ul className="menu">
          <li>
            <Link to="/register">Đăng ký</Link>
          </li>
          <li className="header-button pr-0">
            <Link to="/login">Đăng nhập</Link>
          </li>
        </ul>
      );
  };

  if (window.location.pathname === "/login") {
    return (
      <header className="header-section">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <Link to="/">
                <img src="/assets/images/logo/logo.png" alt="logo" />
              </Link>
            </div>

            <div className="header-bar d-lg-none"></div>
          </div>
        </div>
      </header>
    );
  } else
    return (
      <header className="header-section">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <Link to="/">
                <img src="/assets/images/logo/logo.png" alt="logo" />
              </Link>
            </div>

            {isLogged()}

            <div className="header-bar d-lg-none"></div>
          </div>
        </div>
      </header>
    );
}

export default withRouter(Header);
