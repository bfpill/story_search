import HTMLFlipBook from 'react-pageflip';

const Page = (props: { number: string }) => {
  

}

const Book = () => {
  return (
    <HTMLFlipBook width={300}
      height={500} className={''}
      startPage={0} size={'fixed'} minWidth={0}
      maxWidth={0} minHeight={0} maxHeight={0}
      drawShadow={false} flippingTime={0}
      usePortrait={false} startZIndex={0}
      autoSize={false} maxShadowOpacity={0}
      showCover={false} mobileScrollSupport={false}
      clickEventForward={false} useMouseEvents={false}
      swipeDistance={0} showPageCorners={false}
      disableFlipByClick={false}>

      <Page number="1">Page text</Page>
      <Page number="2">Page text</Page>
      <Page number="3">Page text</Page>
      <Page number="4">Page text</Page>
    </HTMLFlipBook>
  )
}

const BookTestPage = (props: {}) => {
  return (
    <div className="h-screen w-screen bg-neutral-100 flex justify-center items-center">
      <div className="w-[900px] h-[600px]">
        <Book />
      </div>
    </div>
  )

}


export default BookTestPage 