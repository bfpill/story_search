import React from "react";
import "./BookTestPage.css"

const PageInternals = (props: { page, complementaryColor }) => {
  console.log(props.complementaryColor);
  if (props.page.type == "front_cover" || props.page.type == "back_cover") {
    return (
      <div className="h-full px-8 pt-6 pb-8 mb-4 bookcover"
        style={{
          backgroundColor: props.complementaryColor
          
          }}>
        <div className="h-1/3 bg-blue" />
        <div className="h-min relative text-center select-none">
          {props.page.text}
        </div>
      </div>
    )
  }
  else {
    return (
      <div
        className="h-full px-8 pt-6 pb-8 mb-4 flex items-center justify-center bookpages"
        style={{
          backgroundImage: `url(${props.page.background_image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="h-1/3"></div>
        <div className="relative text-center  rounded-full">
          <div className="absolute inset-0 bg-white/90 shadow-lg blur-xl"></div>
          <div className="relative p-12">
            {props.page.text}
          </div>
        </div>
      </div>
    )
  }
}

const Page = React.forwardRef((props: { number, page, complementaryColor }, ref) => {

  return (
    <div className="demoPage shadow-xl rounded page-cover h-full w-full flex items-center justify-center"
      ref={ref} data-density="hard"
    >
      <PageInternals page={props.page} complementaryColor={props.complementaryColor} />
    </div>
  )

  //
});

export default Page 