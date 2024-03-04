import React from 'react';
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => {
  const images = [
    // Replace these with your actual image paths and descriptions
    { src: './images/office_layout.png', alt: 'Office Layout' },
    { src: './images/Path.png', alt: 'Path of Learning' },
    { src: './images/HTML.png', alt: 'HTML Example' },
  ];

  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6">
    <Carousel id="carouselExampleAutoplaying" className="carousel slide carousel-height" data-bs-ride="carousel">
      {images.map((image, idx) => (
        <Carousel.Item key={idx} className="carousel-item">
          <img src={image.src} className="d-block w-100" alt={image.alt} />
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
    </div>
    </div>
  );
};

export default MyCarousel;
