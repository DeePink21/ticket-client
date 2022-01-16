import React, { Component, useState } from "react";
import { Link, Prompt, Redirect, RedirectProps } from "react-router-dom";
import * as api from "../services/API_BASE_URL";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isBlocking: false,
      isRedirect: false,

      email: "",
      password: "",
    };
    // this.email = this.email.bind(this);
    // this.password = this.password.bind(this);
    this.isInputChange = this.isInputChange.bind(this);
    this.register = this.register.bind(this);
    console.log(this);
  }

  isInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      isBlocking: value.length > 0,
      [name]: value,
    });
  }

  register(event) {
    event.preventDefault();
    // event.target.reset();
    this.setState({
      isBlocking: false,
      isRedirect: false,
    });

    console.log(this.state);
    if (this.state.email) {
      fetch(api.register, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      })
        .then((Response) => Response.json())
        .then((Result) => {
          if (Result.Status == "Success")
            // this.props.history.push("/");
            console.log("nice!");
          else alert("Sorrrrrry !!!! Un-authenticated User !!!!!");
        });
    }
  }

  render() {
    if (this.state.isRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Prompt
          when={this.state.isBlocking}
          message={(location) =>
            `Are you sure you want to go to ${location.pathname}`
          }
        />

        <section
          className="account-section bg_img"
          style={{
            backgroundImage: `url("${"/assets/images/account/account-bg.jpg"}")`,
          }}
          data-background={
            process.env.PUBLIC_URL + "/assets/images/account/account-bg.jpg"
          }
        >
          <div className="container">
            <div className="padding-top padding-bottom">
              <div className="account-area">
                <div className="section-header-3">
                  <span className="cate">welcome</span>
                  <h2 className="title">to Boleto </h2>
                </div>
                <form className="account-form">
                  <div className="form-group">
                    <label htmlFor="email1">
                      Email<span>*</span>
                    </label>
                    <input
                      name="email"
                      onChange={(event) => this.isInputChange(event)}
                      value={this.state.email}
                      type="text"
                      placeholder="Enter Your Email"
                      id="email1"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pass1">
                      Password<span>*</span>
                    </label>
                    <input
                      name="password"
                      onChange={(event) => this.isInputChange(event)}
                      value={this.state.password}
                      type="password"
                      placeholder="Password"
                      id="pass1"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pass2">
                      Confirm Password<span>*</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      id="pass2"
                      required
                    />
                  </div>
                  <div className="form-group checkgroup">
                    <input type="checkbox" id="bal" required defaultChecked />
                    <label htmlFor="bal">
                      I agree to the <a href="#0">Terms, Privacy Policy</a> and{" "}
                      <a href="#0">Fees</a>
                    </label>
                  </div>
                  <div className="form-group text-center">
                    <input
                      onClick={this.register}
                      onSubmit={(e) => this.register(e)}
                      type="submit"
                      defaultValue="Sign Up"
                    />
                  </div>
                </form>
                <div className="option">
                  Already have an account? <a href="/login">Login</a>
                </div>
                <div className="or">
                  <span>Or</span>
                </div>
                <ul className="social-icons">
                  <li>
                    <a href="#0">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="active">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="fab fa-google" />
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
