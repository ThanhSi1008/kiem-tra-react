import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/News.css';

const News = () => {
  // Sample news data
  const newsItems = [
    {
      id: 1,
      title: 'Thông báo tuyển sinh năm học 2023-2024',
      date: '15/06/2023',
      image: 'https://via.placeholder.com/300x200',
      excerpt: 'Trường Đại học Công nghiệp TP.HCM thông báo tuyển sinh đại học chính quy năm học 2023-2024...'
    },
    {
      id: 2,
      title: 'Hội nghị khoa học công nghệ lần thứ 5',
      date: '10/06/2023',
      image: 'https://via.placeholder.com/300x200',
      excerpt: 'Hội nghị khoa học công nghệ lần thứ 5 được tổ chức tại Trường Đại học Công nghiệp TP.HCM...'
    },
    {
      id: 3,
      title: 'Lễ ký kết hợp tác với doanh nghiệp',
      date: '05/06/2023',
      image: 'https://via.placeholder.com/300x200',
      excerpt: 'Trường Đại học Công nghiệp TP.HCM đã ký kết hợp tác với các doanh nghiệp lớn trong lĩnh vực công nghệ...'
    }
  ];

  return (
    <section className="news-section">
      <div className="container">
        <div className="section-title">
          <h2>TIN TỨC - SỰ KIỆN</h2>
        </div>
        
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
                  <Link to={`/tin-tuc/${item.id}`} className="read-more">Xem thêm</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all">
          <Link to="/tin-tuc" className="btn btn-primary">Xem tất cả</Link>
        </div>
      </div>
    </section>
  );
};

export default News;
