/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

export default class BannerMovieDetail extends Component {
  constructor(props) {
    super();
  }

  openInNewTab = (url) => {
    if (!url) url = "https://www.youtube.com/";
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  render() {
    console.log("banner: ");
    console.log(this.props.movie);

    const movieName = {
      fontSize: "xx-large",
    };

    return (
      <div>
        <section
          className="details-banner bg_img"
          style={{ backgroundImage: `url("${"/assets/images/banner03.jpg"}")` }}
          data-background={
            process.env.PUBLIC_URL + "/assets/images/banner03.jpg"
            // + this.props.movie.image
          }
        >
          <div className="container">
            <div className="details-banner-wrapper">
              <div className="details-banner-thumb">
                <img
                  src={
                    // process.env.PUBLIC_URL +
                    // "/assets/images/movie/movie03.jpg"
                    this.props.movie.thumbnail
                    // "/assets/images/movie03.jpg"
                    // "https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
                  }
                  alt="movie"
                />

                <a
                  onClick={(e) =>
                    this.openInNewTab(this.props.movie.trailerUrl)
                  }
                  // href={this.props.movie.trailerUrl || "https://www.youtube.com"}
                  href="#"
                  // target="_blank"
                  // rel="noopener noreferrer"
                  className="video-not-popup"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/movie/video-button.png"
                    }
                    alt="movie"
                  />
                </a>
              </div>
              <div className="details-banner-content offset-lg-3">
                <h3 style={movieName} className="title">
                  {this.props.movie.name}
                </h3>
                <div className="tags">
                  {/* <a href="#0">{this.props.movie.language}</a> */}
                  <a href="#0">Tiếng Việt</a>
                </div>
                <a href="#0" className="button">
                  {this.props.movie.genre}
                </a>
                <div className="social-and-duration">
                  <div className="duration-area">
                    <div className="item">
                      <i className="fas fa-calendar-alt" />
                      {/* <span>06 Dec, 2020</span> */}
                      <span>
                        {"Khởi chiếu: " +
                          moment().calendar(this.props.movie.releasedDate)}
                      </span>
                    </div>
                    <div className="item">
                      <i className="far fa-clock" />
                      <span>
                        {"Thời lượng: " +
                          this.props.movie.durationMin +
                          " phút"}
                      </span>
                    </div>
                  </div>
                  <ul className="social-share">
                    <li>
                      <a href="#0">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#0">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
