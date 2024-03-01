import React from "react";

const PageInternals = (props: { page }) => {
  if (props.page.type == "front_cover") {
    return (
      <div className="h-full w-full bg-blue-100 px-8 pt-6 pb-8 mb-4">
        <div className="h-1/3 bg-blue" />
        <div className="h-min relative text-center">
          {props.page.text}
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="h-full w-full bg-white px-8 pt-6 pb-8 mb-4 relative">
        <div className="h-1/3 bg-blue"></div>
        <div className="h-min relative text-center z-10">
          {props.page.text}
        </div>
      </div>

    )
  }
}

const Page = React.forwardRef((props: { number, page }, ref) => {

  return (
    <div className="demoPage shadow-md rounded page-cover h-full w-full flex items-center justify-center"
      ref={ref} data-density="hard"
    >
      <PageInternals page={props.page} />
    </div>
  )

  //
});

export default Page 