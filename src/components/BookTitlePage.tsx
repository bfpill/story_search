
import React, { useState, useEffect } from 'react';
import image1 from '../assets/book_covers/img1.jpg';
import image3 from '../assets/book_covers/img3.jpg';

import image5 from '../assets/book_covers/img5.jpg';
import image6 from '../assets/book_covers/img6.jpg';

const BookTitlePage = (props: { complementaryColor, page }) => {
  const [coverImage, setCoverImage] = useState('');
  const [overlayColor, setOverlayColor] = useState('');
  const [textVisible, setTextVisible] = useState(false);
  

  useEffect(() => {
    const images = [image1, image3, image5, image6];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setCoverImage(randomImage);

    const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`;
    setOverlayColor(randomColor);
  }, []);

  useEffect(() => {
    if(props.page.text !== "") { 
      setTextVisible(true)
    }
  }, [props.page.text]);

  return (
    <div className="h-full w-full image-cover px-8 pt-6 pb-8 flex items-center justify-center bookcover relative overflow-hidden shadow-xl">
      <img src={coverImage} alt="Book Cover" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="absolute top-0 left-0 w-full h-full z-10" style={{ backgroundColor: overlayColor }}></div>
      <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className={`transition-opacity duration-2000 font-bold bold leading-10`}
        style={{"opacity": textVisible ? 1 : 0, "color": "white"}}>
          {props.page.text}
        </div>
      </div>
    </div>
  );
};

export default BookTitlePage;
