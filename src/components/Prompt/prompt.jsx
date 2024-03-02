import React, { useState } from 'react';
import './prompt.css';
import bookImage from '../../assets/book.png';
import searchIcon from '../../assets/search-icon.jpg';
import blueBookImage from '../../assets/blueBook.png'; // Import the bluebook.png image

function Prompt() {
  const [showImages, setShowImages] = useState(false);
  const [inputEntered, setInputEntered] = useState(false);
  const [showGenerateButton, setShowGenerateButton] = useState(true);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setShowImages(true);
      setInputEntered(true);
      setShowGenerateButton(false);
    }
  };

  const handleGenerate = () => {
    setShowImages(true);
    setInputEntered(true);
    setShowGenerateButton(false);
  };

  return (
    <div className="blue-page">
      <div className="blue-bar"> {/* Add the blue-bar container here */}
        <img src={blueBookImage} alt="Blue Book" className="blue-book-image" />
        <div className={`search-bar ${showImages ? 'move-to-top' : ''}`}>
          <div className="search-container">
            {inputEntered && <img src={searchIcon} alt="Search Icon" className="search-icon" />}
            <input
              type="text"
              placeholder="Type in a prompt to generate..."
              className={`search-input ${inputEntered ? 'shrink' : ''}`}
              onKeyPress={handleKeyPress}
            />
            {showGenerateButton && (
              <button className="generate-button" onClick={handleGenerate}>Generate</button>
            )}
          </div>
        </div>
      </div>
      {showImages && (
        <div className="image-container">
          <img src={bookImage} alt="Book" className="book-image" />
          <img src={bookImage} alt="Book" className="book-image" />
          <img src={bookImage} alt="Book" className="book-image" />
        </div>
      )}
    </div>
  );
}

export default Prompt;
