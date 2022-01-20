import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BookMovieDetail extends Component {
  render() {
    return (
      <div>
        <section className="book-section bg-one">
          <div className="container">
            <div className="book-wrapper offset-lg-3">
              <div className="left-side">
                <div className="item">
                  <div className="item-header">
                    <div className="thumb">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/movie/imdb-logo.png"
                        }
                        alt="movie"
                      />
                    </div>
                    <div className="counter-area">
                      <span
                      // className="counter-item odometer"
                      // data-odometer-final={88}
                      >
                        4.5
                      </span>
                    </div>
                  </div>
                  <p>Điểm IMDB</p>
                </div>
                <div className="item">
                  <div className="item-header">
                    <div className="thumb">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/movie/popularity.png"
                        }
                        alt="movie"
                      />
                    </div>
                    <div className="counter-area">
                      <span>#20</span>
                    </div>
                  </div>
                  <p>Xếp hạng IMDB</p>
                </div>
              </div>
              <Link
                to={"/choose-theater/" + this.props.movieID}
                className="custom-button"
              >
                book tickets
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
