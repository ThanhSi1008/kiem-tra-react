import React, { useState, useEffect } from 'react';
import { FaTimes, FaBell } from 'react-icons/fa';
import '../assets/css/NotificationPopup.css';

const NotificationPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="notification-overlay">
      <div className="notification-popup">
        <div className="notification-header">
          <h3><FaBell /> THÔNG BÁO QUAN TRỌNG</h3>
          <button className="close-btn" onClick={closePopup}>
            <FaTimes />
          </button>
        </div>
        <div className="notification-body">
          <h4>THÔNG BÁO TUYỂN SINH NĂM HỌC 2023-2024</h4>
          <p>
            Trường Đại học Công nghiệp TP.HCM thông báo tuyển sinh đại học chính quy năm học 2023-2024.
            Thời gian nhận hồ sơ từ ngày 01/06/2023 đến ngày 30/07/2023.
          </p>
          <p>
            Các ngành tuyển sinh:
          </p>
          <ul>
            <li>Công nghệ thông tin</li>
            <li>Kỹ thuật phần mềm</li>
            <li>Khoa học máy tính</li>
            <li>Hệ thống thông tin</li>
            <li>An toàn thông tin</li>
            <li>Và nhiều ngành khác...</li>
          </ul>
          <p>
            Để biết thêm chi tiết, vui lòng truy cập mục Tuyển sinh trên website hoặc liên hệ phòng Đào tạo.
          </p>
          <div className="notification-actions">
            <button className="btn btn-primary" onClick={closePopup}>Đã hiểu</button>
            <a href="/tuyen-sinh" className="btn btn-outline-primary">Xem chi tiết</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;
