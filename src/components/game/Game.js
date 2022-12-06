import React from 'react'
import Grid from './Grid'
import Instruction from './Instruction'
import ScoreNotification from './ScoreNotification'
import ScoreTable from './ScoreTable'
import TextFlash from './TextFlash'
import WinnerBanner from './WinnerBanner'
import WordEntry from './WordEntry'

const Game = ({winningPlayer}) => {
  return (
    <div id="gameContainer">
      <TextFlash />
      {
        winningPlayer != null
        ? <WinnerBanner winningPlayer={winningPlayer} />
        : ""
      }
      <Instruction winningPlayer={winningPlayer} />
      <Grid />
      <WordEntry />
      <ScoreTable />
      <ScoreNotification />
    </div>
  )
}

export default Game