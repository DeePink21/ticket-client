import React, { Component } from 'react'

export default class TotalPrice extends Component {


    formatCurrency(n) {
        let temp = n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
        return temp.slice(0, temp.length - 2) + ' vnd';
      }

      getPrice() {
        let price = 0;
        this.props.seats.forEach(seat => price += seat.price);
          return price;
      }



    render() {

        return (
            this.props.seats&&
            <div className="book-item">
                <span>Phí</span>
                <h3 className="title">{this.formatCurrency(this.getPrice())}</h3>
              </div>
        )
    }
}
