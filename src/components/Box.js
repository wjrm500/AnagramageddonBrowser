import { React, useContext, useState } from 'react'
import CurrentPlayerContext from '../contexts/CurrentPlayerContext'
import { generateRandomLetter } from '../utilities/randomLetter'

const Box = () => {
  const [letter, setLetter] = useState(generateRandomLetter())
  const [player, setPlayer] = useState(null) // Player object
  const currentPlayer = useContext(CurrentPlayerContext)
  const onClick = () => setPlayer(currentPlayer)
  return (
    <div className="outerBox">
      <div className="innerBox"
           style={{
             backgroundColor: player ? player.color : ""
           }}
           onClick={onClick}>
        {letter}
      </div>
    </div>
  )
}

export default Box