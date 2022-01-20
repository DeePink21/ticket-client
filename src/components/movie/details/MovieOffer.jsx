import React from "react";

export default function MovieOffer() {
  return (
    <div>
      <div className="widget-1 widget-offer">
        <h3 className="title">Applicable offer</h3>
        <div className="offer-body">
          <div className="offer-item">
            <div className="thumb">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/sidebar/offer01.png"
                }
                alt="sidebar"
              />
            </div>
            <div className="content">
              <h6>
                <a href="#0">Amazon Pay Cashback Offer</a>
              </h6>
              <p>Win Cashback Upto Rs 300*</p>
            </div>
          </div>
          <div className="offer-item">
            <div className="thumb">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/sidebar/offer02.png"
                }
                alt="sidebar"
              />
            </div>
            <div className="content">
              <h6>
                <a href="#0">PayPal Offer</a>
              </h6>
              <p>
                Transact first time with Paypal and get 100% cashback up to Rs.
                500
              </p>
            </div>
          </div>
          <div className="offer-item">
            <div className="thumb">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/sidebar/offer03.png"
                }
                alt="sidebar"
              />
            </div>
            <div className="content">
              <h6>
                <a href="#0">HDFC Bank Offer</a>
              </h6>
              <p>
                Get 15% discount up to INR 100* and INR 50* off on F&amp;B
                T&amp;C apply
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="widget-1 widget-banner">
        <div className="widget-1-body">
          <a href="#0">
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/images/sidebar/banner/banner01.jpg"
              }
              alt="banner"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
