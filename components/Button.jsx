import React from 'react'

const Button = ({ value, action }) => {
    return (
        <button
            onClick={action}
            className="text-white px-12 py-3 rounded-lg bg-gradient-to-r from-[#9D69FF] to-[#3E6EFF] sm:text-sm sm:px-8"
        >{value}</button>
    )
}

export default Button
