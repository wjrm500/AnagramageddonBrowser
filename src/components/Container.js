import React from 'react'
import Grid from './Grid'
import Header from './Header'
import Instruction from './Instruction'
import ScoreNotification from './ScoreNotification'
import ScoreTable from './ScoreTable'
import WordEntry from './WordEntry'

const Container = () => {
  return (
    <div>
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