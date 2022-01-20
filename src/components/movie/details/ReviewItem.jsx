import React, { Component } from "react";
import { formatWithOptions } from "date-fns/fp";
import { vi } from "date-fns/locale";
import { parseJSON, formatDistance } from "date-fns";

export default class ReviewItem extends Component {
  getStars() {
    return Array(this.props.review.star).fill(
      <i className="flaticon-favorite-heart-button" />
    );
  }

  getDate = (date) => {
    if (date) return this.dateToString(parseJSON(date));
  };

  getDate2 = (date) => {
    return formatDistance(parseJSON(date), new Date(), {
      addSuffix: true,
      locale: vi,
    });
  };

  dateToString = formatWithOptions({ locale: vi }, "dd-MM-yyyy");

  render() {
    return (
      <div className="movie-review-item">
        <div className="author">
          <div className="thumb">
            <a href="#0">
              <img src="/assets/images/cast/cast02.jpg" alt="cast" />
            </a>
          </div>
          <div className="movie-review-info">
            <span className="reply-date">
              {this.getDate2(this.props.review.createdAt)}
            </span>
            <h6 className="subtitle">
              <a href="#0">{this.props.review.createdBy}</a>
            </h6>
            {/* <span>
                  <i className="fas fa-check" /> verified review
                </span> */}
          </div>
        </div>
        <div className="movie-review-content">
          <div className="review">{this.getStars()}</div>
          {/* <h6 className="cont-title">{this.props.review.title}</h6> */}
          <p>{this.props.review.content}</p>
          <div className="review-meta">
            <a href="#0">
              <i className="flaticon-hand" />
              <span>{this.props.review.upvote}</span>
            </a>
            {/* <a href="#0" className="dislike">
              <i className="flaticon-dont-like-symbol" />
              <span>0</span>
            </a> */}
            {/* <a href="#0">Report Abuse</a> */}
          </div>
        </div>
      </div>
    );
  }
}
