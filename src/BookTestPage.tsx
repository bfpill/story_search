import React, { useContext, useEffect, useState } from "react"
import { getGenerateBook, addBookToUser } from "./api";
import { Button } from "./components/ui/button";
import Book from "./components/Book";
import { DefaultBar, HomeBar } from "./components/NavBar";
import { CurrentUserContext } from "./UserProvider";
import "./components/BookTestPage.css"
import squigglyImage from './assets/squiggly.png';
import squiggleImage from './assets/squiggle.png';
import starImage from './assets/star.png';
import triangleImage from './assets/triangle.png';
import swirlyImage from './assets/swirly.png';



// const books = [
//   {
//     "title": "Book 1",
//     "id": 123,
//     "pages": [
//       {
//         "pageNum": 1,
//         "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         "images": [
//           { "src": "image1.jpg", "position": { "x": 100, "y": 100 } },
//           { "src": "image2.jpg", "position": { "x": 200, "y": 200 } }
//         ]
//       },
//       {
//         "pageNum": 2,
//         "text": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//         "images": [
//           { "src": "image3.jpg", "position": { "x": 50, "y": 50 } }
//         ]
//       },
//       {
//         "pageNum": 3,
//         "text": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//         "images": []
//       },
//       {
//         "pageNum": 4,
//         "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//         "images": []
//       },
//       {
//         "pageNum": 5,
//         "text": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         "images": []
//       },
//       {
//         "pageNum": 6,
//         "text": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
//         "images": []
//       },
//       {
//         "pageNum": 7,
//         "text": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
//         "images": []
//       }
//     ]
//   }

// ]


const DummyBook = {
  "title": "Whistles and Wheels: A Train Tale",
  "pages": [
    {
      "pageNum": 1,
      "text": "In Whistleville, trains weren't just a mode of transport; they were beloved members of the community.",
      "images": [
        "Whistleville Station",
        "Happy Train"
      ],
      "background_image": "https://storage.googleapis.com/baggetters-38a7c.appspot.com/7e829a68-7616-4f6b-aa3c-fe228c050c1e",
      "background_image_query": "Countryside Tracks"
    },
    {
      "pageNum": 2,
      "text": "Benny, a bright blue engine, loved racing down the tracks, breezing past mountains and meadows.",
      "images": [
        "Benny the Engine",
        "Mountains and Meadows"
      ],
      "background_image": "https://storage.googleapis.com/baggetters-38a7c.appspot.com/53ed3459-feb1-47fc-8382-cdc87bcdddaf",
      "background_image_query": "Countryside Tracks"
    },
    {
      "pageNum": 3,
      "text": "He knew every twist and turn, thanks to the steel rails guiding his wheels, a brilliant invention enhancing travel.",
      "images": [
        "Steel Rails",
        "Twists and Turns"
      ],
      "background_image": "https://storage.googleapis.com/baggetters-38a7c.appspot.com/3125bed6-395e-41a7-a3aa-d34a289fa5bc",
      "background_image_query": "Steel Rails"
    },
    {
      "pageNum": 4,
      "text": "One day, Benny set a record, cheered on by townsfolk, embodying the spirit of Whistleville's train heritage.",
      "images": [
        "Record Setting Day",
        "Cheering Townsfolk"
      ],
      "background_image": "https://storage.googleapis.com/baggetters-38a7c.appspot.com/dab51f7a-4a61-4ee8-a98d-9352b5205f57",
      "background_image_query": "Steel Rails"
    }
  ],
  "color": "Black",
  "complementaryColor":"Yellow"
};


const BookTestPage = () => {
  const [book, setBook] = useState(undefined);
  const [generatingBook, setGeneratingBook] = useState(false);

  const handleGenClick = async () => {
    setGeneratingBook(true);
    // Simulate fetching book data...
    setBook(DummyBook);
    setGeneratingBook(false);
  };

  const complementaryColor = DummyBook.complementaryColor || 'white';
  const bg_color = DummyBook.color || 'white';

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
        <HomeBar onSearchChange={() => {}} />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[800px] h-[580px] justify-center" style={{ zIndex: 1 }}>
          {book !== undefined ? (
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
      <div className="absolute bottom-20 w-full z-10">
        <div className="w-full flex justify-center">
          <div className="w-1/3 min-w-min bg-gray-200 h-[50px] flex items-center justify-end rounded-full p-2 gap-10">
            <Button className="rounded-full" variant="outline" onClick={handleGenClick}>
              Generate Book
            </Button>
            <Button className="rounded-full" variant="outline">
              Generate Background Image
            </Button>
          </div>
        </div>
      </div>
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
          animation: swirly 5s linear infinite;
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
