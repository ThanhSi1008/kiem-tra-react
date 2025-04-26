import React from 'react';
import '../assets/css/Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="banner-item" style={{ backgroundColor: '#0066b3' }}>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="banner-content">
                      <h2>TRƯỜNG ĐẠI HỌC CÔNG NGHIỆP TP.HCM</h2>
                      <p>Đào tạo nguồn nhân lực chất lượng cao</p>
                      <button className="btn btn-light">Tìm hiểu thêm</button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="banner-image">
                      {/* Placeholder for banner image */}
                      <div className="placeholder-image" style={{ backgroundColor: '#0055a5', height: '300px' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="banner-item" style={{ backgroundColor: '#00a651' }}>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="banner-content">
                      <h2>NGHIÊN CỨU KHOA HỌC</h2>
                      <p>Phát triển nghiên cứu và ứng dụng</p>
                      <button className="btn btn-light">Tìm hiểu thêm</button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="banner-image">
                      {/* Placeholder for banner image */}
                      <div className="placeholder-image" style={{ backgroundColor: '#009148', height: '300px' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="banner-item" style={{ backgroundColor: '#f7941d' }}>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="banner-content">
                      <h2>HỢP TÁC QUỐC TẾ</h2>
                      <p>Mở rộng cơ hội hợp tác toàn cầu</p>
                      <button className="btn btn-light">Tìm hiểu thêm</button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="banner-image">
                      {/* Placeholder for banner image */}
                      <div className="placeholder-image" style={{ backgroundColor: '#e58a1b', height: '300px' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
