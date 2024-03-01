import React from 'react';
import './PROMPT.css';
import bookImage from '/Users/cher/Desktop/story_search/src/assets/book.png'; // Import the image

function Prompt() {
  return (
    <div className="blue-page">
      <div className="image-container">
        <img src={bookImage} alt="Book" className="book-image" />
        <img src={bookImage} alt="Book" className="book-image" />
        <img src={bookImage} alt="Book" className="book-image" />
      </div>
    </div>
  );
}

export default Prompt;


