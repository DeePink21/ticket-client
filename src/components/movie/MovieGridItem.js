import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/vi";

export default class MovieGridItem extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.movie);
  }

  to_slug = (str) => {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
    str = str.replace(/(đ)/g, "d");

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, "");

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, "-");

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, "");

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, "");

    // return
    return str;
  };

  getDate2 = () => {
    let time = this.props.movie.releasedDate;
    // return time.getDate() + "/" + time.getMonth() + 1 + "/" + time.getFullYear();
    return moment(time, "YYYY-MM-DD").calendar();
  };

  getDuration() {
    let mins = this.props.movie.durationMin;
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    // h = h < 2 ? h + " hr" : h + " hrs";
    return `${h} giờ ${m} phút`;
  }

  render() {
    return (
      <div className="col-sm-6 col-lg-4">
        <div className="movie-grid">
          <div className="movie-thumb c-thumb">
            <Link
              to={
                "movie-detail/" +
                this.props.movie.id +
                "/" +
                this.to_slug(this.props.movie.name)
              }
            >
              <img
                // src="/assets/images/movie/movie01.jpg"
                src={
                  // process.env.PUBLIC_URL +
                  // "/assets/images/movie/" +
                  this.props.movie.thumbnail
                }
                alt="movie"
              />
            </Link>
          </div>
          <div className="movie-content bg-one">
            <h5 className="title m-0">
              <Link
                to={
                  "movie-detail/" +
                  this.props.movie.id +
                  "/" +
                  this.to_slug(this.props.movie.name)
                }
              >
                {this.props.movie.name}
              </Link>
            </h5>

            <ul className="movie-rating-percent">
              <li className="movie-tags">
                <a href="#0">{"Thời lượng : " + this.getDuration()}</a>
              </li>
              <li className="movie-tags">
                <a href="#0">{"Thể loại : " + this.props.movie.genre}</a>
              </li>
              <li className="release">
                {/* <div className="thumb">
                  <img src="/assets/images/movie/cake.png" alt="movie" />
                </div> */}

                <span>Khởi chiếu : &nbsp;</span>
                <a href="#0"> {this.getDate2()}</a>

                {/* <span className="content">{this.getDate2()}</span> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
