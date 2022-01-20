import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { setUserSession } from "../utils/Common";
import * as api from "../services/API_BASE_URL";
import queryString from "query-string";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      setLoading: false,
      setError: "",
      redirect: "/user",
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    if (this.props.location) {
      const value = queryString.parse(this.props.location.search);
      const action = value.action;
      if (action) this.setState({ redirect: "/" + action });
    }
  }

  componentDidUpdate() {
    console.log(this.state.redirect);
  }

  handleLogin = (e) => {
    e.preventDefault();
    // e.target.reset();
    axios
      .post(api.authenticate, {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        console.log(response.data);
        this.setState({ setLoading: true });
        setUserSession(response.data.token, response.data.user);

        this.props.history.push(this.state.redirect);
      })
      .catch((error) => {
        this.setState({ setLoading: false });
        if (
          error.response.status !== undefined &&
          error.response.status === 401
        ) {
          this.setState({ setError: error.response.data.message });
        }
        // console.log(error);
        else
          this.setState({
            setError: "Something went wrong. Please try again later.",
          });
      });
  };

  isInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    // console.log("render() method");
    // console.log(this.state.redirect);
    return (
      <div>
        <section
          className="account-section bg_img"
          data-background={
            // process.env.PUBLIC_URL +
            "/assets/images/account/account-bg.jpg"
          }
          style={{
            backgroundImage: `url("${"/assets/images/account/account-bg.jpg"}")`,
          }}
        >
          <div className="container">
            <div className="padding-top padding-bottom">
              <div className="account-area">
                <div className="section-header-3">
                  <span className="cate">Xin chào</span>
                  <h2 className="title">bạn trở lại</h2>
                </div>
                <form method="POST" className="account-form">
                  <div className="form-group">
                    <label htmlFor="email2">
                      Email<span>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Điền email"
                      id="email2"
                      required
                      value={this.state.email}
                      onChange={(e) => this.isInputChange(e)}
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pass3">
                      Mật khẩu<span>*</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Điền mật khẩu"
                      id="pass3"
                      required
                      onChange={(e) => this.isInputChange(e)}
                      name="password"
                    />
                  </div>
                  <div>{this.state.setError}</div>
                  <div className="form-group checkgroup">
                    <input type="checkbox" id="bal2" required defaultChecked />
                    <label htmlFor="bal2">lưu mật khẩu</label>
                    <a href="#0" className="forget-pass">
                      Quên mật khẩu?
                    </a>
                  </div>
                  <div className="form-group text-center">
                    <input
                      onClick={(e) => this.handleLogin(e)}
                      type="submit"
                      value="Đăng nhập"
                    />
                  </div>
                </form>
                <div className="option">
                  Chưa có tài khoản? <Link to="/register">Đăng ký ngay!</Link>
                </div>
                <div className="or">
                  <span>Hoặc</span>
                </div>
                <ul className="social-icons">
                  <li>
                    <a href="#0">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>

                  <li>
                    <a href="#0">
                      <i className="fab fa-google" />
                      {/* <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                        buttonText="Log in with Google"
                        onSuccess={handleLogin}
                        onFailure={handleLogin}
                        cookiePolicy={"single_host_origin"}
                      /> */}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(Login);

// const handleLogin = async (googleData) => {
//   const res = await fetch("/api/v1/auth/google", {
//     method: "POST",
//     body: JSON.stringify({
//       token: googleData.tokenId,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await res.json();
//   // store returned user somehow
// };
