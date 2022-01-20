import React, { Component } from "react";
import MovieSynopsis from "./MovieSynopsis";
import MoviePhotoItem from "./photo/MoviePhotoItem";
import MoviePhoto from "./photo/MoviePhoto";
import MovieCastList from "./cast/MovieCastList";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ReviewSection from "./details/ReviewSection";
import ReviewService from "../../services/ReviewService";

export default class MovieDetailsSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDefaulRender: true,
      reviews: [],
      numOfReviews: 0,
    };
  }

  componentDidMount() {
    ReviewService.getReviews().then((res) => {
      this.setState({
        reviews: res.data,
        numOfReviews: res.data.length,
      });
    });
  }

  switchRender(e) {
    e.preventDefault();
    this.setState({ isDefaulRender: !this.state.isDefaulRender });
  }

  mappingDataPhoto = () => {
    if (this.props.movie.photo_urls) {
      let photoList = this.props.movie.photo_urls.map((item, i) => {
        return <MoviePhotoItem key={i} photo={item}></MoviePhotoItem>;
      });
      return photoList;
    }
  };

  render() {
    console.log(this.props.movie);

    return (
      <section className="movie-details-section padding-top padding-bottom">
        <div className="container">
          <div className="row justify-content-center flex-wrap-reverse mb--50">
            <div className="col-lg-3 col-sm-10 col-md-6 mb-50">
              <div className="widget-1 widget-tags">
                <ul>
                  {/* <li>
                    <a href="#0">2D</a>
                  </li>
                  <li>
                    <a href="#0">imax 2D</a>
                  </li>
                  <li>
                    <a href="#0">4DX</a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-9 mb-50">
              <div className="movie-details">
                <h3 className="title">photos</h3>
                {/* <MoviePhoto photo_urls = {this.props.movie.image}></MoviePhoto> */}

                {/* <div className="details-photos owl-carousel"> */}
                {/* {this.mappingDataPhoto()} */}
                <OwlCarousel className="details-photos" loop margin={3}>
                  <div className="thumb">
                    <img
                      src="/assets/images/movie/movie-details01.jpg"
                      alt="movie"
                    />
                  </div>
                  <div className="thumb">
                    <img
                      src="/assets/images/movie/movie-details02.jpg"
                      alt="movie"
                    />
                  </div>
                  <div className="thumb">
                    <img
                      src="/assets/images/movie/movie-details03.jpg"
                      alt="movie"
                    />
                  </div>
                  {/* </div> */}
                </OwlCarousel>

                {this.defaultRender()}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  defaultRender() {
    if (this.state.isDefaulRender)
      return (
        <div className="tab summery-review">
          <ul className="tab-menu">
            <li className="active">Tóm tắt</li>
            <li onClick={(e) => this.switchRender(e)}>
              Người dùng đánh giá <span>{this.state.numOfReviews}</span>
            </li>
          </ul>

          <div className="tab-area">
            <div className="tab-item active">
              <MovieSynopsis>{/* {this.props.movie.synopsis} */}</MovieSynopsis>

              <div className="item">
                <h5 className="sub-title">Producers</h5>

                <a href="#0">
                  {
                    "Toho, Sound Team Don Juan, Amuse, JR East Marketing & Communications, Kadokawa, voque ting"
                  }
                </a>
              </div>
              <div className="item">
                <h5 className="sub-title">Studio</h5>

                <a href="#0">CoMix Wave Films</a>
              </div>

              <MovieCastList
              // casts={this.props.movie.casts}
              ></MovieCastList>
            </div>
          </div>
        </div>
      );
    else return this.reviewRender();
  }

  reviewRender() {
    return (
      <div className="tab summery-review">
        <ul className="tab-menu">
          <li type="button" onClick={(e) => this.switchRender(e)}>
            summery
          </li>
          <li className="active">
            user review <span>{this.state.numOfReviews}</span>
          </li>
        </ul>
        <ReviewSection
          movieId={this.props.movie.id}
          reviews={this.state.reviews}
        />
      </div>
    );
  }
}
