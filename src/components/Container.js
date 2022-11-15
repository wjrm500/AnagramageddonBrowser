import React from 'react'
import CurrentPlayerContext from '../contexts/CurrentPlayerContext'
import Grid from './Grid'
import Header from './Header'
import Instruction from './Instruction'
import ScoreNotification from './ScoreNotification'
import ScoreTable from './ScoreTable'
import TextFlash from './TextFlash'
import WinnerBanner from './WinnerBanner'
import WordEntry from './WordEntry'

const Container = () => {
  const players = [
    {
      name: "William",
      color: "red"
    },
    {
      name: "Kate",
      color: "blue"
    }
  ]
  return (
    <CurrentPlayerContext.Provider value={players[0]}>
      <div id="container">
          <TextFlash />
          <WinnerBanner />
          <Header />
          <Instruction />
          <Grid />
          <WordEntry />
          <ScoreTable />
          <ScoreNotification />
      </div>
    </CurrentPlayerContext.Provider>
  )
}

export default Container