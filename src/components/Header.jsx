import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaGlobe } from 'react-icons/fa';
import '../assets/css/Header.css';
import iuhLogo from '../assets/images/iuh-logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="language-selector">
                <FaGlobe className="globe-icon" />
                <select>
                  <option value="vi">Tiếng Việt</option>
                  <option value="en">English</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="search-box">
                <input type="text" placeholder="Tìm kiếm..." />
                <button><FaSearch /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="main-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div className="logo">
                <Link to="/">
                  <img src={iuhLogo} alt="IUH Logo" />
                </Link>
              </div>
            </div>
            <div className="col-md-9">
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
