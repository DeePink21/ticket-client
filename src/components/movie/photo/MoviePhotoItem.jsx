import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MoviePhotoItem extends Component {
  render() {
    return (
      // <div className="thumb">
      //   <Link
      //     to={
      //       process.env.PUBLIC_URL +
      //       "/assets/images/movie/" +
      //       this.props.photo
      //     }
      //     className="img-pop"
      //   >
      //     <img
      //       src={
      //         process.env.PUBLIC_URL +
      //         "/assets/images/movie/" +
      //         this.props.photo
      //       }
      //       alt="movie"
      //     />
      //   </Link>
      // </div>

      <div className="thumb">
        {/* <a
          href="/assets/images/movie/movie-details02.jpg"
          className="img-pop"
        > */}
        <img src="/assets/images/movie/movie-details02.jpg" alt="movie" />
        {/* </a> */}
      </div>
    );
  }
}
