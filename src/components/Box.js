import React, { useContext, useState } from 'react'
import CurrentPlayerContext from '../contexts/CurrentPlayerContext'
import { generateRandomLetter } from '../utilities/randomLetter'

const Box = ({defaultPlayer}) => {
  const [letter, setLetter] = useState(generateRandomLetter())
  const [player, setPlayer] = useState(defaultPlayer) // Player object
  const currentPlayer = useContext(CurrentPlayerContext)
  const onClick = () => setPlayer(currentPlayer)
  return (
    <div className="outerBox">
      <div
        className="innerBox"
        style={{
          backgroundColor: player ? player.color : "",
          color: player ? "white" : ""
        }}
        onClick={onClick}
        >
        {letter}
      </div>
    </div>
  )
}

export default Box