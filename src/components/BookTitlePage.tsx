import React, { useState, useEffect } from 'react';
import { getRandomColor, getRandomCover } from '@/lib/utils';

const BookTitlePage = (props) => {
  const [selectedCoverImage, setSelectedCoverImage] = useState(props.coverImage ?? getRandomCover());
  const [overlayColor, setOverlayColor] = useState(props.coverColor ?? getRandomColor());
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    if (props.page.text) {
      setTextVisible(true);
    }
  }, [props.page.text]);

  const handleCoverClick = () => {
    if (selectedCoverImage && overlayColor) {
      props.handleBookClick(props.page.text, selectedCoverImage, overlayColor);
    }
  };

  return (
    <div className="h-full w-full relative overflow-hidden shadow-xl cursor-pointer" onClick={() => handleCoverClick()}>
      <img src={selectedCoverImage} alt="Book Cover" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="absolute top-0 left-0 w-full h-full z-10" style={{ backgroundColor: overlayColor }}></div>
      <div className="text-center absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
      <div className={`transition-opacity duration-2000 text-3xl font-bold`} style={{ "opacity": textVisible ? 0.7 : 0, "color": "white", "textShadow": "0 0 4px rgba(0, 0, 0, 0.8)" }}>
          {props.page.text}
        </div>
      </div>
    </div>
  );
};

export default BookTitlePage;
