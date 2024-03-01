import React, { useEffect, useState } from "react"
import { getGenerateBook } from "./api";
import { Button } from "./components/ui/button";
import Book from "./components/Book";

// const books = [
//   {
//     "title": "Book 1",
//     "id": 123,
//     "pages": [
//       {
//         "pageNum": 1,
//         "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//         "images": [
//           { "src": "image1.jpg", "position": { "x": 100, "y": 100 } },
//           { "src": "image2.jpg", "position": { "x": 200, "y": 200 } }
//         ]
//       },
//       {
//         "pageNum": 2,
//         "text": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//         "images": [
//           { "src": "image3.jpg", "position": { "x": 50, "y": 50 } }
//         ]
//       },
//       {
//         "pageNum": 3,
//         "text": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//         "images": []
//       },
//       {
//         "pageNum": 4,
//         "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//         "images": []
//       },
//       {
//         "pageNum": 5,
//         "text": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//         "images": []
//       },
//       {
//         "pageNum": 6,
//         "text": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
//         "images": []
//       },
//       {
//         "pageNum": 7,
//         "text": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
//         "images": []
//       }
//     ]
//   }

// ]


const dummy_user_id = "dummy"
const dummy_search = "trains"


const BookTestPage = () => {

  const [book, setBook] = useState(undefined)
  const [generatingBook, setGeneratingBook] = useState(false)

  const handleGenClick = async () => {
    setGeneratingBook(true)
    const data = await getGenerateBook(dummy_user_id, dummy_search)
    setBook(data)
    setGeneratingBook(false)
  }

  useEffect(() => {
    console.log(book)
  }, [])

  return (
    <div className="h-screen w-screen bg-neutral-100 flex flex-col p-10">
      <div className="w-full flex justify-end">
        <Button variant="outline" onClick={() => handleGenClick()}>
          Generate Book
        </Button>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[800px] h-[580px] justify-center">
          {book != undefined ?
            <Book bookData={book} />
            :
            generatingBook ?
              <div className="flex justify-center items-center">
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
  );
};

export default BookTestPage;
