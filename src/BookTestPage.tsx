import { useContext, useEffect, useState } from "react"
import Book from "./components/Book";
import { HomeBar } from "./components/NavBar";

import squiggleImage from './assets/squiggle.png';
import starImage from './assets/star.png';
import triangleImage from './assets/triangle.png';
import swirlyImage from './assets/swirly.png'

import "./components/BookTestPage.css"


import { useParams } from "react-router-dom";
import { getBook } from "./api";
import { CurrentUserContext } from "./UserProvider";
import RenderShakingImages from "./ShakingImages";

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


  return (
    <div className="h-screen w-screen relative p-4 flex flex-col justify-center items-center overflow-hidden" style={{ backgroundColor: bg_color }}>
      <HomeBar expand={false} />
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[800px] h-[580px] justify-center" style={{ zIndex: 1 }}>
          {book ? (
           <Book bookData={book} coverImage={book.coverImage} coverColor={book.color} />
          ) : generatingBook ? (
            <div className="flex justify-center items-center" style={{ backgroundColor: complementaryColor }}>
              Generating book...
            </div>
          ) : (
            <div className="flex justify-center items-center">Generate a book to start!!</div>
          )}
        </div>
      </div>
      <div className="absolute scale-50" style={{ top: '50%', left: '50%', transform: 'translate(-75%, -75%)', width: '1000px', height: '600px', zIndex: '0' }}>
        {RenderShakingImages([squiggleImage, starImage, triangleImage, swirlyImage], 4)}
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
