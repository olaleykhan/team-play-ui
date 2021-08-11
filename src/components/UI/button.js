import React from 'react'

const button = ({ bg, children }) => {
    const classes = `focus:outline-none px-4 py-2 rounded focus:ring-2 focus:ring-${bg}-700  bg-${bg}-400 hover:bg-${bg}-500 text-white color-white  font-bold ... `
    return (
        <button className={classes}>
            {children}
        </button>
    )
}

button.defaultProps = {
    bg: 'green'
}

export default button