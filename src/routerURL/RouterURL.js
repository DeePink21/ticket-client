import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/home/Home";
import BookingCheckout from "../components/movie/booking-checkout/BookingCheckout";
import BookingComplete from "../components/movie/booking-checkout/BookingComplete";
import PayPal from "../components/movie/booking-checkout/PayPal";
import BookingFood from "../components/movie/booking-food/BookingFood";
import SeatPlan from "../components/movie/booking-seat-plan/SeatPlan";
import TicketPlan from "../components/movie/booking-ticket-plan/TicketPlan";
import MovieDetail from "../components/movie/MovieDetail";
import UserDetail from "../components/User/UserDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
// import TicketPlan from "../components/movie/booking-ticket-plan/TicketPlan";
// import Register from "../pages/Register";

export default class RouterURL extends Component {
  render() {
    return (
      <div className="container">
        <Header />

        <Switch>
          <Route path="/movie-detail/:id" component={MovieDetail} />
          <Route path="/choose-theater/:id" component={TicketPlan} />
          <Route path="/choose-seats/:id" component={SeatPlan} />
          <Route path="/choose-foods/:id" component={BookingFood} />
          <Route path="/checkout" component={BookingCheckout} />
          <Route path="/book-result" component={BookingComplete} />
          <Route path="/register" component={Register} />
          <Route path="/user" component={UserDetail} />
          <Route path="/login" component={Login} />
          <Route expact path="/" component={Home} />
          <Route component={Home} />
        </Switch>

        <Footer />
      </div>
    );
  }
}
