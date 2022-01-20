import React, { Component } from "react";
import PromoPrice from "./PromoPrice";
import moment from "moment";
import "moment/locale/vi";
import QRCode from "react-qr-code";
import ChosenSeatList from "../booking-seat-plan/ChosenSeatList";

export default class BookingComplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: [],
      showtime: {},
      movie: {},
      theater: {},
      concession: [],
      seats: [],
      user: {
        // name: "",
        // email: ""
      },
      userId: null,
      foodPrice: 0,
      ticketPrice: 0,
      // isLogged: false,
      // isRedirect: false,
      phone: "",
      firstName: "",
      lastName: "",
      email: "",
      // promoCode: "",
      offer: {
        percentage: 0,
      },
      order: {},
      // cardId: "",
      // fullName: "",
      // expired: "",
      // cvv: "",
      QRString: "",
    };
    console.log(this.props);
    // this.book = this.book.bind(this);
    // this.isInputChange = this.isInputChange(this);
  }

  componentDidMount() {
    //   this.getPrice();
    // })
    for (let i = 0; i < localStorage.length; i++) {
      console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }

    // console.log(this.state.bookedSeats);
    this.setState({
      foods: JSON.parse(localStorage.foods),
      showtime: JSON.parse(localStorage.showtime),
      movie: JSON.parse(localStorage.movie),
      theater: JSON.parse(localStorage.theater),
      concession: JSON.parse(localStorage.concession),
      foodPrice: JSON.parse(localStorage.foodPrice),
      ticketPrice: JSON.parse(localStorage.ticketPrice),
      seats: JSON.parse(localStorage.seats),
      order: JSON.parse(localStorage.order),
    });

    // console.log("sdt" + JSON.parse(localStorage.phone));
    if (localStorage.phone)
      this.setState({
        phone: JSON.parse(localStorage.phone),
      });

    if (localStorage.offer)
      this.setState({
        offer: JSON.parse(localStorage.offer),
      });

    if (window.sessionStorage.getItem("user")) {
      let user = JSON.parse(window.sessionStorage.getItem("user"));
      this.setState({
        user: user,
        // userId: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        // isLogged: true
      });
      console.log(user);
    }

    // let randomId = Math.floor(Math.random() * 9999);
    let randomId = 8888;
    let temp = this.state.order;
    temp.id = randomId;
    this.setState({
      order: temp,
      QRString: JSON.stringify(temp),
    });
  }

  getNumOfTickets() {
    return this.state.seats.length;
  }

  formatCurrency(n) {
    let temp = n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
    return temp.slice(0, temp.length - 2) + " vnd";
  }

  // getPrice() {
  //     let price = this.getNumOfTickets() * this.state.showtime.price;
  //     this.setState({
  //         ticketPrice: price
  //     })
  //     return price;
  // }

  getTime = () => {
    let time = new Date(this.state.showtime.timeStart);
    return time.getHours() + ":" + time.getMinutes();
  };

  getDate = () => {
    let time = new Date(this.state.showtime.timeStart);
    // return time.getDate() + "/" + time.getMonth() + 1 + "/" + time.getFullYear();
    return moment(time, "YYYY-MM-DD HH:mm:ss").fromNow();
  };

  getDate2 = () => {
    let time = new Date(this.state.showtime.timeStart);
    // return time.getDate() + "/" + time.getMonth() + 1 + "/" + time.getFullYear();
    return moment(time, "YYYY-MM-DD HH:mm:ss").calendar();
  };

  getDetailDay = () => {
    let time = new Date(this.state.showtime.timeStart);
    console.log(time);
    return (
      moment(time, "YYYY-MM-DD HH:mm:ss").format("dddd") +
      " - " +
      this.getTime() +
      " - " +
      this.getDate2()
    );
  };

  getFoodsPrice() {
    if (this.state.concession) {
      let sum = this.state.concession.reduce((price, foodId) => {
        let food = this.state.foods.find((food) => food.id === foodId);
        return (price += food.price);
      }, 0);

      return sum;
    }
  }

  getTotalPrice() {
    return this.getFoodsPrice() + this.state.ticketPrice;
  }

  mappingChosenFoodsData() {
    if (this.state.concession) {
      let list = this.state.concession.map((foodId, i) => {
        let food = this.state.foods.find((food) => food.id === foodId);

        return (
          <span className="info" key={i}>
            <span>{food.name}</span>
            <span>{this.formatCurrency(food.price)}</span>
          </span>
        );
      });

      return list;
    }
  }

  parseJwt(token) {
    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }

  render() {
    return (
      <div>
        <section
          className="account-section bg_img"
          data-background={
            // process.env.PUBLIC_URL +
            "/assets/images/account/account-bg.jpg"
          }
          style={{
            backgroundImage: `url("${"/assets/images/account/account-bg.jpg"}")`,
          }}
        >
          <div className="container">
            <div className="padding-top padding-bottom">
              <div className="section-header-3">
                <span className="cate">Xin Cảm Ơn Quý Khách Đã đặt vé</span>
                <span className="cate">
                  Chúc Quý Khách có buổi xem phim tuyệt vời!
                </span>
                {/* <h2 className="title">bạn trở lại</h2> */}
              </div>
              <div className="row">
                <div className="col-lg-6 justify-content-around">
                  <div className="booking-summery bg-one">
                    <h4 className="title">Thông tin đặt vé</h4>
                    <ul>
                      <li>
                        <h6 className="subtitle">
                          Họ và Tên
                          <span>
                            {" "}
                            {this.state.user.firstName +
                              " " +
                              this.state.user.lastName}{" "}
                          </span>
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle">
                          Số điện thoại
                          <span> {this.state.phone} </span>
                        </h6>
                      </li>
                      <li>
                        <h6 className="subtitle">
                          Email
                          <span> {this.state.email} </span>
                        </h6>
                      </li>

                      <li>
                        <h6 className="subtitle mb-0">
                          <span>Tổng số tiền đã thanh toán</span>
                          <span>
                            {this.formatCurrency(
                              this.getTotalPrice() *
                                (1 - this.state.offer.percentage) *
                                1.1
                            )}
                          </span>
                        </h6>
                      </li>

                      <li>
                        <h6 className="subtitle mb-0">
                          <span>Mã QR đặt vé của bạn</span>
                          <QRCode value={this.state.QRString}></QRCode>
                        </h6>
                      </li>
                    </ul>
                  </div>
                  <div className="note">
                    <h5 className="title">Ghi chú:</h5>
                    <p>
                      Mã QR trên cũng sẽ được gửi qua email của bạn. Vui lòng
                      lưu mã để sử dụng như vé vào rạp.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 justify-content-around">
                  <div className="booking-summery bg-one">
                    <h4 className="title">Thông tin vé</h4>
                    <ul>
                      <li>
                        <h6 className="subtitle">
                          {this.state.movie.name}{" "}
                          <span>{this.getNumOfTickets() + " vé"}</span>
                        </h6>
                        <div className="info">
                          <span> Tiếng Việt - 2D</span>
                          <span>
                            <ChosenSeatList bookedSeats={this.state.seats} />{" "}
                          </span>
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
                          <span>Suất chiếu: </span>
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
                          <span>
                            {this.formatCurrency(this.state.ticketPrice)}
                          </span>
                        </h6>
                      </li>
                    </ul>
                    <ul className="side-shape">
                      <li>
                        <h6 className="subtitle">
                          <span>Thức ăn &amp; đồ uống</span>
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
                          <span>
                            {this.formatCurrency(this.state.foodPrice)}
                          </span>
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
                    <ul>
                      <PromoPrice
                        price={this.getTotalPrice()}
                        percentage={this.state.offer.percentage}
                      />
                    </ul>
                  </div>
                  <div className="note">
                    <h5 className="title">{/* Ghi chú:  */}</h5>
                    <p>
                      {/* Vui lòng cung cấp cho chúng tôi khoảng 15 phút để chuẩn bị F&amp;B khi bạn tới rạp */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
