// import HTMLFlipBook from 'react-pageflip';
// import React from 'react';

// const Page = React.forwardRef((props: { number, children }, ref) => (
//   <div className="demoPage bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" ref={ref}>
//       <h1 className="text-xl font-bold mb-2">Page Header</h1>
//       <p className="text-base">{props.children}</p>
//       <p className="text-base">Page number: {props.number}</p>
//   </div>
// ));

// const Book = () => {
//   // Create refs for each page
//   const pageRefs = [React.useRef(null), React.useRef(null), React.useRef(null), React.useRef(null)];

//   return (
//     <HTMLFlipBook width={300}
//       height={500} className={''}
//       flippingTime={10}
//       >

//       {pageRefs.map((ref, index) => (
//         <Page key={index} number={`${index + 1}`} ref={ref}>Page text</Page>
//       ))}
//     </HTMLFlipBook>
//   );
// };

// const BookTestPage = (props: {}) => {
//   return (
//     <div className="h-screen w-screen bg-neutral-100 flex justify-center items-center">
//       <div className="w-[900px] h-[600px]">
//         <Book />
//       </div>
//     </div>
//   )

// }


// export default BookTestPage 


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
  const pageRefs = [React.useRef<HTMLDivElement>(null), React.useRef<HTMLDivElement>(null), React.useRef<HTMLDivElement>(null), React.useRef<HTMLDivElement>(null)];

  return (
    <HTMLFlipBook width={300} height={500} flippingTime={10}>
      {pageRefs.map((ref, index) => (
        <Page key={index} number={index + 1} ref={ref}>Page text</Page>
      ))}
    </HTMLFlipBook>
  );
};

const BookTestPage = () => {
  return (
    <div className="h-screen w-screen bg-neutral-100 flex justify-center items-center">
      <div className="w-[900px] h-[600px]">
        <Book />
      </div>
    </div>
  );
};

export default BookTestPage;
