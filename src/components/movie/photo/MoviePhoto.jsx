import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import './owl.css';
import MoviePhotoItem from "./MoviePhotoItem";
import { Carousel } from "react-responsive-carousel";

export default class MoviePhoto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reload: false,
    };
  }

  mappingDataPhoto = () => {
    let photoList;
    if (this.props.photo_urls) {
      photoList = this.props.photo_urls.map((url, i) => (
        <div>
          <img
            key={i}
            src={
              process.env.PUBLIC_URL +
              "/assets/images/movie/movie-details02.jpg"
            }
            alt="movie"
          />
        </div>
      ));
      return photoList;
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <OwlCarousel items={3} className="owl-theme" loop nav margin={8}>
          {/* <div ><img className="img" src={'assets/img/img1.jpg'} /></div>
          <div><img className="img" src={'assets/img/img2.jpg'} /></div>
          <div><img className="img" src={'assets/img/img4.jpg'} /></div>
          <div><img className="img" src={'assets/img/img3.jpg'} /></div>
          <div><img className="img" src={'assets/img/img5.jpg'} /></div>
          <div><img className="img" src={'assets/img/img6.jpg'} /></div>
          <div><img className="img" src={'assets/img/img7.jpg'} /></div> */}
          {this.photoList}
        </OwlCarousel>
      </div>
    );
  }
}
