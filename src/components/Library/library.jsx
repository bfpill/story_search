import React from "react";
import { useNavigate } from "react-router-dom";
import "./library.css"; // Import CSS file for styling

import bookImage from '../../assets/book.png';
import { useState } from 'react';



function Library() {
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(-1);
    };

    return (
        <div className="full-page">
            <div className="library-container">
                <div className="my-library">My Library</div>
            </div>
            <div className="image-containers">
              
                {[...Array(6).keys()].map(index => (
                    <img
                        key={index}
                        src={bookImage}
                        alt="Book"
                        className="book-images"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        style={{ opacity: hoveredIndex === index ? 1.1   : 0.8 }}
                    />
                ))}
            </div>
            <div className="create-story">
                <div className="inside-create-story">Create a new Story</div>
            </div>
        </div>
    );
}

export default Library;

 