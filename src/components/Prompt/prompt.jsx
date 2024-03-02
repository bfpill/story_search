import React from 'react';
import './prompt.css';
import bookImage from '../../assets/book.png';
import searchIcon from '../../assets/search-icon.jpg';

function Prompt() {
  return (
    <div className="blue-page">
      <div className="search-bar">
        <div className="search-container">
          <img src={searchIcon} alt="Search Icon" className="search-icon" />
          <input type="text" placeholder="Type in a prompt to generate..." className="search-input" />
        </div>
      </div>
      <div className="image-container">
        <img src={bookImage} alt="Book" className="book-image" />
        <img src={bookImage} alt="Book" className="book-image" />
        <img src={bookImage} alt="Book" className="book-image" />
      </div>
    </div>
  );
}

export default Prompt;
