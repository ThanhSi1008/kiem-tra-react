import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCalendarAlt, FaRegNewspaper, FaGraduationCap, FaUniversity, FaGlobe, FaUsers } from 'react-icons/fa';
import '../assets/css/HomeContent.css';

const HomeContent = () => {
  // Sample news data
  const newsItems = [
    {
      id: 1,
      title: 'Thông báo tuyển sinh năm học 2023-2024',
      date: '15/06/2023',
      image: '/images/news/news1.jpg',
      excerpt: 'Trường Đại học Công nghiệp TP.HCM thông báo tuyển sinh đại học chính quy năm học 2023-2024...'
    },
    {
      id: 2,
      title: 'Hội nghị khoa học công nghệ lần thứ 5',
      date: '10/06/2023',
      image: '/images/news/news2.jpg',
      excerpt: 'Hội nghị khoa học công nghệ lần thứ 5 được tổ chức tại Trường Đại học Công nghiệp TP.HCM...'
    },
    {
      id: 3,
      title: 'Lễ ký kết hợp tác với doanh nghiệp',
      date: '05/06/2023',
      image: '/images/news/news3.jpg',
      excerpt: 'Trường Đại học Công nghiệp TP.HCM đã ký kết hợp tác với các doanh nghiệp lớn trong lĩnh vực công nghệ...'
    }
  ];

  // Sample events data
  const eventItems = [
    {
      id: 1,
      title: 'Lễ tốt nghiệp sinh viên khóa 2019-2023',
      date: '20/06/2023',
      location: 'Hội trường A, Cơ sở chính'
    },
    {
      id: 2,
      title: 'Hội thảo hướng nghiệp cho sinh viên năm cuối',
      date: '25/06/2023',
      location: 'Hội trường B, Cơ sở chính'
    },
    {
      id: 3,
      title: 'Cuộc thi Ý tưởng sáng tạo sinh viên',
      date: '30/06/2023',
      location: 'Sân vận động, Cơ sở chính'
    }
  ];

  // Quick links data
  const quickLinks = [
    { id: 1, title: 'TUYỂN SINH', icon: <FaGraduationCap />, url: '/tuyen-sinh', color: '#0066b3' },
    { id: 2, title: 'ĐÀO TẠO', icon: <FaUniversity />, url: '/dao-tao', color: '#00a651' },
    { id: 3, title: 'HỢP TÁC QUỐC TẾ', icon: <FaGlobe />, url: '/hop-tac', color: '#f7941d' },
    { id: 4, title: 'SINH VIÊN', icon: <FaUsers />, url: '/sinh-vien', color: '#ed1c24' }
  ];

  return (
    <div className="home-content">
      {/* Banner Slider */}
      <section className="banner-section">
        <div id="carouselBanner" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselBanner" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselBanner" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselBanner" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/images/banners/banner1.jpg" className="d-block w-100" alt="Banner 1" />
            </div>
            <div className="carousel-item">
              <img src="/images/banners/banner2.jpg" className="d-block w-100" alt="Banner 2" />
            </div>
            <div className="carousel-item">
              <img src="/images/banners/banner3.jpg" className="d-block w-100" alt="Banner 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselBanner" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselBanner" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links-section">
        <div className="container">
          <div className="row">
            {quickLinks.map(link => (
              <div className="col-md-3 col-sm-6" key={link.id}>
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

      {/* Main Content Area */}
      <section className="main-content-section">
        <div className="container">
          <div className="row">
            {/* News Section */}
            <div className="col-lg-8">
              <div className="content-box news-box">
                <div className="content-header">
                  <h2><FaRegNewspaper /> TIN TỨC - SỰ KIỆN</h2>
                  <Link to="/tin-tuc" className="view-all">Xem tất cả <FaArrowRight /></Link>
                </div>
                <div className="content-body">
                  <div className="row">
                    {newsItems.map(item => (
                      <div className="col-md-4" key={item.id}>
                        <div className="news-item">
                          <div className="news-image">
                            <img src={item.image} alt={item.title} />
                            <div className="news-date">{item.date}</div>
                          </div>
                          <div className="news-content">
                            <h3><Link to={`/tin-tuc/${item.id}`}>{item.title}</Link></h3>
                            <p>{item.excerpt}</p>
                            <Link to={`/tin-tuc/${item.id}`} className="read-more">Xem thêm <FaArrowRight /></Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              {/* Events Calendar */}
              <div className="content-box events-box">
                <div className="content-header">
                  <h2><FaCalendarAlt /> SỰ KIỆN</h2>
                  <Link to="/su-kien" className="view-all">Xem tất cả <FaArrowRight /></Link>
                </div>
                <div className="content-body">
                  <ul className="event-list">
                    {eventItems.map(event => (
                      <li key={event.id} className="event-item">
                        <div className="event-date">
                          <span className="day">{event.date.split('/')[0]}</span>
                          <span className="month">{event.date.split('/')[1]}</span>
                        </div>
                        <div className="event-details">
                          <h3><Link to={`/su-kien/${event.id}`}>{event.title}</Link></h3>
                          <p><strong>Thời gian:</strong> {event.date}</p>
                          <p><strong>Địa điểm:</strong> {event.location}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Video Section */}
              <div className="content-box video-box">
                <div className="content-header">
                  <h2>VIDEO</h2>
                </div>
                <div className="content-body">
                  <div className="video-container">
                    <iframe 
                      width="100%" 
                      height="215" 
                      src="https://www.youtube.com/embed/videoseries?list=PLx5xS4zUMUy5pEoI0KmfJgRLzOJXlNmXz" 
                      title="IUH Videos" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen>
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
