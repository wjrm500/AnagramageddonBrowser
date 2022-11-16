import React, { useContext, useReducer } from 'react'
import ActivePlayerContext from '../contexts/ActivePlayerContext'
import PlayerContext from '../contexts/PlayerContext'
import { ACTION_CLICK_BOX, ACTION_ENTER_WORD, RequiredActionContext, RequiredActionDispatchContext } from '../contexts/RequiredActionContext'
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

  const requiredActionReducer = (state, requiredAction) => requiredAction
  const [requiredActionState, requiredActionDispatch] = useReducer(requiredActionReducer, ACTION_CLICK_BOX)
  return (
    <PlayerContext.Provider value={players}>
      <ActivePlayerContext.Provider value={players[0]}>
        <RequiredActionDispatchContext.Provider value={requiredActionDispatch}>
          <RequiredActionContext.Provider value={requiredActionState}>
            <div id="container">
              <TextFlash />
              <WinnerBanner />
              <Header />
              <Instruction />
              <Grid />
              <WordEntry active={requiredActionState == ACTION_ENTER_WORD} />
              <ScoreTable />
              <ScoreNotification />
            </div>
          </RequiredActionContext.Provider>
        </RequiredActionDispatchContext.Provider>
      </ActivePlayerContext.Provider>
    </PlayerContext.Provider> 
  )
}

export default Container