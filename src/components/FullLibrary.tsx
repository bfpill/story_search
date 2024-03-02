import React from "react";
import "./FullLibrary.css";
import image1 from '../assets/book_covers/img1.jpg';
import image3 from '../assets/book_covers/img3.jpg';

import image5 from '../assets/book_covers/img5.jpg';
import image6 from '../assets/book_covers/img6.jpg';


function FullLibrary() {
  // Array of image URLs
  const images = [image1, image3,image5,image6]
    
  ;

  // Function to generate a random image URL
  const getRandomImage = () => {
    return images[Math.floor(Math.random() * images.length)];
  };

  return (
    <div className="full-page">
      <div className="my-library">Full Library</div>
      <div className="full-body">
      <div className="type-book">scifi</div>
        <div className="row">
        <img src={getRandomImage()} alt="Image 1" />
          <img src={getRandomImage()} alt="Image 2" />
          <img src={getRandomImage()} alt="Image 3" />
          <img src={getRandomImage()} alt="Image 4" />
          <img src={getRandomImage()} alt="Image 1" />
          
         
        </div>
        <div className="type-book">VV good Stuff</div>
        <div className="row">
        <img src={getRandomImage()} alt="Image 1" />
          <img src={getRandomImage()} alt="Image 2" />
          <img src={getRandomImage()} alt="Image 3" />
          <img src={getRandomImage()} alt="Image 4" />
          <img src={getRandomImage()} alt="Image 5" />
          
         
        </div>
        <div className="type-book">nice stuff</div>
        <div className="row">
        <img src={getRandomImage()} alt="Image 1" />
          
          <img src={getRandomImage()} alt="Image 4" />
          <img src={getRandomImage()} alt="Image 9" />
          <img src={getRandomImage()} alt="Image 10" />
          <img src={getRandomImage()} alt="Image 11" />
         
        </div>
      </div>
    </div>
  );
}

export default FullLibrary;