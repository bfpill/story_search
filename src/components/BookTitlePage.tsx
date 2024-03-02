const BookTitlePage = (props: {complementaryColor, page}) => {
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

export default BookTitlePage