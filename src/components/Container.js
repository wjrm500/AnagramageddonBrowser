import React, { useContext } from 'react'
import ActivePlayerContext from '../contexts/ActivePlayerContext'
import PlayerContext from '../contexts/PlayerContext'
import { ACTION_CLICK_BOX, RequiredActionContext } from '../contexts/RequiredActionContext'
import Grid from './Grid'
import Header from './Header'
import Instruction from './Instruction'
import ScoreNotification from './ScoreNotification'
import ScoreTable from './ScoreTable'
import TextFlash from './TextFlash'
import WinnerBanner from './WinnerBanner'
import WordEntry from './WordEntry'

const Container = () => {
  const players = useContext(PlayerContext)
  return (
    <PlayerContext.Provider value={players}>
      <ActivePlayerContext.Provider value={players[0]}>
        <RequiredActionContext.Provider value={ACTION_CLICK_BOX}>
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
        </RequiredActionContext.Provider>
      </ActivePlayerContext.Provider>
    </PlayerContext.Provider> 
  )
}

export default Container