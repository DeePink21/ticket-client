import React, { Component } from "react";
import ReviewService from "../../../services/ReviewService";
import ReviewItem from "./ReviewItem";
import { Link } from "react-router-dom";
import { compareDesc, parseJSON } from "date-fns";

export default class ReviewSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      numOfReviews: 3,
      content: "",
      // star: 5,
      user: null,
    };
    this.isInputChange = this.isInputChange.bind(this);
  }

  componentDidMount() {
    if (window.sessionStorage.getItem("user")) {
      let user = JSON.parse(window.sessionStorage.getItem("user"));
      console.log(user);
      this.setState({
        user: user,
        // userId: user.id,
        // firstName: user.firstName,
        // lastName: user.lastName,
        // email: user.email,
        // phone: "01223695542",
        // isLogged: true,
      });
    }

    if (this.props.reviews) {
      this.setState({
        reviews: this.props.reviews.slice(0, this.state.numOfReviews),
      });
    }
  }

  showMoreReviews(e, isMore) {
    e.preventDefault();
    if (isMore) {
      this.setState({
        reviews: this.props.reviews.slice(0, this.state.numOfReviews + 5),
        numOfReviews: this.state.numOfReviews + 5,
      });
    } else {
      this.setState({
        reviews: this.props.reviews.slice(0, 1),
        numOfReviews: 1,
      });
    }
  }

  mappingData() {
    if (this.state.reviews) {
      let reviewList = this.state.reviews.map((review, i) => {
        return <ReviewItem key={i} review={review} />;
      });
      return reviewList;
    }
  }

  goLogin(e) {
    e.preventDefault();
  }

  renderReviewForm() {
    if (this.state.user === null)
      return (
        <Link to={"/login?action=movie-detail/" + this.props.movieId}>
          <h3>Đăng nhập để review</h3>
        </Link>
      );
    else
      return (
        <div className="leave-comment">
          <h3 className="title">Đánh giá của bạn</h3>
          <form className="blog-form">
            <div className="form-group">
              <input
                type="number"
                min="1"
                max="5"
                placeholder="Điểm số 1-5"
                value={this.state.star}
                onChange={(e) => this.isInputChange(e)}
                name="star"
                id="star"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                placeholder="Nội dung "
                value={this.state.content}
                onChange={(e) => this.isInputChange(e)}
                name="content"
                id="content"
                required
                defaultValue={""}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                onClick={(e) => this.postReview(e)}
                value="Gửi"
                className="custom-button"
              />
            </div>
          </form>
        </div>
      );
  }

  postReview(e) {
    e.preventDefault();
    let d = new Date().toJSON().replace("T", " ");
    d = d.slice(0, d.length - 5);
    console.log(d);
    let review = {
      content: this.state.content,
      star: parseInt(this.state.star),
      createdBy: this.state.user.firstName + " " + this.state.user.lastName,
      createdAt: d,
    };
    ReviewService.postReview(review).then((res) => {
      // let temp = [...this.state.reviews, review];
      // temp = temp.sort(compareDesc)
      this.setState({
        reviews: [...this.state.reviews, review],
      });
    });
  }

  isShowMore() {
    // console.log(this.state.numOfReviews);
    // console.log(this.props.reviews.length);
    if (this.props.reviews)
      if (this.state.numOfReviews < this.props.reviews.length)
        return (
          <div>
            <div className="load-more text-center">
              <a
                href="#0"
                onClick={(e) => this.showMoreReviews(e, true)}
                className="custom-button transparent"
              >
                xem thêm
              </a>
            </div>
            <div className="load-more text-center">
              {this.renderReviewForm()}
            </div>
          </div>
        );
      else {
        return (
          <div className="load-more text-center">
            <a
              href="#0"
              onClick={(e) => this.showMoreReviews(e, false)}
              className="custom-button transparent"
            >
              ẩn bớt
            </a>
          </div>
        );
      }
  }

  isInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });

    console.log(this.state);
  };

  render() {
    console.log(this.state.user);
    return (
      <div className="tab-area">
        <div className="tab-item active">
          {this.mappingData()}
          {this.isShowMore()}
        </div>
      </div>
    );
  }
}
