import React from "react";
import { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import "./BookTestPage.css"


const Book = (props: { bookData }) => {
  const [pageRefs, setPageRefs] = useState(undefined)
  const [book, setBook] = useState(props.bookData)

  useEffect(() => {
    setPageRefs(Array.from({ length: props.bookData?.pages?.length + 2 }, () => React.createRef()));

    const newBook = { ...book, pages: [...book.pages] };
    if (newBook.pages[0]?.type !== "front_cover") {
      newBook.pages.unshift({ type: "front_cover", text: newBook.title });
    }

    if (newBook.pages[newBook.pages.length - 1]?.type !== "back_cover") {
      if (newBook.pages.length % 2 != 0) {
        newBook.pages.push({ type: "back_cover", text: "" });
      }
    }

    if (newBook !== book) {
      setBook(newBook);
    }

  }, [props.bookData]);

  if (pageRefs) {
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
        showCover={true}
      >
        {pageRefs?.map((ref, index) => (
          <div className="text-3xl">
            <Page key={index}
              number={index + 1}
              ref={ref}
              page={book.pages[index]}
              complementaryColor={book.complementaryColor}
            />
          </div>
        ))}
      </HTMLFlipBook>
    );

  }
};

export default Book