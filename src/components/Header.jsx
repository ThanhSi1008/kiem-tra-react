import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaGlobe, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../assets/css/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="contact-info">
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <span>(028) 38940390</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>dhcn@iuh.edu.vn</span>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>Số 12 Nguyễn Văn Bảo, P.4, Q.Gò Vấp, TP.HCM</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="top-right">
                <div className="language-selector">
                  <FaGlobe className="globe-icon" />
                  <select>
                    <option value="vi">Tiếng Việt</option>
                    <option value="en">English</option>
                  </select>
                </div>
                <div className="search-box">
                  <input type="text" placeholder="Tìm kiếm..." />
                  <button><FaSearch /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="logo-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-2">
              <div className="logo">
                <Link to="/">
                  <img src="/images/iuh-logo.png" alt="IUH Logo" />
                </Link>
              </div>
            </div>
            <div className="col-md-10">
              <div className="university-name">
                <div className="ministry">BỘ CÔNG THƯƠNG</div>
                <div className="school-name">TRƯỜNG ĐẠI HỌC CÔNG NGHIỆP THÀNH PHỐ HỒ CHÍ MINH</div>
                <div className="slogan">Đổi mới tư duy, làm giàu thêm tri thức - đời sống</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <ul>
                  <li><Link to="/">TRANG CHỦ</Link></li>
                  <li><Link to="/gioi-thieu">GIỚI THIỆU</Link></li>
                  <li><Link to="/dao-tao">ĐÀO TẠO</Link></li>
                  <li><Link to="/nghien-cuu">NGHIÊN CỨU</Link></li>
                  <li><Link to="/hop-tac">HỢP TÁC</Link></li>
                  <li><Link to="/tuyen-sinh">TUYỂN SINH</Link></li>
                  <li><Link to="/sinh-vien">SINH VIÊN</Link></li>
                  <li><Link to="/tin-tuc">TIN TỨC</Link></li>
                  <li className="dropdown">
                    <Link to="/co-cau-to-chuc">CƠ CẤU TỔ CHỨC</Link>
                    <div className="dropdown-content">
                      <Link to="/co-cau-to-chuc/ban-giam-hieu">Ban Giám Hiệu</Link>
                      <Link to="/co-cau-to-chuc/hoi-dong-truong">Hội Đồng Trường</Link>
                      <Link to="/co-cau-to-chuc/phong-ban">Phòng Ban</Link>
                      <Link to="/co-cau-to-chuc/khoa">Khoa</Link>
                      <Link to="/co-cau-to-chuc/trung-tam">Trung Tâm</Link>
                      <Link to="/co-cau-to-chuc/vien">Viện</Link>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
