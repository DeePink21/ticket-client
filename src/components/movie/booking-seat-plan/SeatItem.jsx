import React, { Component } from 'react'

export default class SeatItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBooked: false
        };
    }

    seatDisplay() {
        if (this.props.isSelected) {
            return "/assets/images/movie/seat01.png"
        }
        if (this.state.isBooked) {
            return "/assets/images/movie/seat01-booked.png"
        }
        return "/assets/images/movie/seat01-free.png"

    }

    getSeatNumber() {
        if (this.props.isSelected) {
            return "";
        }

        return this.props.seat.tier + this.props.seat.numbers;


        // var name = "";
        // var temp = this.props.number % 10;
        // if (this.props.number) {
        //     switch ((this.props.number - temp) / 10) {
        //         case 0:
        //             name = "A";
        //             break;
        //         case 1:
        //             name = "B";
        //             break;
        //         case 2:
        //             name = "C";
        //             break;
        //         case 3:
        //             name = "D";
        //             break;
        //         case 4:
        //             name = "E";
        //             break;
        //         case 5:
        //             name = "F";
        //             break;
        //         case 6:
        //             name = "G";
        //             break;
        //         case 7:
        //             name = "H";
        //             break;
        //         case 8:
        //             name = "I";
        //             break;
        //         case 9:
        //             name = "J";
        //             break;
        //         default:
        //             break;
        //     }

        //     if (temp === 0)
        //         return name + 10;
        //     return name + temp;
        // }
    }

    toggleSeat = (e) => {
        if (!this.props.isSelected) {
            this.setState({
                isBooked: !this.state.isBooked
            })
            console.log(this.props.seat.number, !this.state.isBooked);
            this.props.parentCallback(this.props.seat, !this.state.isBooked);
            e.preventDefault();
        } else {
            alert("Ví trí ghế này đã được đặt trước!!!\nVui lòng chọn vị trị khác\n Cảm ơn!")
        }
    }

    render() {
        return (
            <li onClick={this.toggleSeat} className="single-seat seat-free">
                <img
                    src={this.seatDisplay()}
                    alt="seat"
                />
                <span className="sit-num">{this.getSeatNumber()}</span>
            </li>
        )
    }
}
