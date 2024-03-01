import React from "react"
import HTMLFlipBook from "react-pageflip";

const books = [
  {
    "title": "Book 1",
    "id": 123,
    "pages": [
      {
        "pageNum": 1,
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "images": [
          { "src": "image1.jpg", "position": { "x": 100, "y": 100 } },
          { "src": "image2.jpg", "position": { "x": 200, "y": 200 } }
        ]
      },
      {
        "pageNum": 2,
        "text": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "images": [
          { "src": "image3.jpg", "position": { "x": 50, "y": 50 } }
        ]
      },
      {
        "pageNum": 3,
        "text": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "images": []
      },
      {
        "pageNum": 4,
        "text": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "images": []
      },
      {
        "pageNum": 5,
        "text": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "images": []
      },
      {
        "pageNum": 6,
        "text": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        "images": []
      },
      {
        "pageNum": 7,
        "text": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        "images": []
      }
    ]
  }

]

const Page = React.forwardRef((props: { number, text, images }, ref) => (
  <div className="demoPage shadow-md bg-white rounded px-8 pt-6 pb-8 mb-4 page-cover h-full w-full flex items-center justify-center"
    ref={ref} data-density="hard"
  >
    <div className="h-1/3"/>
    <div className="h-min relative text-center">
      {props.text}
    </div>
  </div>
));


const Book = (props: { bookData }) => {
  const pageRefs = Array.from({ length: 8 }, () => React.useRef<HTMLDivElement>(null)); // Including the empty back page

  return (
    <HTMLFlipBook
      width={400}
      height={600}
      flippingTime={1000}
      clickEventForward={false}
      maxShadowOpacity={0.0}
      disableFlipByClick={true}
      // pageFlip="single" 
      data-density="hard"
      showCover={true}  // Ensure cover page is visible
    >
      {pageRefs.map((ref, index) => (
        <Page key={index} number={index + 1} ref={ref} text={index < 7 ? props.bookData.pages[index].text : ""}
          images={[]}
        />
      ))}
    </HTMLFlipBook>
  );
};

const BookTestPage = () => {
  return (
    <div className="h-screen w-screen bg-neutral-100 flex justify-center items-center">
      <div className="w-[800px] h-[580px] justify-center">
        <Book bookData={books[0]} />
      </div>
    </div>
  );
};

export default BookTestPage;
