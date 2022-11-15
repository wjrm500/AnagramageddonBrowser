import React from 'react'
import Grid from './Grid'
import Header from './Header'
import Instruction from './Instruction'
import ScoreNotification from './ScoreNotification'
import ScoreTable from './ScoreTable'
import TextFlash from './TextFlash'
import WinnerBanner from './WinnerBanner'
import WordEntry from './WordEntry'

const Container = () => {
  return (
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
  )
}

export default Container