import React from 'react';
import { Button } from "@/components/ui/button"
import { getGenerateBook } from './api';

const dummy_user_id = "dummy"
const dummy_search= "trains"

const TestBookGeneration = (props: {}) => {
  const handleGenClick = async () => { 
    const data = await getGenerateBook(dummy_user_id, dummy_search)
    console.log(data)
  }

  return (
    <div className="h-screen w-screen bg-neutral-100 flex justify-center items-center">
      <div className="w-[900px] h-[600px]">
        <Button onClick={() => handleGenClick()}>TEST_GEN_PROMTP</Button>
      </div>
    </div>
  )

}


export default TestBookGeneration 
