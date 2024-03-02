import React, { useState } from 'react';
import './prompt.css';
import { DefaultBar, HomeBar } from '../NavBar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { getGenerateSearchOptions } from '@/image_api';
import Book from '../Book';
import BookTitlePage from '../BookTitlePage';
import { DummyBook } from '@/lib/utils';
import { Search } from 'lucide-react';

function Prompt() {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const [showImages, setShowImages] = useState(false);

  const [showGenerateButton, setShowGenerateButton] = useState(true);
  const [hasChosenBook, setHasChosenBook] = useState(false);

  const [book, setBook] = useState(undefined);
  const [generatingBook, setGeneratingBook] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const handleSearch = async () => {
    console.log("searching for ", search)
    if (search != "") {
      setIsSearching(true)
      console.log("search", search)
      const results = await getGenerateSearchOptions(search)
      console.log("rss", results)
      const possible_titles = results.titles ?? []

      if (results) {
        setSearchResults(possible_titles)
      }

      setShowImages(true);
      setShowGenerateButton(false);
    }

  }

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

  const handleExpandSearch = () => {

  }


  if (!hasChosenBook) {
    return (
      <div className="h-screen w-screen relative p-4 flex flex-col justify-center items-center relative">
        <div className="w-full flex items-center justify-center">
          <div className="z-20 absolute top-4 rounded-full w-full">
            <HomeBar onSearchChange={function (event: any): unknown {
              throw new Error("Function not implemented.");
            }} expand={showImages} />
          </div>
        </div>
        <div className="flex w-2/3 h-[70px] justify-between -mt-20">
          <Input className="h-full mr-2 w-full text-xl tracking-tight rounded-full p-6 text-2xl"
            placeholder="Search..."
            onChange={handleSearchChange}
            onKeyDown={handleKeyPress}
            onFocus={() => setShowImages(false)}
          />
          <Button className="h-full p-6 rounded-full" onClick={handleSearch}>Search</Button>
        </div>
        {showImages && searchResults && (
          <div className="grid grid-cols-3 w-2/3 gap-10 mt-10">
            {searchResults?.map(title => {
              return (
                <div onClick={() => handleSetChosenBook(title)} className="h-[320px] w-[240px] flex text-sm items-center justify-center bg-blue-300 col-span-1" >
                  <BookTitlePage complementaryColor={"blue"} page={{ text: title }} />
                </div>
              )
            })
            }
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="h-screen w-screen relative flex flex-col justify-center items-center relative">
        <div className="w-full absolute top-0">
          <HomeBar onSearchChange={function (event: any): unknown {
            throw new Error("Function not implemented.");
          }} expand={!showImages} />
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center" >
          <div className="mb-10 w-[800px] flex justify-end items-center relative">
            <div className={`transition-width duration-500 ease-out ${isSearchExpanded ? 'w-[800px]' : 'w-0'} h-[60px] absolute right-0 overflow-hidden p-1`}>
              <Input
                type="text"
                className={`w-full h-full px-6 text-xl rounded-full transition-opacity duration-500 ${isSearchExpanded ? 'opacity-100' : 'opacity-0'}`}
                placeholder="Search..."
              >

              </Input>
            </div>
            <div className="rounded-full z-30 mr-1">
              <Button className="rounded-full h-12 w-15" variant='ghost' onClick={() => { setIsSearchExpanded(!isSearchExpanded) }}>
                <Search className='h-full w-full' />
              </Button>
            </div>
          </div>
          <div className="w-[800px] h-[580px] justify-center">
            {book !== undefined ?
              <Book bookData={book} />
              :
              generatingBook ?
                <div className="flex justify-center items-center " style={{
                  backgroundColor: DummyBook.complementaryColor || 'white'
                }}>
                  Generating book...
                </div>
                :
                <div className="flex justify-center items-center">
                  Generate a book to start!!
                </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Prompt;
