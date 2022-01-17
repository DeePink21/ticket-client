import React, { Component } from "react";
import BannerSeatPlan from "./BannerSeatPlan";
import TimeFilterSeatPlan from "./TimeFilterSeatPlan";
import MovieSeat from "./MovieSeat";
import SeatService from "../../../services/SeatService";
import ShowtimeService from "../../../services/ShowtimeService";

export default class SeatPlan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      // seats: {},
      // showtime: {}
    };
    console.log(this.state.id);
  }

  componentDidMount() {
    // ShowtimeService.getShowTimeById(this.state.id).then((res) => {
    //     this.setState({ showtime: res.data });
    //     SeatService.getSeatsByShowtimeId(this.state.id).then((res) => {
    //         this.setState({ seats: res.data });
    //         console.log(this.state);
    //     });
    //   })
  }

  render() {
    return (
      <div>
        <BannerSeatPlan showtimeId={this.state.id}></BannerSeatPlan>
        {/* <TimeFilterSeatPlan></TimeFilterSeatPlan> */}
        <MovieSeat showtimeId={this.state.id}></MovieSeat>
      </div>
    );
  }
}
