import React from 'react'

const TextField = ({ typedText, setTypedText, handleSolve }) => {
    return (
        <div className="text-white mt-8">
            <p className="mb-5 sm:text-sm">Or type...</p>
            <div className="relative w-full">
                <textarea
                    className="p-5 rounded-lg w-full outline-none border-2 border-[#3E6EFF] bg-transparent sm:text-sm text-[#94A3B8]"
                    placeholder="Type your question here"
                    rows="10"
                    value={typedText}
                    onChange={(e) => setTypedText(e.target.value)}
                ></textarea>
                <button
                    className="absolute bottom-4 right-2 text-white bg-[#3E6EFF] px-12 py-3 rounded-lg bg-gradient-to-r from-[#9D69FF] to-[#3E6EFF] sm:text-sm sm:px-8"
                    onClick={handleSolve}
                >
                    Solve
                </button>
            </div>
        </div>
    )
}

export default TextField
