import React, { useEffect, useState } from "react"
import { getGenerateBook } from "./api";
import { Button } from "./components/ui/button";
import Book from "./components/Book";
import { DefaultBar } from "./components/NavBar";
import { getGenerateBackgroundImage } from "./image_api";

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

const DummyBook = {
  "title": "The Great Train Journey",
  "pages": [
    {
      "pageNum": 1,
      "text": "In the small town of Railville, an old steam train, puffing and hissing, waited at the station. Jamie and his dog, Bolt, watched in awe.",
      "images": [
        "Old Steam Train at Railville Station",
        "Jamie and Bolt"
      ]
    },
    {
      "pageNum": 2,
      "text": "The conductor, Mr. Whistler, invited them aboard. Today, they'd learn about trains, traveling from steam to electric innovations.",
      "images": [
        "Conductor Whistler",
        "Boarding the Train"
      ]
    },
    {
      "pageNum": 3,
      "text": "First stop: the Steam Age. Mr. Whistler explained, \"Steam trains, powered by coal, changed how we travel and trade.\"",
      "images": [
        "The Steam Age Exhibit",
        "Coal-Powered Steam Train"
      ]
    },
    {
      "pageNum": 4,
      "text": "Next, they zoomed to the Diesel Era. \"Diesel trains, more efficient than steam, became the backbone of transportation,\" Mr. Whistler noted.",
      "images": [
        "The Diesel Era Exhibit",
        "A Diesel Train"
      ]
    },
    {
      "pageNum": 5,
      "text": "Electric trains stole the show at the third stop. \"Electricity powers these trains, making them faster and cleaner,\" the conductor beamed.",
      "images": [
        "Electric Train Exhibit",
        "Fast Electric Train"
      ]
    },
    {
      "pageNum": 6,
      "text": "The fourth stop presented the marvel of bullet trains. Mr. Whistler exclaimed, \"These can travel up to 320 km/h!\"",
      "images": [
        "Bullet Train Exhibit",
        "Speeding Bullet Train"
      ]
    },
    {
      "pageNum": 7,
      "text": "Innovation continued with the Maglev train display. \"Magnetic levitation lets these trains float above tracks, reducing friction,\" Mr. Whistler elucidated.",
      "images": [
        "Maglev Train Exhibit",
        "Floating Maglev Train"
      ]
    },
    {
      "pageNum": 8,
      "text": "Their last stop was the future of trains. With eyes wide, they viewed concepts of solar-powered and hyperloop trains.",
      "images": [
        "Future of Trains Exhibit",
        "Concept Hyperloop Train"
      ]
    },
    {
      "pageNum": 9,
      "text": "As the journey ended, Jamie and Bolt were amazed. Trains had evolved greatly, connecting the world in ways once unimaginable.",
      "images": [
        "Jamie and Bolt Amazed",
        "World Connected by Trains"
      ]
    },
    {
      "pageNum": 10,
      "text": "Stepping off the train, Jamie looked up at Mr. Whistler, \"Thank you, I'll never look at trains the same way again.\"",
      "images": [
        "Grateful Jamie",
        "Mr. Whistler's Smile"
      ]
    }
  ]
}


const dummy_user_id = "dummy"
const dummy_search = "trains"


const BookTestPage = () => {

  const [book, setBook] = useState(undefined);
  const [generatingBook, setGeneratingBook] = useState(false);
  const [bgArray, setBgArray] = useState(undefined)

  const handleGenClick = async () => {
    setGeneratingBook(true);
    
    // REAL
    const data = await getGenerateBook(dummy_user_id, dummy_search);
    console.log(data);
    setBook(data);
    
    // testing
    // setBook(DummyBook);
    setGeneratingBook(false);
  }

  return (
    <div className="h-screen w-screen bg-neutral-100 relative p-10 flex justify-center items-center">
      <div className="absolute top-0 right-0 w-full">
        <DefaultBar />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[800px] h-[580px] justify-center">
          {book !== undefined ?
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
      <div className="hover-trigger absolute bottom-0 w-full h-20"></div> {/* Invisible area to trigger hover */}
      <div className="hover-target absolute bottom-20 w-full opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="w-full flex justify-center">
          <div className="w-1/3 min-w-min bg-gray-200 h-[50px] flex items-center justify-end rounded-full p-2 gap-10">
            <Button className="rounded-full" variant="outline" onClick={() => handleGenClick()}>
              Generate Book
            </Button>
            <Button className="rounded-full" variant="outline"> 
              Generate Background Image
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BookTestPage;
