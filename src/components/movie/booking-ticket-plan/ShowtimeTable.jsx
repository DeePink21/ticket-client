import React, { Component } from "react";
import SeatPlanRow from "./SeatPlanRow";

export default class ShowtimeTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.log(this.props.showtimes);

    let showtimes = this.props.showtimes;

    var grouped = this.groupBy(showtimes, (showtime) => showtime.theaterId);
    console.log(grouped);
    var data = Array.from(grouped);
    this.setState({
      data: data,
    });
    console.log(data);
  }

  groupBy(list, keyGetter) {
    if (list) {
      const map = new Map();
      list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
          map.set(key, [item]);
        } else {
          collection.push(item);
        }
      });
      return map;
    }
  }

  mappingData = () => {
    if (this.props.showtimes) {
      var grouped = this.groupBy(
        this.props.showtimes,
        (showtime) => showtime.theaterId
      );
      console.log(grouped);
      var data = Array.from(grouped);

      var showtimesTable = data.map((item, i) => {
        console.log(item);
        return (
          <SeatPlanRow
            movieId={this.props.movieId}
            key={i}
            showtime={item}
          ></SeatPlanRow>
        );
      });

      return showtimesTable;
    }
  };

  render() {
    console.log(this.props.showtimes);

    return (
      this.state.data && (
        <div className="ticket-plan-section padding-bottom padding-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 mb-5 mb-lg-0">
                <ul className="seat-plan-wrapper bg-five">
                  {this.mappingData()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}
