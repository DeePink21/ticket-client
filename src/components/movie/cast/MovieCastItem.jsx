import React, { Component } from "react";

export default class MovieCastItem extends Component {
  render() {
    return (
      <div className="cast-item">
        <div className="cast-thumb">
          <img
            src={
              // process.env.PUBLIC_URL +
              // "/assets/images/cast/cast01.jpg"
              this.props.cast.profile
            }
            alt="cast"
          />
        </div>
        <div className="cast-content">
          <h6 className="cast-title">
            <a href="#0">{this.props.cast.name}</a>
          </h6>
          {/* <span className="cate">actor</span> */}
          <span className="cate">{this.props.cast.role}</span>
          {/* <p>As Richie Tozier</p> */}
        </div>
      </div>
    );
  }
}
