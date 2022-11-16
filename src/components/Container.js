import React, { useContext, useReducer, useState } from 'react'
import { ActivePlayerContext, SwitchActivePlayerContext } from '../contexts/ActivePlayerContext'
import PlayerContext from '../contexts/PlayerContext'
import { ACTION_CLICK_BOX, ACTION_ENTER_WORD, RequiredActionContext, SetRequiredActionContext } from '../contexts/RequiredActionContext'
import { SetTextFlashContext } from '../contexts/TextFlashContext'
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
  const switchActivePlayerReducer = (activePlayer) => {
    const playersCopy = players.slice()
    const removeIndex = playersCopy.indexOf(activePlayer)
    playersCopy.splice(removeIndex, 1)
    const newActivePlayer = playersCopy[0]
    return newActivePlayer
  }
  const [activePlayer, switchActivePlayer] = useReducer(switchActivePlayerReducer, players[0])
  const setRequiredActionReducer = (_, requiredAction) => requiredAction
  const [requiredAction, setRequiredAction] = useReducer(setRequiredActionReducer, ACTION_CLICK_BOX)
  const textFlashReducer = (_, textFlash) => textFlash
  const [textFlash, setTextFlash] = useReducer(textFlashReducer, {content: "", color: "black"})
  return (
    <SetTextFlashContext.Provider value={setTextFlash}>
      <PlayerContext.Provider value={players}>
        <SwitchActivePlayerContext.Provider value={switchActivePlayer}>
          <ActivePlayerContext.Provider value={activePlayer}>
            <SetRequiredActionContext.Provider value={setRequiredAction}>
              <RequiredActionContext.Provider value={requiredAction}>
                <div id="container">
                  <TextFlash textFlash={textFlash} />
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
    </SetTextFlashContext.Provider>
  )
}

export default Container