import React from 'react'
import { ACTION_ENTER_WORD } from '../contexts/RequiredActionContext'
import Grid from './Grid'
import Instruction from './Instruction'
import ScoreNotification from './ScoreNotification'
import ScoreTable from './ScoreTable'
import TextFlash from './TextFlash'
import WinnerBanner from './WinnerBanner'
import WordEntry from './WordEntry'

const Game = ({textFlash, winningPlayer, dimension, requiredAction, players, winningScore}) => {
  return (
    <div class="innerContainer">
      <TextFlash textFlash={textFlash} />
      {
        winningPlayer != null
        ? <WinnerBanner winningPlayer={winningPlayer} />
        : ""
      }
      <Instruction winningPlayer={winningPlayer} />
      <Grid dimension={dimension} />
      <WordEntry active={requiredAction == ACTION_ENTER_WORD} />
      <ScoreTable players={players} />
      <ScoreNotification winningScore={winningScore} />
    </div>
  )
}

export default Game