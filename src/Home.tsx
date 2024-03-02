import { useContext, useEffect, useState } from "react"
import { HomeBar } from "./components/NavBar"
import { CurrentUserContext } from "./UserProvider"
import { getAllBooks, getAllUserBooks, getUser } from "./api";
import BookTitlePage from "./components/BookTitlePage";
import { useNavigate } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./components/ui/carousel";
import RenderShakingImages from "./ShakingImages";

import squiggleImage from './assets/squiggle.png';
import starImage from './assets/star.png';
import triangleImage from './assets/triangle.png';
import swirlyImage from './assets/swirly.png'
import Landing from "./components/Landing/Landing";

const UserLibraryDummy = (props: {}) => {
  const { user } = useContext(CurrentUserContext)
  const [userBooks, setUserBooks] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const initializeBooks = async () => {
      const allBooks = await getAllUserBooks(user.email);
      if (allBooks) {
        setUserBooks(allBooks);
        console.log(allBooks);
      }
    };

    initializeBooks();
  }, [user]);

  const BookCard = ({ book }) => {
    const [isHovered, setIsHovered] = useState(false);

    const baseStyle = "h-96 w-64 text-3xl leading-1 cursor-pointer transition-all duration-300 ease-in-out";
    const hoverStyle = "scale-105 shadow-2xl";

    return (
      <div className={`${baseStyle} ${isHovered ? hoverStyle : 'shadow-xl'}`}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        onClick={() => navigate(`books/${book.bookId}`)}
      >
        <BookTitlePage complementaryColor={undefined} page={book.pages[0]} coverImage={book.coverImage} coverColor={book.color} />
      </div>
    );
  };

  return (
    <div className="w-screen h-full flex justify-center items-center">
      <div className="w-screen h-full flex justify-center items-center z-50">
        {user ?
          <Carousel
            opts={{
              align: "center",
              dragFree: true,
            }}
            className="w-3/4"
          >
            <CarouselContent className="w-full h-full p-20">
              {userBooks?.map((book, index) => {
                return (
                  <CarouselItem key={index} className="basis-1/3">
                    <BookCard book={book} />
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          :
          <div className="">
            Login to see your books!
          </div>
        }

      </div>
      <div className="absolute scale-50" style={{ top: '50%', left: '50%', transform: 'translate(-75%, -75%)', width: '1000px', height: '600px', zIndex: '0' }}>
        {RenderShakingImages([squiggleImage, starImage, triangleImage, swirlyImage], 3)}
      </div>
    </div>
  );
};

const Home = (props: {}) => {
  const [hoveredColor, setHoveredColor] = useState(""); // Define hoveredColor state variable

  return (
    <div className="h-screen w-screen relative p-4 flex flex-col justify-center items-center">
      <div className="w-screen h-full relative p-4 flex flex-col justify-center items-center"
        style={{ backgroundColor: hoveredColor }}
      >
        <div className="w-full flex items-center justify-center">
          <div className={`z-50 transition-all duration-500 top-4 absolute w-full rounded-full`}
            style={{ "zIndex": "9999" }}
          >
            <HomeBar onSearchChange={function (event: any): unknown {
              throw new Error("Function not implemented.");
            }} />
          </div>
        </div>
        <UserLibraryDummy setHoveredColor={setHoveredColor} /> {/* Pass setHoveredColor to UserLibraryDummy */}
      </div>
      <div className="absolute scale-50" style={{ top: '50%', left: '50%', transform: 'translate(-75%, -75%)', width: '1000px', height: '600px', zIndex: '0' }}>
        {RenderShakingImages([squiggleImage, starImage, triangleImage, swirlyImage], 4)}
      </div>

      {/* Inline CSS Styles */}
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

export default Home;
