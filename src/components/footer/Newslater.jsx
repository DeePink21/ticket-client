import React from 'react';

class Newslater extends React.Component {
  render() {
    return (
      <div>
        <div className="newslater-section padding-bottom">
          <div className="container">
            <div
              className="newslater-container bg_img"
              style={{ backgroundImage: `url("${"/assets/images/newslater/newslater-bg01.jpg"}")` }}
              data-background="/assets/images/newslater/newslater-bg01.jpg"
            >
              <div className="newslater-wrapper">
                <h5 className="cate">Đăng ký Boleto </h5>
                <h3 className="title">để nhận thông báo về sự kiện và chương trình khuyến mãi.</h3>
                <form className="newslater-form">
                  <input type="text" placeholder="Điền email của bạn" />
                  <button type="submit">Đăng ký</button>
                </form>
                <p>Chúng tôi sẽ không chia sẻ thông tin cá nhân của bạn.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Newslater;
