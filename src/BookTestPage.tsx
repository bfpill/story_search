import { useContext, useEffect, useState } from "react"
import { Button } from "./components/ui/button";
import Book from "./components/Book";
import { HomeBar } from "./components/NavBar";
import "./components/BookTestPage.css"
import squiggleImage from './assets/squiggle.png';
import starImage from './assets/star.png';
import triangleImage from './assets/triangle.png';
import swirlyImage from './assets/swirly.png';
import { useParams } from "react-router-dom";
import { getBook } from "./api";
import { CurrentUserContext } from "./UserProvider";


const BookTestPage = () => {
  const [book, setBook] = useState();
  const [generatingBook, setGeneratingBook] = useState(false);
  const [bg_color, setBgColor] = useState();
  const [complementaryColor, setComplementaryColor] = useState();
  const { user, setUser } = useContext(CurrentUserContext)
  const { bookId } = useParams();

  useEffect(() => {
    const initializeBook = async () => {
      const bookData = await getBook(user.email, bookId)
      setBook(bookData)
      console.log(bookData)

      setComplementaryColor(bookData?.complementaryColor ?? 'white')
      setBgColor(bookData?.color || 'white')
    }

    initializeBook()
  }, [])



  // Function to generate random position for the shaking image within the book pages
  const getRandomPosition = () => {
    const imageWidth = 70; // Width of the shaking image (adjusted to 50px)
    const imageHeight = 70; // Height of the shaking image (adjusted to 50px)
    const left = Math.random() * (1400 - imageWidth * 2) + imageWidth / 2; // Random left position within the fixed width
    const top = Math.random() * (900 - imageHeight * 2) + imageHeight / 2; // Random top position within the fixed height
    return {
      top: `${top}px`,
      left: `${left}px`,
      position: 'absolute',
    };
  };

  // Define the swirly animation
  const swirlyAnimation = `
    @keyframes swirly {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;
  const starAnimation = `
    @keyframes star {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
  `;

  // Define the triangle animation
  const triangleAnimation = `
    @keyframes triangle {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(20px);
      }
      100% {
        transform: translateY(0);
      }
    }
  `;


  // Add the swirly animation to the style tag
  const styleTag = document.createElement('style');
  styleTag.innerHTML = `
    ${swirlyAnimation}
    ${starAnimation}
    ${triangleAnimation}
  `;
  document.head.appendChild(styleTag);

  // Render multiple images with shaking animation
  const renderShakingImages = (images, count) => {
    const shakingImages = [];
    const imageSize = 120;
    const opacity = 0.5;

    for (let i = 0; i < count; i++) {
      images.forEach((image, index) => {
        let animation = index === images.length - 1 ? 'swirly' : (image === triangleImage ? 'triangle' : 'shake');
        shakingImages.push(
          <img
            key={`${index}_${i}`}
            src={image}
            alt="Shaking Image"
            className={`shaking-image ${animation}`}
            style={{
              ...getRandomPosition(),
              width: `${imageSize}px`,
              height: `${imageSize}px`,
              opacity: opacity,
            }}
          />
        );
      });
    }
    return shakingImages;
  };

  return (
    <div className="h-screen w-screen relative p-4 flex flex-col justify-center items-center" style={{ backgroundColor: bg_color }}>
      <div className="border p-2 rounded-full flex items-center justify-center">
        {/* Replace HomeBar component with your actual component */}
        <HomeBar onSearchChange={() => { }} />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[800px] h-[580px] justify-center" style={{ zIndex: 1 }}>
          {book ? (
            <Book bookData={book} />
          ) : generatingBook ? (
            <div className="flex justify-center items-center" style={{ backgroundColor: complementaryColor }}>
              Generating book...
            </div>
          ) : (
            <div className="flex justify-center items-center">Generate a book to start!!</div>
          )}
        </div>
      </div>
      {/* Render the shaking images below the book display */}
      <div className="absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '1400px', height: '900px', zIndex: '0' }}>
        {renderShakingImages([squiggleImage, starImage, triangleImage, swirlyImage], 4)} {/* Change the second parameter to adjust the number of duplicates */}
      </div>
      {/* <div className="absolute bottom-20 w-full z-10">
        <div className="w-full flex justify-center">
          <div className="w-1/3 min-w-min bg-gray-200 h-[50px] flex items-center justify-end rounded-full p-2 gap-10">
            <Button className="rounded-full" variant="outline" >
              Generate Book
            </Button>
            <Button className="rounded-full" variant="outline">
              Generate Background Image
            </Button>
          </div>
        </div>
      </div> */}
      {/* Define the shake animation */}
      <style>{`
        .shaking-image {
          animation: shake 1.5s ease-in-out infinite;
        }

        @keyframes shake {
          0% {
            transform: rotate(-10deg);
          }
          50% {
            transform: rotate(10deg);
          }
          100% {
            transform: rotate(-10deg);
          }
        }

        /* Define the swirly animation */
        .swirly {
          animation: swirly 3s linear infinite;
        }

        @keyframes swirly {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Define the triangle animation */
        .triangle {
          animation: triangle 2s linear infinite;
        }

        @keyframes triangle {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default BookTestPage;
