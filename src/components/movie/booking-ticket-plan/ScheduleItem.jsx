import React, { Component } from "react";
import { Link } from "react-router-dom";
import "moment/locale/vi";
import "./ScheduleItem.css";

import { formatWithOptions } from "date-fns/fp";
import { vi } from "date-fns/locale";
import { parseJSON, formatDistance } from "date-fns";

export default class ScheduleItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showtime: this.props.showtime,
    };
    console.log(this.props.showtime);
  }

  getTime = () => {
    let time = new Date(this.props.showtime.timeStart);
    return time.getHours() + ":" + time.getMinutes();
  };

  getDate = () => {
    return this.dateToString(parseJSON(this.props.showtime.timeStart));
  };

  dateToString = formatWithOptions({ locale: vi }, "dd-MM-yyyy");

  getDate2 = () => {
    return formatDistance(
      parseJSON(this.props.showtime.timeStart),
      new Date(),
      { addSuffix: true, locale: vi }
    );
  };

  isFuture(timeStart) {
    return new Date().getTime() - new Date(timeStart).getTime() < 0;
  }

  expiredShowtime = (e) => {
    e.preventDefault();
    alert("Suất chiếu đã hết hạn đặt!!!\nVui lòng chọn suất khác!");
  };

  render() {
    if (this.props.showtime) {
      if (this.props.showtime.status === "Expire") {
        return (
          <a href="#0" onClick={(e) => this.expiredShowtime(e)}>
            <div className="item-block">{this.getTime()}</div>
            <div className="">{this.getDate()}</div>
          </a>
        );
      }

      return (
        <Link to={"/choose-seats/" + this.props.showtime.id}>
          <div className="item">{this.getTime()}</div>
          <div className="">{this.getDate2()}</div>
        </Link>
      );
    } else {
      return <div></div>;
    }
  }
}
