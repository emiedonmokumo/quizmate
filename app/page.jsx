'use client'
import Category from "@/components/Category";
import Dropzone from "@/components/Dropzone";
import { useEffect, useState } from "react";
import TextField from "@/components/TextField";
import Spinner from "@/components/spinner";
import extractText from "@/utils/extractText";
import Textzone from "@/components/Textzone";
import { openai } from "@/utils/openai";
import AnswerCard from "@/components/AnswerCard";
import Button from "@/components/Button";
import { useSession } from "next-auth/react";


export default function Home() {
  const { data: session, status } = useSession();
  const [selectedCategory, setSelectedCategory] = useState('Misc');
  const [typedText, setTypedText] = useState('');
  // const [textfield, setTextfield] = useState('')
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [aiResponse, setAiResposne] = useState()
  const [isResponse, setIsResponse] = useState(false)

  const handleSolve = async () => {
    setIsLoading(true)
    try {
      const result = await openai(typedText);
      setAiResposne(result);
      setIsResponse(true)
      setIsLoading(false)
    } catch (error) {
      console.error('Error handling solve:', error);
      setIsLoading(false)
    }
  };


  useEffect(() => {
    const getText = async () => {
      if (image) {
        setTypedText(await extractText(image))
      }
    }
    getText()

  }, [image])

  useEffect(() => {
    if (status === "loading") return; 
    if (!session) {
      console.log("User not logged in");
    } else {
      console.log("User logged in:", session.user);
    }
  }, [session, status]);


  if (isLoading) return <Spinner />;

  return (
    <>
      {isResponse ?
        (<>
          <AnswerCard answer={aiResponse?.answer} question={typedText} />
          <Button action={() => window.location.reload()} value={'Done'} />
        </>) :
        <div className="lg:mx-32">
          <Category category={selectedCategory} setCategory={setSelectedCategory} />
          <Dropzone image={image} setImage={setImage} setTypedText={setTypedText} />
          {image && (
            <div>
              <Textzone typedText={typedText} setTypedText={setTypedText} />
              <Button action={handleSolve} value={'Submit'} />
            </div>
          )}
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
