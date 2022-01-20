import React, { Component } from "react";
import "./ChosenSeatList.css";

export default class ChosenSeatList extends Component {
  render() {
    return <div>{this.props.bookedSeats}</div>;
  }
}
