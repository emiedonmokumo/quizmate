import React from 'react'

const Textzone = ({ typedText, setTypedText }) => {
    return (
        <div className="text-white mt-8">
            <div className="relative w-full">
                <textarea
                    className="p-5 rounded-lg w-full outline-none border-2 border-[#3E6EFF] bg-transparent"
                    placeholder="Type your question here"
                    rows="10"
                    value={typedText}
                    onChange={(e) => setTypedText(e.target.value)}
                ></textarea>
            </div>
        </div>
    )
}

export default Textzone
