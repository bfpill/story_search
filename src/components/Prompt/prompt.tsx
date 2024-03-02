import React, { useEffect, useRef, useState } from 'react';
import './prompt.css';
import { DefaultBar, HomeBar } from '../NavBar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { getGenerateSearchOptions } from '@/image_api';
import Book from '../Book';
import BookTitlePage from '../BookTitlePage';
import { DummyBook, dummy_search, dummy_user_id } from '@/lib/utils';
import { Search } from 'lucide-react';
import { start } from 'repl';
import { getGenerateBook } from '@/api';

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

  useEffect(() => {
    console.log("cover image changed", coverImage, coverImageColor)
  }, [coverImage, coverImageColor])

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSetChosenBook = async (title) => {
    setChosenTitle(title)
    setHasChosenBook(true)
    setGeneratingBook(true);

    // TEST
    // setBook(DummyBook);

    //REAL 
    const data = await getGenerateBook(dummy_user_id, dummy_search);
    setBook(data);

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
          <HomeBar onSearchChange={function (event: any): unknown {
            throw new Error("Function not implemented.");
          }} expand={isNavExpanded} />
        </div>
      </div>
      {
        !hasChosenBook &&
        <div className={`transition-all duration-500 ${isSearching ? 'top-[-180px]' : 'top-0'} mb-10 w-2/3 flex justify-end items-center relative`}>
          <div className={`w-full h-[60px] absolute right-0 overflow-hidden p-1`}>
            <Input
              type="text"
              className="w-full h-full px-6 text-xl rounded-full"
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
        <div className={`transition-all duration-1500 initial-fade-in top-[300px] absolute grid grid-cols-3 w-2/3 min-w-[800px] gap-10 mt-20`}>
          {(searchResults ?? ["", "", ""]).map(title => {
            return (
              <div onClick={() => handleSetChosenBook(title)}
                className="h-[360px] max-w-[270px] flex text-2xl items-center justify-center bg-blue-300 col-span-1 shadow-2xl" >
                <BookTitlePage complementaryColor={"blue"} page={{ text: title }} setCover={setCoverImage} setCoverColor={setCoverImageColor} />
              </div>
            )
          })}
        </div>
      )}
      {hasChosenBook && generatingBook ? (
        <div className="transition-all duration-2000 initial-fade-in h-[600px] w-[450px] bg-blue-300 flex" >
          <BookTitlePage complementaryColor={"blue"} page={{ text: chosenTitle }} coverImage={coverImage} coverColor={coverImageColor} />
        </div>
      ) : (
        book &&
        <div className={`transition-all duration-2000 initial-fade-in min-w-[800px]`}>
          <Book bookData={book} coverImage={coverImage} />
        </div>
      )
      }
    </div>

  );
}

export default Prompt;
