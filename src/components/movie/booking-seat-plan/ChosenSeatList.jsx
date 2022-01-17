import React, { Component } from 'react'
import "./ChosenSeatList.css"

export default class ChosenSeatList extends Component {
    getSeatNumber(seat) {
        var name = "";
        var temp = seat % 10;
        if (seat) {
            seat = parseInt(seat);
            switch ((seat - temp) / 10) {
                case 0:
                    name = "A";
                    break;
                case 1:
                    name = "B";
                    break;
                case 2:
                    name = "C";
                    break;
                case 3:
                    name = "D";
                    break;
                case 4:
                    name = "E";
                    break;
                case 5:
                    name = "F";
                    break;
                case 6:
                    name = "G";
                    break;
                case 7:
                    name = "H";
                    break;
                case 8:
                    name = "I";
                    break;
                case 9:
                    name = "J";
                    break;
                default:
                    break;
            }

            if (temp === 0)
                return name + 10;
            return name + temp;
        }
    }

    ChosenSeatList() {
        var list = "";
        if(this.props.bookedSeats) {
            this.props.bookedSeats.forEach(seat => {
           
                list += this.getSeatNumber(seat) + ", "
            })
        }
        return list.substring(0, list.length - 2);
    }
    
    render() {
        return (
                // <h3>{this.ChosenSeatList()}</h3>     
                <h3>{this.props.bookedSeats}</h3>      
        )
    }
}
