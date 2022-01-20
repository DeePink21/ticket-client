import React, { Component } from "react";

export default class PromoPrice extends Component {
  formatCurrency(n) {
    let temp = n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
    return temp.slice(0, temp.length - 2) + " vnd";
  }

  render() {
    return (
      <li className="proceed-area  text-center">
        <h6 className="subtitle">
          <span>Tổng cộng</span>
          <span>{this.formatCurrency(this.props.price)}</span>
        </h6>
        <h6 className="subtitle">
          <span>Giảm</span>
          <span>
            {this.formatCurrency(this.props.price * this.props.percentage)}
          </span>
        </h6>
        <h6 className="subtitle">
          <span>Phí cần thanh toán</span>
          <span>
            {this.formatCurrency(
              this.props.price * (1 - this.props.percentage) * 1.1
            )}
          </span>
        </h6>
        <span className="info">
          <span>Bao gồm thuế GTGT</span>
        </span>
      </li>
    );
  }
}
