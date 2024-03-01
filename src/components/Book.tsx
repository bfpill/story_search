import React from "react";
import { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import Page from "./Page";

const Book = (props: { bookData }) => {
  const [pageRefs, setPageRefs] = useState(undefined)

  useEffect(() => {
    setPageRefs(Array.from({ length: props.bookData?.pages?.length }, () => React.createRef()));
  }, [props.bookData?.pages?.length]); 

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
        showCover={true}  // Ensure cover page is visible
      >
        {pageRefs?.map((ref, index) => (
          <Page key={index} number={index + 1} ref={ref} text={index < props.bookData.pages.length ? props.bookData.pages[index].text : ""}
            images={[]}
          />
        ))}
      </HTMLFlipBook>
    );

  }
};

export default Book