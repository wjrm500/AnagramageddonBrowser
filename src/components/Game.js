import React from 'react'
import Grid from './Grid'
import Instruction from './Instruction'
import ScoreNotification from './ScoreNotification'
import ScoreTable from './ScoreTable'
import TextFlash from './TextFlash'
import WinnerBanner from './WinnerBanner'
import WordEntry from './WordEntry'

const Game = ({winningPlayer, dimension, winningScore}) => {
  return (
    <div class="innerContainer">
      <TextFlash />
      {
        winningPlayer != null
        ? <WinnerBanner winningPlayer={winningPlayer} />
        : ""
      }
      <Instruction winningPlayer={winningPlayer} />
      <Grid dimension={dimension} />
      <WordEntry />
      <ScoreTable />
      <ScoreNotification winningScore={winningScore} />
    </div>
  )
}

export default Game