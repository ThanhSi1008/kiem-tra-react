import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaBook, FaGlobe, FaUsers, FaCalendarAlt, FaNewspaper } from 'react-icons/fa';
import '../assets/css/QuickLinks.css';

const QuickLinks = () => {
  const links = [
    { id: 1, title: 'Tuyển sinh', icon: <FaGraduationCap />, url: '/tuyen-sinh', color: '#0066b3' },
    { id: 2, title: 'Đào tạo', icon: <FaBook />, url: '/dao-tao', color: '#00a651' },
    { id: 3, title: 'Hợp tác quốc tế', icon: <FaGlobe />, url: '/hop-tac', color: '#f7941d' },
    { id: 4, title: 'Sinh viên', icon: <FaUsers />, url: '/sinh-vien', color: '#ed1c24' },
    { id: 5, title: 'Lịch công tác', icon: <FaCalendarAlt />, url: '/lich-cong-tac', color: '#662d91' },
    { id: 6, title: 'Tin tức', icon: <FaNewspaper />, url: '/tin-tuc', color: '#2e3192' }
  ];

  return (
    <section className="quick-links">
      <div className="container">
        <div className="row">
          {links.map(link => (
            <div className="col-md-2 col-sm-4 col-6" key={link.id}>
              <Link to={link.url} className="quick-link-item" style={{ backgroundColor: link.color }}>
                <div className="quick-link-icon">
                  {link.icon}
                </div>
                <div className="quick-link-title">
                  {link.title}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
