import React from "react";

const Page = React.forwardRef((props: { number, text, images }, ref) => (
  <div className="demoPage shadow-md bg-white rounded px-8 pt-6 pb-8 mb-4 page-cover h-full w-full flex items-center justify-center"
    ref={ref} data-density="hard"
  >
    <div className="h-1/3" />
    <div className="h-min relative text-center">
      {props.text}
    </div>
  </div>
));

export default Page 