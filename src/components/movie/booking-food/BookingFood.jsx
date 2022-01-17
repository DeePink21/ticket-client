import React, { Component } from "react";
import { Link } from "react-router-dom";
import FoodService from "../../../services/FoodService";
import MovieService from "../../../services/MovieService";
import TheaterService from "../../../services/TheaterService";
import FoodItem from "./FoodItem";
import moment from 'moment';
import 'moment/locale/vi'
import ChosenSeatList from "../booking-seat-plan/ChosenSeatList";
import ShowtimeService from "../../../services/ShowtimeService";

export default class BookingFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      foods: [],
      showtime: {},
      movie: {},
      theater: {},
      concession: [],
      foodPrice: 0,
      ticketPrice: 0,
      bookedSeats: []
    };
    console.log(this.props);
  }

  componentDidMount() {
    this.setState({ bookedSeats: JSON.parse(localStorage.getItem('seats')) })

    FoodService.getFoods().then((res) => {
      this.setState({ foods: res.data.content });
    })

    ShowtimeService.getShowTimeById(this.state.id).then((res) => {
      this.setState({ showtime: res.data });

      MovieService.getMovieById(res.data.movieId).then((res) => {
        this.setState({ movie: res.data });
      })

      TheaterService.getTheaterById(res.data.theaterId).then((res) => {
        this.setState({ theater: res.data });
      })

      this.getPrice();
    })
  }

  handleCallback = (foodId, quantity) => {
    var temp = this.state.concession.filter(e => e !== foodId)

    var addedArr = [];
    addedArr.length = quantity;
    addedArr.fill(foodId);
    temp = temp.concat(addedArr);
    console.log(temp);
    this.setState({
      concession: temp
    })
  }


  mappingData() {
    if (this.state.foods) {
      var data = this.state.foods;
      var foodList = data.map((item, i) => {
        return (
          <FoodItem parentCallback={this.handleCallback} key={i} food={item}></FoodItem>
        )
      })
      return foodList;
    }
  }

  getNumOfTickets() {
    console.log(JSON.parse(localStorage.getItem('seats')));
    return JSON.parse(localStorage.getItem('seats')).length;
  }

  formatCurrency(n) {
    var temp = n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    return temp.slice(0, temp.length - 2) + ' vnd';
  }

  getPrice() {
    var price = JSON.parse(localStorage.getItem('seats')).length * this.state.showtime.price;
    this.setState({
      ticketPrice: price
    })
    return price;
  }

  getTime = () => {
    var time = new Date(this.state.showtime.timeStart);
    return time.getHours() + ":" + time.getMinutes();
  }

  getDate = () => {
    var time = new Date(this.state.showtime.timeStart);
    // return time.getDate() + "/" + time.getMonth() + 1 + "/" + time.getFullYear();
    return moment(time, "YYYY-MM-DD HH:mm:ss").fromNow();
  }

  getDate2 = () => {
    var time = new Date(this.state.showtime.timeStart);
    // return time.getDate() + "/" + time.getMonth() + 1 + "/" + time.getFullYear();
    return moment(time, "YYYY-MM-DD HH:mm:ss").calendar();
  }

  getDetailDay = () => {
    var time = new Date(this.state.showtime.timeStart);
    console.log(time);
    return moment(time, "YYYY-MM-DD HH:mm:ss").format('dddd') + ' - ' + this.getTime() + ' - ' + this.getDate2();
  }

  mappingChosenFoodsData() {
    if (this.state.concession) {

      var list = this.state.concession.map((foodId, i) => {
        var food = this.state.foods.find(food => food.id === foodId);

        return (
          <span className="info" key={i}>
            <span>{food.name}</span>
            <span>{this.formatCurrency(food.price)}</span>
          </span>
        )
      })

      return list;
    }
  }

  getFoodsPrice() {
    if (this.state.concession) {
      var sum = this.state.concession.reduce((price, foodId) => {
        var food = this.state.foods.find(food => food.id === foodId);
        return price += food.price;
      }, 0)

      return sum;
    }
  }

  getTotalPrice() {
    return this.getFoodsPrice() + this.state.ticketPrice;
  }

  checkout() {
    if (this.state.bookedSeats) {
      // console.log(this.state.bookedSeats);
      localStorage.removeItem('foods');
      localStorage.setItem('foods', JSON.stringify(this.state.foods));

      localStorage.removeItem('showtime');
      localStorage.setItem('showtime', JSON.stringify(this.state.showtime));

      localStorage.removeItem('movie');
      localStorage.setItem('movie', JSON.stringify(this.state.movie));

      localStorage.removeItem('theater');
      localStorage.setItem('theater', JSON.stringify(this.state.theater));

      localStorage.removeItem('concession');
      localStorage.setItem('concession', JSON.stringify(this.state.concession));

      localStorage.removeItem('foodPrice');
      localStorage.setItem('foodPrice', JSON.stringify(this.getFoodsPrice()));

      localStorage.removeItem('ticketPrice');
      localStorage.setItem('ticketPrice', JSON.stringify(this.state.ticketPrice));
      // console.log(JSON.parse(localStorage.getItem('seats')));
    }
  }

  render() {
    return (
      this.state.foods &&
        <div className="movie-facility padding-bottom padding-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="section-header-3">
                  <span className="cate">Bạn cảm thấy đói</span>
                  <h2 className="title">Chúng tôi có thức ăn và đồ uống</h2>
                  <p>Đặt trước đồ ăn và thức uổng để được giảm giá!</p>
                </div>
                <div className="grid--area">
                  <div className="grid-area">
                    {this.mappingData()}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="booking-summery bg-one">
                  <h4 className="title">Tóm tắt </h4>
                  <ul>
                    <li>
                      <h6 className="subtitle">{this.state.movie.name} <span>{this.getNumOfTickets() + ' vé'}</span></h6>
                      <div className="info">
                        <span> Tiếng Việt - 2D</span>
                        <span><ChosenSeatList bookedSeats={this.state.bookedSeats} />  </span>
                      </div>
                    </li>
                    <li>
                      <h6 className="subtitle">
                        <span>{this.state.theater.name}</span>
                        <span>{this.state.showtime.roomName}</span>
                      </h6>
                      <div className="info">
                        <span>{this.state.theater.locationName}</span>
                      </div>
                    </li>

                    <li>
                      <h6 className="subtitle mb-0">
                        <span>Suất chiếu:</span>
                        <span>{this.getDetailDay()}</span>
                      </h6>
                      <div className="info">
                        <span></span>
                        <span>{this.getDate()}</span>
                      </div>
                    </li>

                    <li>
                      <h6 className="subtitle mb-0">
                        <span>Tổng giá vé</span>
                        <span>{this.formatCurrency(this.state.ticketPrice)}</span>
                      </h6>
                    </li>
                  </ul>
                  <ul className="side-shape">

                    <li>
                      <h6 className="subtitle">
                        <span>Thức ăn &amp; Đồ uống</span>
                      </h6>
                      {/* <span className="info">
                      <span>2 Nachos Combo</span>
                      <span>$57</span>
                    </span>
                    <span className="info">
                      <span>2 Nachos Combo</span>
                      <span>$57</span>
                    </span>
                    <span className="info">
                      <span>2 Nachos Combo</span>
                      <span>$57</span>
                    </span> */}
                      {this.mappingChosenFoodsData()}

                    </li>
                    <li>
                      <h6 className="subtitle mb-0">
                        <span>Tổng giá</span>
                        <span>{this.formatCurrency(this.getFoodsPrice())}</span>
                      </h6>
                    </li>
                  </ul>
                  {/* <ul>
                  <li>
                    <span className="info">
                      <span>price</span>
                      <span>$207</span>
                    </span>
                    <span className="info">
                      <span>vat</span>
                      <span>$15</span>
                    </span>
                  </li>
                </ul> */}
                </div>
                <div className="proceed-area  text-center">
                  <h6 className="subtitle">
                    <span>Chi phí ước tính</span>
                    <span>{this.formatCurrency(this.getTotalPrice())}</span>
                  </h6>
                  <Link onClick={this.checkout()} to="/checkout" className="custom-button back-button">
                    Tiếp tục
                  </Link>
                </div>
                <div className="note">
                  <h5 className="title">Ghi chú: </h5>
                  <p>
                    Vui lòng cung cấp cho chúng tôi khoảng 15 phút để chuẩn bị F&amp;B khi bạn tới rạp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    );
  }
}
