import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';
import '../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-info">
              <h3>TRƯỜNG ĐẠI HỌC CÔNG NGHIỆP TP.HCM</h3>
              <p><FaMapMarkerAlt /> Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, TP.HCM</p>
              <p><FaPhone /> Điện thoại: (028) 38940390</p>
              <p><FaEnvelope /> Email: dhcn@iuh.edu.vn</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-links">
              <h3>LIÊN KẾT NHANH</h3>
              <ul>
                <li><Link to="/gioi-thieu">Giới thiệu</Link></li>
                <li><Link to="/dao-tao">Đào tạo</Link></li>
                <li><Link to="/nghien-cuu">Nghiên cứu</Link></li>
                <li><Link to="/hop-tac">Hợp tác</Link></li>
                <li><Link to="/tuyen-sinh">Tuyển sinh</Link></li>
                <li><Link to="/sinh-vien">Sinh viên</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-social">
              <h3>KẾT NỐI VỚI CHÚNG TÔI</h3>
              <div className="social-icons">
                <a href="https://www.facebook.com/iuh.edu.vn" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://www.youtube.com/c/TruongDaihocCongNghiepTPHCM" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              </div>
              <div className="footer-stats">
                <p>Lượt truy cập: 12,345,678</p>
                <p>Đang online: 1,234</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© 2023 Trường Đại học Công nghiệp TP.HCM. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
