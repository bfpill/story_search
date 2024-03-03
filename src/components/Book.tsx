import React from "react";
import { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import Page from "./Page";
import "./BookTestPage.css"


const Book = (props: { bookData, coverImage?, coverColor?}) => {
  const [pageRefs, setPageRefs] = useState(undefined)

  useEffect(() => {
    console.log("PROPS BOOKDATA", props.bookData)
    setPageRefs(Array.from({ length: props.bookData?.pages?.length }, () => React.createRef()));
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
        data-density="hard"
        showCover={true} className={""} style={undefined} size={"fixed"}
        startPage={0} minWidth={0} maxWidth={0} minHeight={0} maxHeight={0}
        drawShadow={false} usePortrait={false} startZIndex={0}
        autoSize={false} mobileScrollSupport={false}
        useMouseEvents={false} swipeDistance={0}
        showPageCorners={false}
      >
        {pageRefs?.map((ref, index) => (
          <Page key={index}
            number={index + 1}
            ref={ref}
            page={props.bookData.pages[index]}
            complementaryColor={props.bookData.complementaryColor}
            coverImage={props.coverImage}
            coverColor={props.coverColor}
          />
        ))}
      </HTMLFlipBook>
    );

  }
};

export default Book