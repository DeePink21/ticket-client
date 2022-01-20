import React, { Component } from "react";
import ShowtimeService from "../../../services/ShowtimeService";
import MovieService from "../../../services/MovieService";
import TheaterService from "../../../services/TheaterService";

export default class BannerSeatPlan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showtime: {},
      movie: {},
      theater: {},
    };
    console.log(this.props);
  }

  componentDidMount() {
    ShowtimeService.getShowTimeById(this.props.showtimeId).then((res) => {
      this.setState({ showtime: res.data });
      MovieService.getMovieById(res.data.movieId).then((res) => {
        this.setState({ movie: res.data });
        console.log(this.state.movie);
      });
      TheaterService.getTheaterById(res.data.theaterId).then((res) => {
        this.setState({ theater: res.data });
        console.log(this.state.theater);
      });
      //
    });
  }

  render() {
    return (
      <section
        className="details-banner hero-area bg_img seat-plan-banner"
        style={{
          backgroundImage: `url("${"/assets/images/banner/banner04.jpg"}")`,
        }}
        data-background={
          process.env.PUBLIC_URL + "/assets/images/banner/" + "banner04.jpg"
        }
      >
        <div className="container">
          <div className="details-banner-wrapper">
            <div className="details-banner-content style-two">
              <h3 className="title">{this.state.movie.name}</h3>
              <div className="tags">
                <a href="#0">
                  {this.state.showtime.roomName +
                    " - " +
                    this.state.theater.name}{" "}
                </a>
              </div>
              <div className="tags">
                <a href="#0">{this.state.theater.locationName}</a>
              </div>

              <div className="tags">
                <a href="#0">Tiếng Việt - 2D</a>
              </div>
              <div className="tags">
                <span>-</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
