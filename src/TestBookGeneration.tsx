import React from 'react';
import test_generate_book from './api/book_creation';

const TestBookGeneration = (props: {}) => {
  const handleGenClick = () => { 
    test_generate_book()
  }
  return (
    <div className="h-screen w-screen bg-neutral-100 flex justify-center items-center">
      <div className="w-[900px] h-[600px]">
        <button onClick={() => handleGenClick()}>TEST_GEN_PROMTP</button>
      </div>
    </div>
  )

}


export default TestBookGeneration 