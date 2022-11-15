import React from 'react'
import { generateRandomLetter } from './utilities/randomLetter'

const Box = () => {
  const letter = generateRandomLetter();
  return (
    <div className="outerBox">
      <div className="innerBox">
        {letter}
      </div>
    </div>
  )
}

export default Box