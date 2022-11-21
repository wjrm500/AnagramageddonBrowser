import React, { useContext, useReducer } from 'react'
import { ActivePlayerContext, SwitchActivePlayerContext } from '../contexts/ActivePlayerContext'
import { CountdownContext, INIT_COUNTDOWN, SetCountdownContext } from '../contexts/CountdownContext'
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
  const countdownReducer = (_, countdownSeconds) => countdownSeconds
  const [countdownSeconds, setCountdownSeconds] = useReducer(countdownReducer, INIT_COUNTDOWN)
  const setRequiredActionReducer = (_, requiredAction) => requiredAction
  const [requiredAction, setRequiredAction] = useReducer(setRequiredActionReducer, ACTION_CLICK_BOX)
  const switchActivePlayerReducer = (activePlayer) => {
    const playersCopy = players.slice()
    const removeIndex = playersCopy.indexOf(activePlayer)
    playersCopy.splice(removeIndex, 1)
    const newActivePlayer = playersCopy[0]
    setCountdownSeconds(INIT_COUNTDOWN)
    setRequiredAction(ACTION_CLICK_BOX)
    return newActivePlayer
  }
  const [activePlayer, switchActivePlayer] = useReducer(switchActivePlayerReducer, players[0])
  const textFlashReducer = (_, textFlash) => textFlash
  const [textFlash, setTextFlash] = useReducer(textFlashReducer, {content: "", color: "black"})
  return (
    <SetCountdownContext.Provider value={setCountdownSeconds}>
      <CountdownContext.Provider value={countdownSeconds}>
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
      </CountdownContext.Provider>
    </SetCountdownContext.Provider>
  )
}

export default Container