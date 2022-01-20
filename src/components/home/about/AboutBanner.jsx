import React, { Component } from "react";

class AboutBanner extends React.Component {
  render() {
    return (
      <div>
        {/* ==========Banner-Section========== */}
        <section
          className="main-page-header speaker-banner bg_img"
          style={{
            backgroundImage: `url("${"/assets/images/banner/banner07.jpg"}")`,
          }}
          data-background="/assets/images/banner/banner07.jpg"
        >
          <div className="container">
            <div className="speaker-banner-content">
              <h2 className="title">about us</h2>
              <ul className="breadcrumb">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>about us</li>
              </ul>
            </div>
          </div>
        </section>
        {/* ==========Banner-Section========== */}
      </div>
    );
  }
}

export default AboutBanner;
