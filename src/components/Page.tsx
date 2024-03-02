import React from "react";
import "./BookTestPage.css"
import BookTitlePage from "./BookTitlePage";

const PageInternals = (props: { page, complementaryColor, coverImage?, coverColor? }) => {
  console.log(props.complementaryColor);
  if (props.page.type == "front_cover" || props.page.type == "back_cover") {
    return (
      <div className="text-3xl h-full w-full">
        <BookTitlePage complementaryColor={props.complementaryColor} page={props.page} coverImage={props.coverImage} coverColor={props.coverColor}/>
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

const Page = React.forwardRef((props: { number, page, complementaryColor, coverImage?, coverColor? }, ref) => {

  return (
    <div className="demoPage shadow-xl rounded page-cover h-full w-full flex items-center justify-center"
      ref={ref} data-density="hard"
    >
      <PageInternals page={props.page} complementaryColor={props.complementaryColor} coverImage={props.coverImage} coverColor={props.coverColor}/>
    </div>
  )

  //
});

export default Page 