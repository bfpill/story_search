import React, { useEffect, useState } from 'react';
import './prompt.css';
import { DefaultBar, HomeBar } from '../NavBar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { getGenerateSearchOptions } from '@/image_api';
import Book from '../Book';
import BookTitlePage from '../BookTitlePage';
import { DummyBook } from '@/lib/utils';
import { Search } from 'lucide-react';
import { start } from 'repl';

function Prompt() {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const [showImages, setShowImages] = useState(false);

  const [showGenerateButton, setShowGenerateButton] = useState(true);
  const [hasChosenBook, setHasChosenBook] = useState(false);

  const [book, setBook] = useState(undefined);
  const [generatingBook, setGeneratingBook] = useState(false);
  const [startTimerForImages, setStartTimerForImages] = useState(false);
  const [searchResults, setSearchResults] = useState(undefined);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [componentDidMount, setComponentDidMount] = useState(false);

  const handleSearch = async () => {
    console.log("searching for ", search)
    if (search !== "") {
      setIsNavExpanded(true)
      setStartTimerForImages(true)
      setIsSearching(true)

      console.log("search", search)
      const results = await getGenerateSearchOptions(search)
      console.log("rss", results)
      const possible_titles = results.titles ?? []

      if (results) {
        setSearchResults(possible_titles)
      }

      setShowGenerateButton(false);
    }
  }

  useEffect(() => {
    setComponentDidMount(true)
  }, [])

  useEffect(() => {
    console.log("hitting timeout")
    setTimeout(() => {
      setShowImages(true);
    }, 1500)
  }, [isSearching])

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSetChosenBook = (title) => {
    setHasChosenBook(true)

    // TEST
    setBook(DummyBook);

    //REAL 
    // const data = await getGenerateBook(dummy_user_id, dummy_search);
    // console.log(data);
    // setBook(data);

    setGeneratingBook(false);
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
      <div className={`transition-all duration-500 ${isSearching ? 'top-[-180px]' : 'top-0'} mb-10 w-[800px] flex justify-end items-center relative`}>
        <div className={`w-[800px] h-[60px] absolute right-0 overflow-hidden p-1`}>
          <Input
            type="text"
            className="w-full h-full px-6 text-xl rounded-full"
            placeholder="Search..."
            onChange={handleSearchChange}
            onKeyDown={handleKeyPress}
            onFocus={() => setShowImages(false)}
          />
        </div>
        <div className="rounded-full z-30 mr-1">
          <Button className="rounded-full h-12 w-15" variant='ghost' onClick={handleSearch}>
            <Search className='h-full w-full' />
          </Button>
        </div>
      </div>

      {isSearching && !hasChosenBook && (
        <div className={`transition-all duration-1500 initial-fade-in top-[300px] absolute grid grid-cols-3 w-2/3 gap-10 mt-10`}>
          {(searchResults ?? ["", "", ""]).map(title => {
            return (
              <div onClick={() => handleSetChosenBook(title)} className="h-[320px] w-[240px] flex text-sm items-center justify-center bg-blue-300 col-span-1" >
                <BookTitlePage complementaryColor={"blue"} page={{ text: title }} />
              </div>
            )
          })}
        </div>
      )}
      {hasChosenBook && book !== undefined &&
        <Book bookData={book} />
      }
    </div>

  );
}

export default Prompt;
