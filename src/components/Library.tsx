import { useContext, useEffect, useState } from "react"
import { HomeBar } from "../components/NavBar"
import { CurrentUserContext } from "../UserProvider"
import { getAllBooks } from "../api";
import BookTitlePage from "../components/BookTitlePage";
import { useNavigate } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";

const Library = () => {
  const { user } = useContext(CurrentUserContext);
  const [originalCategories, setOriginalCategories] = useState({}); // Store the original fetched categories
  const [categories, setCategories] = useState({}); // This will store either all categories or filtered categories
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const initializeBooks = async () => {
      const allBooks = await getAllBooks();
      if (allBooks) {
        setOriginalCategories(allBooks);
        setCategories(allBooks);
      }
    }

    initializeBooks();
  }, [user]);

  useEffect(() => {
    if (search.trim() === '') {
      setCategories(originalCategories); // If search is cleared, reset categories to original
      return;
    }

    const filteredCategories = {};
    Object.keys(originalCategories).forEach(category => {
      filteredCategories[category] = originalCategories[category].filter(book =>
        book.title.toLowerCase().includes(search.toLowerCase())
      );
    });
    setCategories(filteredCategories);
  }, [search, originalCategories]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const BookCard = ({ book }) => {
    const [isHovered, setIsHovered] = useState(false);

    const baseStyle = "h-32 w-24 text-xs leading-1 cursor-pointer transition-all duration-300 ease-in-out";
    const hoverStyle = "scale-105 shadow-xs";

    return (
      <div className={`${baseStyle} ${isHovered ? hoverStyle : 'shadow-sm'}`}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        onClick={() => navigate(`/books/${book.bookId}`)}
      >
        <BookTitlePage complementaryColor={undefined} page={book.pages[0]} coverImage={book.coverImage} coverColor={book.color} />
      </div>
    );
  };

  return (
    <div
      className="transition-colors duration-300 h-screen w-screen relative flex flex-col justify-center items-center"
    // style={{ backgroundColor: hoveredColor }}
    >
      <div className="w-full flex items-center justify-center">
        <div className={`z-50 transition-all duration-500 top-4 absolute w-full rounded-full`}
          style={{ "zIndex": "9999" }}
        >
          <HomeBar onSearchChange={handleSearchChange} expand={true} />
        </div>
      </div>
      <div className="w-3/4 h-screen flex flex-col overflow-y-scroll p-20 mt-[60px]">
        {/* <ScrollArea> */}

        {Object.keys(categories).map(category => {
          if (categories[category].length > 0) {
            return (
              <div className="flex flex-col items-start w-full overflow-visible">
                <div className="">
                  <h2 className="ml-3.5 -mb-3">
                    {category}
                  </h2>
                </div>

                <Carousel
                  opts={{
                    align: "center",
                    dragFree: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="w-full h-full p-4">
                    {categories[category]?.map((book, index) => {
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
              </div>
            )
          }
        })
        }
        {/* </ScrollArea> */}
      </div>
    </div>
  )

}


export default Library 