import React, { Component } from "react";
import ShowtimeService from "../../../services/ShowtimeService";
import { formatWithOptions } from "date-fns/fp";
import { vi } from "date-fns/locale";
import { toDate, parseJSON } from "date-fns";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ShowtimeTable from "./ShowtimeTable";

export default class TicketOption extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showtimes: [],
      filtedShowtimes: [],
      data: [],
      locations: [],
      locationId: null,
      theaters: [],
      theaterId: null,
      timeStarts: [],
      timeStart: "",
    };
  }

  dateToString = formatWithOptions({ locale: vi }, "dd-MM-yyyy");

  componentDidMount() {
    ShowtimeService.getShowTimesByMovieId(this.props.movieId).then((res) => {
      // tạo mảng location
      let locations = res.data.content.map((showtime) => {
        return {
          id: showtime.location.id,
          name: showtime.location.name,
        };
      });

      // filter dupe
      let ids = locations.map((o) => o.id);
      locations = locations.filter(
        ({ id }, index) => !ids.includes(id, index + 1)
      );

      // tạo mảng theater
      let theaters = res.data.content.map((showtime) => {
        return {
          id: showtime.theater.id,
          name: showtime.theater.name,
        };
      });

      // filter dupe
      ids = theaters.map((o) => o.id);
      theaters = theaters.filter(
        ({ id }, index) => !ids.includes(id, index + 1)
      );

      // tạo mảng time
      let timeStarts = res.data.content.map((showtime) => {
        return {
          id: showtime.timeStart.substring(0, 10),
          name: this.dateToString(parseJSON(showtime.timeStart)),
        };
      });

      // filter dupe
      timeStarts = Array.from(new Set(timeStarts));

      // var showtimes = res.data;
      // console.log(showtimes);
      this.setState({
        locations: locations,
        theaters: theaters,
        showtimes: res.data.content,
        // showtimes: res.data,

        filtedShowtimes: res.data.content,
        timeStarts: timeStarts,
      });
      console.log(this.state);
      // var showtimes = this.state.showtimes;
    });
  }

  mappingDropdownList = (data) => {
    if (data) {
      var options = data.map((item, i) => {
        return (
          <Dropdown.Item className="" eventKey={item.id} key={i}>
            {item.name}
          </Dropdown.Item>
        );
      });
      return options;
    }
  };

  handleSelect = (target, e) => {
    console.log(e);
    let showtimes = this.state.showtimes;
    // filter showtimes
    if (target === "locationId") {
      showtimes = showtimes.filter(
        // eslint-disable-next-line eqeqeq
        (item) => item.location.id == e
      );
    }

    if (target === "theaterId") {
      showtimes = showtimes.filter(
        // eslint-disable-next-line eqeqeq
        (item) => item.theaterId == e
      );
    }

    if (target === "timeStart") {
      showtimes = showtimes.filter((item) => {
        console.log(item.timeStart.startsWith(e));
        return item.timeStart.startsWith(e);
      });
    }

    console.log(showtimes);

    this.setState({
      filtedShowtimes: showtimes,
      [target]: e,
    });

    // this.setState({
    //   [target]: e,
    // },
    // console.log(this.state)
    // );
  };

  render() {
    return (
      <div>
        <section className="book-section bg-one">
          <div className="container">
            <form className="ticket-search-form two">
              <div className="form-group">
                <div className="thumb">
                  <img src="/assets/images/ticket/city.png" alt="ticket" />
                </div>
                <span className="type">Địa Điểm</span>
                {/* <select className="select-bar"> */}
                {/* {this.mappingDropdownList(this.state.locations)} */}
                {/* </select> */}

                <DropdownButton
                  className="select-bar nice-select"
                  // alignRight
                  title="Chọn"
                  id="dropdown-menu-align-right"
                  onSelect={(e) => this.handleSelect("locationId", e)}
                >
                  {this.mappingDropdownList(this.state.locations)}
                </DropdownButton>
              </div>
              <div className="form-group">
                <div className="thumb">
                  <img src="/assets/images/ticket/date.png" alt="ticket" />
                </div>
                <span className="type">Ngày chiếu</span>
                <DropdownButton
                  className="select-bar nice-select"
                  // alignRight
                  title="Chọn"
                  id="dropdown-menu-align-right3"
                  onSelect={(e) => this.handleSelect("timeStart", e)}
                >
                  {this.mappingDropdownList(this.state.timeStarts)}
                </DropdownButton>
              </div>
              <div className="form-group">
                <div className="thumb">
                  <img src="/assets/images/ticket/cinema.png" alt="ticket" />
                </div>
                <span className="type">Rạp</span>
                <DropdownButton
                  className="select-bar nice-select"
                  // alignRight
                  title="Chọn"
                  id="dropdown-menu-align-right2"
                  onSelect={(e) => this.handleSelect("theaterId", e)}
                >
                  {this.mappingDropdownList(this.state.theaters)}
                </DropdownButton>
              </div>
            </form>
          </div>
        </section>

        <ShowtimeTable showtimes={this.state.filtedShowtimes}></ShowtimeTable>
      </div>
    );
  }
}
