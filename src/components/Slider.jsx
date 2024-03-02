import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Library() {
    const [randomImages, setRandomImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const fetchRandomImages = async () => {
            try {
                const response = await axios.get('https://api.unsplash.com/photos/random?count=5&client_id=KC45Q-9A9K7m5n5QagKBiZ4C8OqZ6xDJgx71eoRbrfM');
                setRandomImages(response.data);
            } catch (error) {
                console.error('Error fetching random images:', error);
            }
        };

        fetchRandomImages();
    }, []);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === randomImages.length - 1 ? 0 : prevSlide + 1));
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? randomImages.length - 1 : prevSlide - 1));
    };

    return (
        <div className="library-container">
            <div className="random-images">
                {randomImages.map((image, index) => (
                    <div key={image.id} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                        <img src={image.urls.regular} alt="Random" className="slide-image" />
                    </div>
                ))}
            </div>
            <button className="slider-btn prev" onClick={handlePrevSlide}>
                Previous
            </button>
            <button className="slider-btn next" onClick={handleNextSlide}>
                Next
            </button>
            <div className="create-story">Create Story</div>
        </div>
    );
}

export default Library;
