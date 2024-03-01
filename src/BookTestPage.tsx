

  // import React from 'react';
  // import HTMLFlipBook from 'react-pageflip';

  // const Page = React.forwardRef<HTMLDivElement, { number: number; children: React.ReactNode }>((props, ref) => (
  //   <div className="demoPage bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" ref={ref}>
  //     <h1 className="text-xl font-bold mb-2">Page Header</h1>
  //     <p className="text-base">{props.children}</p>
  //     <p className="text-base">Page number: {props.number}</p>
  //   </div>
  // ));

  // const Book = () => {
  //   // Create refs for each page
  //   const pageRefs = Array.from({ length: 7 }, () => React.useRef<HTMLDivElement>(null));

  //   return (
  //     <HTMLFlipBook width={400} height={600} flippingTime={1000} clickEventForward={false} maxShadowOpacity={0.0} disableFlipByClick={true} pageFlip="hard">
  //       {pageRefs.map((ref, index) => (
  //         <Page key={index} number={index + 1} ref={ref} >Page text</Page>
  //       ))}
  //     </HTMLFlipBook>
  //   );
  // };

  // const BookTestPage = () => {
  //   return (
  //     <div className="h-screen w-screen bg-neutral-100 flex justify-center items-center">
  //       <div className="w-[800px] h-[580px] justify-center">
  //         <Book />
  //       </div>
  //     </div>
  //   );
  // };

  // export default BookTestPage;
  import React from 'react';
  import HTMLFlipBook from 'react-pageflip';
  
  const Page = React.forwardRef<HTMLDivElement, { number: number; children: React.ReactNode }>((props, ref) => (
    <div className="demoPage bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" ref={ref}>
      <h1 className="text-xl font-bold mb-2">Page Header</h1>
      <p className="text-base">{props.children}</p>
      <p className="text-base">Page number: {props.number}</p>
    </div>
  ));
  
  const Book = () => {
    // Create refs for each page
    const pageRefs = Array.from({ length: 7 }, () => React.useRef<HTMLDivElement>(null));
  
    return (
      <HTMLFlipBook 
        width={400} 
        height={600} 
        flippingTime={1000} 
        clickEventForward={false} 
        maxShadowOpacity={0.0} 
        disableFlipByClick={true} 
        pageFlip="single" 
        showCover={true}  // Ensure cover page is visible
      >
        {pageRefs.map((ref, index) => (
          <Page key={index} number={index + 1} ref={ref} >Page text</Page>
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
  