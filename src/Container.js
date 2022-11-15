import React from 'react'
import Grid from './Grid'
import Header from './Header'
import Instruction from './Instruction'
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
    </div>
  )
}

export default Container