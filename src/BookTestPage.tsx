import React, { useEffect, useState } from "react"
import { getGenerateBook } from "./api";
import { Button } from "./components/ui/button";
import Book from "./components/Book";
import { DefaultBar, HomeBar } from "./components/NavBar";

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
  "title": "Whistles and Wheels: A Train Tale",
  "pages": [
    {
      "pageNum": 1,
      "text": "In Whistleville, trains weren't just a mode of transport; they were beloved members of the community.",
      "images": [
        "Whistleville Station",
        "Happy Train"
      ],
      "background_image": "https://storage.googleapis.com/baggetters-38a7c.appspot.com/7e829a68-7616-4f6b-aa3c-fe228c050c1e",
      "background_image_query": "Countryside Tracks"
    },
    {
      "pageNum": 2,
      "text": "Benny, a bright blue engine, loved racing down the tracks, breezing past mountains and meadows.",
      "images": [
        "Benny the Engine",
        "Mountains and Meadows"
      ],
      "background_image": "https://storage.googleapis.com/baggetters-38a7c.appspot.com/53ed3459-feb1-47fc-8382-cdc87bcdddaf",
      "background_image_query": "Countryside Tracks"
    },
    {
      "pageNum": 3,
      "text": "He knew every twist and turn, thanks to the steel rails guiding his wheels, a brilliant invention enhancing travel.",
      "images": [
        "Steel Rails",
        "Twists and Turns"
      ],
      "background_image": "https://storage.googleapis.com/baggetters-38a7c.appspot.com/3125bed6-395e-41a7-a3aa-d34a289fa5bc",
      "background_image_query": "Steel Rails"
    },
    {
      "pageNum": 4,
      "text": "One day, Benny set a record, cheered on by townsfolk, embodying the spirit of Whistleville's train heritage.",
      "images": [
        "Record Setting Day",
        "Cheering Townsfolk"
      ],
      "background_image": "https://storage.googleapis.com/baggetters-38a7c.appspot.com/dab51f7a-4a61-4ee8-a98d-9352b5205f57",
      "background_image_query": "Steel Rails"
    }
  ],
  "color": "Azure"
}


const dummy_user_id = "dummy"
const dummy_search = "trains"


const BookTestPage = () => {

  const [book, setBook] = useState(undefined);
  const [generatingBook, setGeneratingBook] = useState(false);

  const handleGenClick = async () => {
    setGeneratingBook(true);

    // REAL
    const data = await getGenerateBook(dummy_user_id, dummy_search);
    console.log(data);
    setBook(data);

    // // testing
    // setBook(DummyBook);
    // setGeneratingBook(false);
  }

  return (
    <div className="h-screen w-screen relative p-4 flex flex-col justify-center items-center">
      <div className="border p-2 rounded-full flex items-center justify-center">
        <HomeBar onSearchChange={function (event: any): unknown {
          throw new Error("Function not implemented.")
        }} />
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
      <div className="absolute bottom-20 w-full">
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
