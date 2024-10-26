'use client'
import Category from "@/components/Category";
import Dropzone from "@/components/Dropzone";
import { useEffect, useState } from "react";
import TextField from "@/components/TextField";
import Loader from "@/components/Loader";
import { processText, processImage } from "@/utils/openai";
import AnswerCard from "@/components/AnswerCard";
import Button from "@/components/Button";
import MathRenderer from "@/components/MathRenderer";


export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Misc');
  const [typedText, setTypedText] = useState('');
  const [image, setImage] = useState(null);
  const [imageResponse, setImageResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResposne] = useState()
  const [isResponse, setIsResponse] = useState(false)

  const handleSolve = async () => {
    setIsLoading(true)
    try {
      if (image) {
        const result = await processImage(image);
        setImageResponse(result);
        setIsResponse(true)
        setIsLoading(false)
      } else if (typedText) {
        const result = await processText(typedText);
        setAiResposne(result);
        setIsResponse(true)
        setIsLoading(false)
      } else {
        return
      }
    } catch (error) {
      console.error('Error handling solve:', error);
      setIsLoading(false)
    }
  };


  if (isLoading) return <Loader />;
  return (
    <>
      {isResponse ?
        (<>
          {image ? (
            <div className='mb-5 text-sm text-[#94A3B8] rounded-md p-3 border border-[#9D69FF]'>
              <span>Answer:</span>
              <div className='font-medium text-white'><MathRenderer text={imageResponse} /></div>
            </div>
          ) : <AnswerCard answer={aiResponse?.answer} question={typedText} />}
          <Button action={() => window.location.reload()} value={'Done'} />
        </>) :
        <div className="lg:mx-32">
          <Category category={selectedCategory} setCategory={setSelectedCategory} />
          <Dropzone image={image} setImage={setImage} setTypedText={setTypedText} />
          {image && <Button action={handleSolve} value={'Submit'} />}
          {!image && (
            <TextField
              typedText={typedText} setTypedText={setTypedText}
              handleSolve={handleSolve}
            />
          )}
        </div>}
    </>
  )
}
