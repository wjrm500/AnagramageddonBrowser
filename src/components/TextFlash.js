import React, { useContext } from 'react'
import { FLASH_NEUTRAL, FLASH_SCORE, SetTextFlashContext } from '../contexts/TextFlashContext'

const TextFlash = ({visible, textFlash}) => {
  const setTextFlash = useContext(SetTextFlashContext)
  const onAnimationEnd = () => setTextFlash({content: "", status: FLASH_NEUTRAL})
  let classNames = []
  if (visible) {
    classNames.push("fontGrow")
  }
  if (textFlash.status == FLASH_SCORE) {
    classNames.push("flashScore")
  } else {
    classNames.push("notFlashScore")
  }
  return (
    <div
      id="textFlash"
      style={{color: textFlash.status}}
      className={classNames.join(" ")}
      onAnimationEnd={onAnimationEnd}
      >
      {textFlash.content}
    </div>
  )
}

export default TextFlash