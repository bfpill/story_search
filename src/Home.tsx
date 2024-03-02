import { useContext, useEffect, useState } from "react"
import { HomeBar } from "./components/NavBar"
import { CurrentUserContext } from "./UserProvider"
import { getAllUserBooks } from "./api";
import BookTitlePage from "./components/BookTitlePage";
import { useNavigate } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./components/ui/carousel";

const UserLibraryDummy = () => {
  const { user } = useContext(CurrentUserContext)
  const [userBooks, setUserBooks] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const initializeBooks = async () => {
      const allBooks = await getAllUserBooks(user.email)
      if (allBooks) {
        setUserBooks(allBooks)
        console.log(allBooks)
      }
    }

    initializeBooks()
  }, [user])

  const BookCard = ({ book }) => {
    const [isHovered, setIsHovered] = useState(false);

    const baseStyle = "h-[430px] w-[300px] text-xs leading-1 cursor-pointer transition-all duration-300 ease-in-out";
    const hoverStyle = "scale-105 shadow-2xl";

    return (
        <div className={`${baseStyle} ${isHovered ? hoverStyle : 'shadow-xl'}`}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            onClick={() => navigate(`books/${book.bookId}`)}
        >
            <BookTitlePage complementaryColor={undefined} page={book.pages[0]} />
        </div>
    );
};


  return (
    <div className="w-screen h-full flex justify-center items-center">
      {
        user ?
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-3/4"
          >
            <CarouselContent className="w-full h-full p-10">
              {userBooks?.map((book, index) => {
                return (
                  <CarouselItem key={index} className="basis-1/3">
                    <BookCard book={book}/>
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
  )
}

const Home = (props: {}) => {

  return (
    <div className="h-screen w-screen relative p-4 flex flex-col justify-center items-center">
      <div className="w-full flex items-center justify-center">
        <div className={`z-50 transition-all duration-500 top-4 absolute w-full rounded-full`}
          style={{ "zIndex": "9999" }}
        >
          <HomeBar onSearchChange={function (event: any): unknown {
            throw new Error("Function not implemented.");
          }} />
        </div>
      </div>
      <UserLibraryDummy />
    </div>
  )

}


export default Home