import React from "react"
import HTMLFlipBook from "react-pageflip";

const Page = React.forwardRef((props: { number, children }, ref) => (
  <div className="demoPage bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 page-cover" ref={ref} data-density="hard">
      <h1 className="text-xl font-bold mb-2">Page Header</h1>
      <p className="text-base">{props.children}</p>
      <p className="text-base">Page number: {props.number}</p>
    </div>
  ));
  
  const Book = () => {
    // Create refs for each page
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
          <Page key={index} number={index + 1} ref={ref}>
            {index < 7 ? "Page text" : ""} {/* Display "Page text" for the first 7 pages, otherwise empty */}
          </Page>
        ))}
      </HTMLFlipBook>
    );
  };
  
  const BookTestPage = () => {
    return (
      <div className="h-screen w-screen bg-neutral-100 flex justify-center items-center">
        <div className="w-[800px] h-[580px] justify-center">
          <Book />
        </div>
      </div>
    );
  };
  
  export default BookTestPage;
  