import React, { useContext } from 'react'
import SetTextFlashContext from '../contexts/TextFlashContext'

const TextFlash = ({visible, textFlash}) => {
  const setTextFlash = useContext(SetTextFlashContext)
  const onAnimationEnd = () => setTextFlash({content: "", color: "black"})
  return (
    <div id="textFlash" style={{color: textFlash.color}} className={visible ? "fontGrow" : ""} onAnimationEnd={onAnimationEnd}>
      {textFlash.content}
    </div>
  )
}

export default TextFlash