import React, { Component } from "react";
import MovieCastItem from "./MovieCastItem";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default class MovieCastList extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);
    // console.log("vo detail page")
    // console.log(this.state)
  }

  mappingData = () => {
    let casts = [
      {
        name: "Jin Aketagawa",
        profile: "/assets/images/cast/cast01.jpg",
        role: "director",
      },
      {
        name: "abc",
        profile: "/assets/images/cast/cast02.jpg",
        role: "main mc",
      },
      {
        name: "abc",
        profile: "/assets/images/cast/cast03.jpg",
        role: "main mc",
      },
      {
        name: "abc",
        profile: "/assets/images/cast/cast04.jpg",
        role: "supporting",
      },
      {
        name: "abc",
        profile: "/assets/images/cast/cast05.jpg",
        role: "supporting",
      },
      {
        name: "abc",
        profile: "/assets/images/cast/cast06.jpg",
        role: "supporting",
      },
    ];
    // if (this.props.casts)
    // {
    let castList =
      // this.props.
      casts.map((cast, i) => {
        return <MovieCastItem key={i} cast={cast}></MovieCastItem>;
      });

    return castList;
    // }
  };

  render() {
    return (
      <div className="item">
        <div className="header">
          <h5 className="sub-title">cast</h5>
          <div className="navigation">
            <div className="cast-prev">
              <i className="flaticon-double-right-arrows-angles" />
            </div>
            <div className="cast-next">
              <i className="flaticon-double-right-arrows-angles" />
            </div>
          </div>
        </div>
        {/* <div className="casting-slider owl-carousel">
         

          <div className="cast-item">
            <div className="cast-thumb">
              <a href="#0">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/cast/cast02.jpg"
                  }
                  alt="cast"
                />
              </a>
            </div>
            <div className="cast-content">
              <h6 className="cast-title">
                <a href="#0">nora hardy</a>
              </h6>
              <span className="cate">actor</span>
              <p>As raven</p>
            </div>
          </div>
          <div className="cast-item">
            <div className="cast-thumb">
              <a href="#0">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/cast/cast03.jpg"
                  }
                  alt="cast"
                />
              </a>
            </div>
            <div className="cast-content">
              <h6 className="cast-title">
                <a href="#0">alvin peters</a>
              </h6>
              <span className="cate">actor</span>
              <p>As magneto</p>
            </div>
          </div>
          <div className="cast-item">
            <div className="cast-thumb">
              <a href="#0">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/cast/cast04.jpg"
                  }
                  alt="cast"
                />
              </a>
            </div>
            <div className="cast-content">
              <h6 className="cast-title">
                <a href="#0">josh potter</a>
              </h6>
              <span className="cate">actor</span>
              <p>As quicksilver</p>
            </div>
          </div>

          {this.mappingData()}
        </div> */}
        {
          // this.props.casts &&
          <OwlCarousel
            className="casting-slider"
            items={3}
            loop
            // nav
            margin={8}
          >
            {this.mappingData()}
          </OwlCarousel>
        }
      </div>
    );
  }
}
