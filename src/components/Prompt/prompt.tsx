import React, { useState } from 'react';
import './prompt.css';
import bookImage from '../../assets/book.png';
import searchIcon from '../../assets/search-icon.jpg';
import blueBookImage from '../../assets/blueBook.png'; // Import the bluebook.png image
import { HomeBar } from '../NavBar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { InputIcon } from '@radix-ui/react-icons';
import { getGenerateSearchOptions } from '@/image_api';
import Book from '../Book';
import BookTitlePage from '../BookTitlePage';

function Prompt() {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState<boolean>(false)

  const [showImages, setShowImages] = useState(false);
  const [showGenerateButton, setShowGenerateButton] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

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

  const handleSetChosenBook = () => {

  }

  return (
    <div className="h-screen w-screen relative p-4 flex flex-col justify-center items-center relative">
      <div className="border p-2 rounded-full flex items-center justify-center z-20 absolute top-4 bg-white">
        <HomeBar onSearchChange={function (event: any): unknown {
          throw new Error("Function not implemented.")
        }} />
      </div>
      <div className="flex w-2/3 h-[70px] justify-between -mt-20">
        <Input className="h-full mr-2 w-full text-xl tracking-tight rounded-full p-6"
          placeholder="Search..."
          onChange={handleSearchChange}
          onKeyDown={handleKeyPress}
          onMouseEnter={() => setShowImages(false)}
        />
        <Button className="h-full p-6 rounded-full" onClick={handleSearch}>Search</Button>
      </div>
      {showImages && searchResults && (
        <div className="grid grid-cols-3 w-2/3 gap-10 mt-10">
          {searchResults?.map(title => {
            return (
              <div onClick={() => { }} className="h-[320px] w-[240px] flex text-sm items-center justify-center bg-blue-300 col-span-1" >
                <BookTitlePage complementaryColor={"blue"} page={{text: title}} />
              </div>
            )
          })
          }
        </div>
      )}
    </div>
  );
}

export default Prompt;
