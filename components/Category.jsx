'use client'
import React, { useState } from 'react'

const Category = ({ category, setCategory }) => {    

    // Function to handle button click
    const handleClick = (category) => {
        setCategory(category);
    };

    return (
        <div className='inline-flex space-x-3 bg-[#1E293B] bg-opacity-80 p-2 rounded-md'>
            <button onClick={() => handleClick('Misc')} className={`${category === 'Misc' ? 'bg-gradient-to-r from-[#9D69FF] to-[#3E6EFF]' : 'bg-[#0F172A] text-[#94A3B8]'} text-white p-2 rounded-md sm:text-xs`}>Misc</button>
            <button onClick={() => handleClick('Math')} className={`${category === 'Math' ? 'bg-gradient-to-r from-[#9D69FF] to-[#3E6EFF]' : 'bg-[#0F172A] text-[#94A3B8]'} text-white p-2 rounded-md sm:text-xs`}
            >Math</button>
        </div>
    );
}

export default Category;
