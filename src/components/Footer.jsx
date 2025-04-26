import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaYoutube, FaTwitter, FaGlobe, FaAngleRight } from 'react-icons/fa';
import '../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-info">
                <div className="footer-logo">
                  <img src="/images/iuh-logo.png" alt="IUH Logo" />
                </div>
                <h4>TRƯỜNG ĐẠI HỌC CÔNG NGHIỆP TP.HCM</h4>
                <p><FaMapMarkerAlt /> Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, TP.HCM</p>
                <p><FaPhone /> Điện thoại: (028) 38940390</p>
                <p><FaEnvelope /> Email: dhcn@iuh.edu.vn</p>
                <p><FaGlobe /> Website: iuh.edu.vn</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="footer-links">
                <h4>LIÊN KẾT</h4>
                <ul>
                  <li><FaAngleRight /><Link to="/gioi-thieu">Giới thiệu</Link></li>
                  <li><FaAngleRight /><Link to="/dao-tao">Đào tạo</Link></li>
                  <li><FaAngleRight /><Link to="/nghien-cuu">Nghiên cứu</Link></li>
                  <li><FaAngleRight /><Link to="/hop-tac">Hợp tác</Link></li>
                  <li><FaAngleRight /><Link to="/tuyen-sinh">Tuyển sinh</Link></li>
                  <li><FaAngleRight /><Link to="/sinh-vien">Sinh viên</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-links">
                <h4>DÀNH CHO</h4>
                <ul>
                  <li><FaAngleRight /><Link to="/sinh-vien">Sinh viên</Link></li>
                  <li><FaAngleRight /><Link to="/giang-vien">Giảng viên</Link></li>
                  <li><FaAngleRight /><Link to="/nha-tuyen-dung">Nhà tuyển dụng</Link></li>
                  <li><FaAngleRight /><Link to="/cuu-sinh-vien">Cựu sinh viên</Link></li>
                  <li><FaAngleRight /><Link to="/doi-tac">Đối tác</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-social">
                <h4>KẾT NỐI VỚI CHÚNG TÔI</h4>
                <div className="social-icons">
                  <a href="https://www.facebook.com/iuh.edu.vn" target="_blank" rel="noopener noreferrer" className="facebook"><FaFacebookF /></a>
                  <a href="https://www.youtube.com/c/TruongDaihocCongNghiepTPHCM" target="_blank" rel="noopener noreferrer" className="youtube"><FaYoutube /></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="twitter"><FaTwitter /></a>
                </div>
                <div className="footer-stats">
                  <p>Lượt truy cập: 12,345,678</p>
                  <p>Đang online: 1,234</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            <p>© 2023 Trường Đại học Công nghiệp TP.HCM. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
