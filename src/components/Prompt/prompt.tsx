import React, { useContext, useEffect, useRef, useState } from 'react';
import './prompt.css';
import { HomeBar } from '../NavBar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { getGenerateSearchOptions } from '@/image_api';
import BookTitlePage from '../BookTitlePage';
import { getRandomColor } from '@/lib/utils';
import { Search } from 'lucide-react';
import { addBookToUser, getGenerateBook } from '@/api';
import { v4 as uuid4 } from 'uuid'
import { CurrentUserContext } from '@/UserProvider';
import { CardBody, CardContainer } from '../ui/3dCard';
import { Toaster } from '../ui/toaster';
import { ToastAction } from '../ui/toast';
import { useToast } from "../ui/use-toast"


const OptionCard = ({ title, handleSetChosenBook }) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyle = "h-[400px] w-full text-2xl leading-1 transition-all duration-300 ease-in-out";
  const hoverStyle = "scale-105 shadow-xl";

  return (
    <div className={`${baseStyle} ${isHovered ? hoverStyle : 'shadow-xl'} h-[360px] ${title !== "" ? "cursor-pointer": 'cursor-n'}
    max-w-[270px] flex text-xl items-center justify-center bg-blue-300 col-span-1 shadow-md`}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <BookTitlePage complementaryColor={"blue"} page={{ text: title }} handleBookClick={handleSetChosenBook} />
    </div>
  );
}

function Prompt() {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState<boolean>(false)

  const [hasChosenBook, setHasChosenBook] = useState(false);

  const [book, setBook] = useState(undefined);
  const [searchResults, setSearchResults] = useState(undefined);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [chosenTitle, setChosenTitle] = useState("");
  const [generatingBook, setGeneratingBook] = useState(false);

  const [coverImage, setCoverImage] = useState(undefined)
  const [coverImageColor, setCoverImageColor] = useState(undefined)

  const { user } = useContext(CurrentUserContext)
  const { toast } = useToast()

  const searchBarRef = useRef()

  const handleSearch = async () => {
    console.log("searching for ", search)
    if (search !== "") {
      setIsNavExpanded(true)
      setIsSearching(true)

      console.log("search", search)
      const results = await getGenerateSearchOptions(search)
      console.log("rss", results)
      const possible_titles = results.titles ?? []

      if (results) {
        setSearchResults(possible_titles)
      }

    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (searchBarRef.current) {
        searchBarRef.current.blur();
      }
      handleSearch()
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSetChosenBook = async (title, image, color) => {
    if (!searchResults) {
      toast({
        title: "Error: Still Loading Results!",
        variant: "destructive",
      })
      return
    }
    setChosenTitle(title)
    setHasChosenBook(true)
    setGeneratingBook(true);

    setCoverImage(image)
    setCoverImageColor(color)

    // TEST
    // setBook(DummyBook);

    // REAL 
    const gendBook = await getGenerateBook(user.email, search);

    const newBookId = uuid4()

    console.log("STUFF:L ", image, color)

    const newBook = {
      ...gendBook, pages: [...gendBook.pages], bookId: newBookId,
    };

    newBook.coverImage = image
    newBook.color = color

    if (newBook.pages[0]?.type !== "front_cover") {
      newBook.pages.unshift({ type: "front_cover", text: newBook.title });
    }

    if (newBook.pages[newBook.pages.length - 1]?.type !== "back_cover") {
      if (newBook.pages.length % 2 != 0) {
        newBook.pages.push({ type: "back_cover", text: "" });
      }
    }

    if (newBook !== gendBook) {
      console.log('newBook', newBook)
      setBook(newBook);
    }

    addBookToUser(user.email, newBookId, newBook)

    setGeneratingBook(false);
  }

  const handleRefocusSearch = () => {
    setIsSearching(false)
    setHasChosenBook(false)
    setSearchResults(undefined)
  }

  const handleSearchButtonClicked = () => {
    if (isSearching) {
      handleRefocusSearch()
    }
    else {
      handleSearch()
    }
  }

  return (
    <div className="h-screen w-screen relative p-4 flex flex-col justify-center items-center">
      <div className="w-full flex items-center justify-center">
        <div className={`z-20 transition-all duration-500 top-4 absolute w-full rounded-full`}>
          <HomeBar expand={isNavExpanded} />
        </div>
      </div>
      {
        !hasChosenBook &&
        <div className={`transition-all duration-500 ${isSearching ? 'top-[-180px]' : 'top-0'} mb-10 w-[860px] flex justify-end items-center relative `}>
          <div className={`w-full h-[60px] absolute right-0 overflow-hidden p-1`}>
            <Input
              type="text"
              className="w-full h-full text-xl rounded-full"
              placeholder="Search..."
              onChange={handleSearchChange}
              onKeyDown={handleKeyPress}
              onFocus={() => handleRefocusSearch()}
              ref={searchBarRef}
            />
          </div>
          <div className="rounded-full z-30 mr-1">
            <Button className="rounded-full h-12 w-15" variant='ghost' onClick={handleSearchButtonClicked}>
              <Search className='h-full w-full' />
            </Button>
          </div>
        </div>
      }

      {isSearching && !hasChosenBook && (
        <div className={`transition-all duration-1500 initial-fade-in top-[300px] absolute grid grid-cols-3 w-[860px] min-w-[800px] mt-20 ml-10`}>
          {(searchResults ?? ["", "", ""]).map(title => {
            return (
              <OptionCard title={title} handleSetChosenBook={handleSetChosenBook} />
            )
          })}
        </div>
      )}
      {hasChosenBook && generatingBook ? (
        <div className="flex">
          <CardContainer className="inter-var">
            <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] w-auto h-auto p-3">
              <div className="transition-all duration-2000 initial-fade-in h-[720px] w-[490px] flex">
                <BookTitlePage complementaryColor={() => getRandomColor()} page={{ text: chosenTitle }} coverImage={coverImage} coverColor={coverImageColor} />
              </div>
            </CardBody>
          </CardContainer>
          <div>Loading...</div>
        </div>
      ) : (
        <div className="lds-dual-ring"></div>

      )
      }
      <div>
        <Toaster />
      </div>
    </div>
  );
}

export default Prompt;

