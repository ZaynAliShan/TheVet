import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ReviewSection.css';

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      avatar: '../assets/img/Reviews/avatar-1.jpg',
      name: 'Monica Bing',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod semper neque, a suscipit ipsum pellentesque eget.',
      stars: 5,
    },
    {
      id: 2,
      avatar: '../assets/img/Reviews/avatar-2.jpg',
      name: 'Jane Smith',
      text: 'Nulla facilisi. Nunc a faucibus ante, et dignissim urna. Curabitur et massa orci. In hac habitasse platea dictumst.',
      stars: 4,
    },
    {
      id: 3,
      avatar: '../assets/img/Reviews/avatar-3.jpg',
      name: 'David Williams',
      text: 'Cras nec nisi a nisl lobortis egestas at vitae mi. Mauris tristique euismod nulla, in sollicitudin risus mattis et.',
      stars: 3,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="review-section">
      <h2 style={{fontWeight:"bold", fontSize:"30px", paddingBottom:"25px"}}>Testimonials</h2>
      <Slider {...settings}>
        {reviews.map(review => (
          <div key={review.id}>
            <div className="review">
              <div className="avatar">
                <img src={review.avatar} alt="Avatar" />
              </div>
              <div className="review-content">
                <p className="review-name">{review.name}</p>
                <p className="review-text">{review.text}</p>
                <div className="review-stars">
                  {Array.from(Array(review.stars), (_, index) => (
                    <span key={index} className="star">&#9733;</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSection;
