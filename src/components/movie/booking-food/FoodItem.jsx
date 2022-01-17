import React, { Component } from 'react'

export default class FoodItem extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.value);
    console.log(this.props.food.id);
    this.props.parentCallback(this.props.food.id, this.state.value);

  }

  formatCurrency(n) {
    var temp = n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    return temp.slice(0, temp.length - 2) + ' vnd';
  }

  render() {
    return (
      <div className="grid-item combos popcorn bevarage">
        <div className="grid-inner">
          <div className="grid-thumb">
            <img
              src={this.props.food.image ? this.props.food.image : "/assets/images/movie/popcorn/pop1.png"}
              alt="movie/popcorn"
            />
            <div className="offer-tag">{this.formatCurrency(this.props.food.price)}</div>
            <div className="offer-remainder">
              <h6 className="o-title mt-0">20%</h6>
              <span>off</span>
            </div>
          </div>
          <div className="grid-content">
            <h5 className="subtitle">
              <a href="#0">{this.props.food.name}</a>
            </h5>
            <form onSubmit={this.handleSubmit} className="cart-button">
              <div className="cart-plus-minus">
                <input
                  className="cart-plus-minus-box"
                  type="text"
                  name="qtybutton"
                  defaultValue={this.state.value}
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" value="Submit" className="custom-button">
                Chọn
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
