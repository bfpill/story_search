import * as React from "react"; // Updated import syntax
import "./FullLibrary.css";
import image1 from '../assets/book_covers/img1.jpg';
import image3 from '../assets/book_covers/img3.jpg';
import image5 from '../assets/book_covers/img5.jpg';
import image6 from '../assets/book_covers/img6.jpg';

function FullLibrary() {
  // Array of image URLs
  const images = [image1, image3, image5, image6];

  // Function to generate a random image URL
  const getRandomImage = () => {
    return images[Math.floor(Math.random() * images.length)];
  };

  return (
    <div className="full-page">
      <div className="my-library">Full Library</div> {/* Moved my-library here */}
       <div className="blue-container"></div> {/* Added blue-container */}
        <div className="full-body">
        <div className="type-another-book">AI   🤖</div>
        <div className="scroll-wrapper white-container"> {/* Updated class name */}
          <div className="row horizontal-scroll" style={{ paddingLeft: '10px', paddingRight: '10px' }}>
            {Array.from({ length: 10 }).map((_, index) => (
              <img key={index} src={getRandomImage()} alt={`Image ${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="type-another-book">Sci-fi   🚀</div>
        <div className="scroll-wrapper white-container"> {/* Updated class name */}
          <div className="row horizontal-scroll" style={{ paddingLeft: '10px', paddingRight: '10px' }}>
            {Array.from({ length: 10 }).map((_, index) => (
              <img key={index} src={getRandomImage()} alt={`Image ${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="type-another-book">Adventure   ⛰️</div>
        <div className="scroll-wrapper white-container"> {/* Updated class name */}
          <div className="row horizontal-scroll" style={{ paddingLeft: '10px', paddingRight: '10px' }}>
            {Array.from({ length: 10 }).map((_, index) => (
              <img key={index} src={getRandomImage()} alt={`Image ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullLibrary;