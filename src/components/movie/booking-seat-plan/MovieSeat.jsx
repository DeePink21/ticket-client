import React, { Component } from "react";
import { Link } from "react-router-dom";
import SeatService from "../../../services/SeatService";
import ShowtimeService from "../../../services/ShowtimeService";
import ChosenSeatList from "./ChosenSeatList";
import SeatItem from "./SeatItem";
import TotalPrice from "./TotalPrice";

export default class MovieSeat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showtimeId: this.props.showtimeId,
      seats: [],
      showtime: {},
      seatsPerRow: 10,
      bookedSeats: [],
    };
    console.log(this.props);
    localStorage.removeItem("seats");
    console.log(localStorage.getItem("movieId"));

    this.proceed = this.proceed.bind(this);
  }

  componentDidMount() {
    ShowtimeService.getShowTimeById(this.state.showtimeId).then((res) => {
      this.setState({ showtime: res.data });
      SeatService.getSeatsByRoomIdandShowtimeId(
        this.state.showtime.roomId,
        this.state.showtimeId
      ).then((res) => {
        this.setState({ seats: res.data.content });
        console.log(this.state);
      });
    });
  }

  handleCallback = (number, isBooked) => {
    let seatStatus = this.state.bookedSeats;
    if (isBooked) {
      if (!this.state.bookedSeats.includes(number)) {
        seatStatus.push(number);
        this.setState({ bookedSeats: seatStatus });
      }
    } else {
      seatStatus = seatStatus.filter((x) => x !== number);
      this.setState({ bookedSeats: seatStatus });
    }
  };

  handleCallback = (seat, isBooked) => {
    let seatStatus = this.state.bookedSeats;
    if (isBooked) {
      if (!this.state.bookedSeats.some(item=> item.id === seat.id)) {
        seatStatus.push(seat);
        this.setState({ bookedSeats: seatStatus });
      }
    } else {
      seatStatus = seatStatus.filter(item => item.id !== seat.id);
      this.setState({ bookedSeats: seatStatus });
    }
  };

  mappingData(tier) {
    if (this.state.seats) {
      let temp = (tier - 1) * 10;
      let data = this.state.seats.slice(temp, temp + this.state.seatsPerRow);
      let rowOfSeat = data.map((item, i) => {
        return (
          <SeatItem
            parentCallback={this.handleCallback}
            // tier={item.tier}
            // number={item.numbers}
            seat={item}
            key={i}
            isSelected={item.isSelected}
          />
        );
      });
      return rowOfSeat;
    }
  }

  ChosenSeatList(bookedSeats) {
    let list = "";
    if (bookedSeats) {
      bookedSeats.forEach((seat) => {
        list += seat.tier + seat.number + ", ";
      });
    }
    return list.substring(0, list.length - 2);
  }

  proceed(e) {
    if (this.state.bookedSeats) {
      // console.log(this.state.bookedSeats);

      // convert chosen seat list to text
      let bookedSeats = this.ChosenSeatList(this.state.bookedSeats);
      let seatIdArr = this.state.bookedSeats.map(seat => seat.id);

      localStorage.removeItem("bookedSeats");
      localStorage.setItem("bookedSeats", JSON.stringify(seatIdArr));

      localStorage.removeItem("seats");
      localStorage.setItem("seats", JSON.stringify(bookedSeats));
      console.log(JSON.parse(localStorage.getItem("seats")));
    }
  }

  render() {
    return (
      this.state.showtime &&
      this.state.seats && (
        <div className="seat-plan-section padding-bottom padding-top">
          <div className="container">
            <div className="screen-area">
              <h4 className="screen">Màn hình</h4>
              <div className="screen-thumb">
                <img src="/assets/images/movie/screen-thumb.png" alt="movie" />
              </div>
              <h5 className="subtitle">silver plus</h5>
              <div className="screen-wrapper">
                <ul className="seat-area">
                  <li className="seat-line">
                    <span>h</span>
                    <ul className="seat--area">
                      <li className="front-seat">
                        <ul>{this.mappingData(8)}</ul>
                      </li>
                    </ul>
                    <span>h</span>
                  </li>
                  <li className="seat-line">
                    <span>g</span>
                    <ul className="seat--area">
                      <li className="front-seat">
                        <ul>{this.mappingData(7)}</ul>
                      </li>
                    </ul>
                    <span>g</span>
                  </li>
                  <li className="seat-line">
                    <span>f</span>
                    <ul className="seat--area">
                      <li className="front-seat">
                        <ul>{this.mappingData(6)}</ul>
                      </li>
                    </ul>
                    <span>f</span>
                  </li>
                </ul>
              </div>

              <div className="screen-wrapper">
                <ul className="seat-area">
                  <li className="seat-line">
                    <span>e</span>
                    <ul className="seat--area">
                      <li className="front-seat">
                        <ul>{this.mappingData(5)}</ul>
                      </li>
                    </ul>
                    <span>e</span>
                  </li>
                  <li className="seat-line">
                    <span>d</span>
                    <ul className="seat--area">
                      <li className="front-seat">
                        <ul>{this.mappingData(4)}</ul>
                      </li>
                    </ul>
                    <span>d</span>
                  </li>
                  <li className="seat-line">
                    <span>c</span>
                    <ul className="seat--area">
                      <li className="front-seat">
                        <ul>{this.mappingData(3)}</ul>
                      </li>
                    </ul>
                    <span>c</span>
                  </li>
                  <li className="seat-line">
                    <span>b</span>
                    <ul className="seat--area">
                      <li className="front-seat">
                        <ul>{this.mappingData(2)}</ul>
                      </li>
                    </ul>
                    <span>b</span>
                  </li>
                  <li className="seat-line">
                    <span>a</span>
                    <ul className="seat--area">
                      <li className="front-seat">
                        <ul>{this.mappingData(1)}</ul>
                      </li>
                    </ul>
                    <span>a</span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="proceed-book bg_img"
              style={{
                backgroundImage: `url("${"/assets/images/movie/movie-bg-proceed.jpg"}")`,
              }}
              data-background="/assets/images/movie/movie-bg-proceed.jpg"
            >
              <div className="proceed-to-book">
                <div className="book-item">
                  <span>Ghế đã chọn</span>

                  <h3 className="title">
                    <ChosenSeatList bookedSeats={this.ChosenSeatList(this.state.bookedSeats)} />
                  </h3>
                </div>

                <TotalPrice
                  price={
                    this.state.bookedSeats.length * this.state.showtime.price
                  }
                />
                <div className="book-item">
                  <Link
                    onClick={(e) => this.proceed(e)}
                    to={"/choose-foods/" + this.state.showtimeId}
                    className="custom-button"
                  >
                    Tiếp tục
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}
