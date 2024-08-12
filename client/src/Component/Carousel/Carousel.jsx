import React, { useState } from 'react';
import './Carousel.css'; // Add your CSS file for styling

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        <button onClick={goToPrevious} className="left-arrow">&#10094;</button>
        <div
          className="carousel-slide"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        ></div>
        <button onClick={goToNext} className="right-arrow">&#10095;</button>
      </div>
      <div className="carousel-indicators">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={index === currentIndex ? 'active' : ''}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
