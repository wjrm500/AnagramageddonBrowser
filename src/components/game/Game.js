import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_GRID_SIZE } from '../../reducers/gridSize'
import { CHECK_WINNING_PLAYER } from '../../reducers/winningPlayer'
import Grid from './Grid'
import Instruction from './Instruction'
import ScoreNotification from './ScoreNotification'
import ScoreTable from './ScoreTable'
import TextFlash from './TextFlash'
import WinnerBanner from './WinnerBanner'
import WordEntry from './WordEntry'

const Game = () => {
  const winningScore = useSelector(state => state.winningScore)
  const playerCollection = useSelector(state => state.playerCollection)
  console.log(useSelector(state => state.gridSize))
  const dispatch = useDispatch()
  dispatch({type: CHECK_WINNING_PLAYER, winningScore: winningScore, playerCollection: playerCollection})
  return (
    <div id="gameContainer">
      <TextFlash />
      {
        useSelector(state => state.winningPlayer) != null
        ? <WinnerBanner />
        : ""
      }
      <Instruction />
      <Grid />
      <WordEntry />
      <ScoreTable />
      <ScoreNotification />
    </div>
  )
}

export default Game