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

const Home = (props: {}) => {
  const { user } = useContext(CurrentUserContext)
  const [userBooks, setUserBooks] = useState([])
  const [hoveredColor, setHoveredColor] = useState("")

  const navigate = useNavigate();

  useEffect(() => {
    const initializeBooks = async () => {
      const allBooks = await getAllUserBooks(user.email)
      setHoveredColor(allBooks[0].color)
      if (allBooks) {
        setUserBooks(allBooks)
        console.log(allBooks)
      }
    }

    initializeBooks()
  }, [user])

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
    <div
      className="transition-colors duration-300 h-screen w-screen relative p-4 flex flex-col justify-center items-center"
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
      <div className="w-screen h-full flex justify-center items-center">
        <div className="w-screen h-full flex justify-center items-center z-50">
          {
            user ?
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
                      <div
                        onMouseOver={() => setHoveredColor(book.color)}
                      >

                        <CarouselItem key={index} className="basis-1/3">
                          <BookCard book={book} />
                        </CarouselItem>
                      </div>
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
    </div>
  )

}


export default Home