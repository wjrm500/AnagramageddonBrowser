import React, { useContext, useReducer } from 'react'
import { ActivePlayerContext, SwitchActivePlayerContext } from '../contexts/ActivePlayerContext'
import PlayerContext from '../contexts/PlayerContext'
import { ACTION_CLICK_BOX, ACTION_ENTER_WORD, RequiredActionContext, SetRequiredActionContext } from '../contexts/RequiredActionContext'
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
  const activePlayerReducer = (activePlayer) => {
    const playersCopy = players.slice()
    const removeIndex = playersCopy.indexOf(activePlayer)
    playersCopy.splice(removeIndex, 1)
    const newActivePlayer = playersCopy[0]
    return newActivePlayer
  }
  const [activePlayer, switchActivePlayer] = useReducer(activePlayerReducer, players[0])
  const requiredActionReducer = (state, requiredAction) => requiredAction
  const [requiredAction, setRequiredAction] = useReducer(requiredActionReducer, ACTION_CLICK_BOX)
  return (
    <PlayerContext.Provider value={players}>
      <SwitchActivePlayerContext.Provider value={switchActivePlayer}>
        <ActivePlayerContext.Provider value={activePlayer}>
          <SetRequiredActionContext.Provider value={setRequiredAction}>
            <RequiredActionContext.Provider value={requiredAction}>
              <div id="container">
                <TextFlash />
                <WinnerBanner />
                <Header />
                <Instruction />
                <Grid />
                <WordEntry active={requiredAction == ACTION_ENTER_WORD} />
                <ScoreTable players={players} />
                <ScoreNotification />
              </div>
            </RequiredActionContext.Provider>
          </SetRequiredActionContext.Provider>
        </ActivePlayerContext.Provider>
      </SwitchActivePlayerContext.Provider>
    </PlayerContext.Provider> 
  )
}

export default Container