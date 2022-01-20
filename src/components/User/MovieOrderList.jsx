import React, { Component } from "react";
import MovieOrderItem from "./MovieOrderItem";
import OrderService from "../../services/OrderService";
import FoodService from "../../services/FoodService";

export default class MovieOrderList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: [],
      foods: [],
    };
  }

  componentDidMount = () => {
    // get list food
    FoodService.getFoods().then((res) => {
      this.setState({ foods: res.data.content });
    });

    // get list orders
    OrderService.getOrdersByUserId(this.props.userId).then((res) => {
      console.log(res);
      this.setState({
        // change this
        // orders: res.data
        orders: res.data[0].content,
      });
    });
  };

  componentDidUpdate() {
    console.log(this.state.orders);
  }

  mappingData = () => {
    if (this.state.orders) {
      var orderList = this.state.orders.map((order, i) => {
        console.log(order);
        return (
          <MovieOrderItem
            key={i}
            order={order}
            foods={this.state.foods}
          ></MovieOrderItem>
        );
      });

      return orderList;
    }
  };

  render() {
    console.log(this.state.orders);
    return (
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 mb-50 mb-lg-0">
          <div className="filter-tab tab">
            <div className="tab-area">
              <div className="tab-item">
                <div className="row mb-10 justify-content-center"></div>
              </div>
              <div className="tab-item active">
                <div className="movie-area mb-10">{this.mappingData()}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    );
  }
}
