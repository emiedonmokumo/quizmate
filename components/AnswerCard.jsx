import React from 'react'

const AnswerCard = ({ answer, question }) => {
  return (
    <div className='mb-5 text-sm text-[#94A3B8] rounded-md p-3 border border-[#9D69FF]'>
      <span>Question: </span>
      <h3 className='mb-5'>{question}</h3>
      <span>Answer:</span>
      <h4 className='font-medium text-white'>{answer}</h4>
    </div>
  )
}

export default AnswerCard
