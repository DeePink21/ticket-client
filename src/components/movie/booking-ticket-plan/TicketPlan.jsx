import React, { Component } from "react";
import MovieService from "../../../services/MovieService";
import ShowtimeService from "../../../services/ShowtimeService";
import BannerTicketPlan from "./BannerTicketPlan";
import BookingFilterPlan from "./BookingFilterPlan";
import TicketOption from "./TicketOption";

export default class TicketPlan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      movie: {},
      showtimes: []
    };
    console.log(
      this.state.id);
  }

  componentDidMount = () => {
    MovieService.getMovieById(this.state.id).then((res) => {
      this.setState({ movie: res.data });
      console.log(this.state);
    });

    ShowtimeService.getShowTimesByMovieId(this.state.id).then((res) => {
      this.setState({ showtimes: res.data.content });
      // this.setState({ showtimes: res.data });
      console.log(this.state);
    })
  }

  render() {
    return (
      <div>
        <BannerTicketPlan movie={this.state.movie}></BannerTicketPlan>
        {/* <BookingFilterPlan></BookingFilterPlan> */}

        <TicketOption movieId={this.state.id}></TicketOption>
      </div>
    );
  }
}
