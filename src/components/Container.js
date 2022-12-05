import React, { useContext, useReducer } from 'react'
import { ActivePlayerContext, SwitchActivePlayerContext } from '../contexts/ActivePlayerContext'
import { CountdownContext, INIT_COUNTDOWN, SetCountdownContext } from '../contexts/CountdownContext'
import PlayerContext from '../contexts/PlayerContext'
import { ACTION_CLICK_BOX, RequiredActionContext, SetRequiredActionContext } from '../contexts/RequiredActionContext'
import { SetTextFlashContext } from '../contexts/TextFlashContext'
import { calculateWinningPlayer } from '../utilities/calculateWinningPlayer'
import Game from './Game'
import Header from './Header'

const Container = () => {
  const dimension = 5
  const winningScore = dimension * 1
  const players = useContext(PlayerContext)
  const winningPlayer = calculateWinningPlayer(winningScore, players)
  const countdownReducer = (_, countdownSeconds) => countdownSeconds
  const [countdownSeconds, setCountdownSeconds] = useReducer(countdownReducer, INIT_COUNTDOWN)
  const setRequiredActionReducer = (_, requiredAction) => requiredAction
  const [requiredAction, setRequiredAction] = useReducer(setRequiredActionReducer, ACTION_CLICK_BOX)
  const switchActivePlayerReducer = (activePlayer) => {
    activePlayer.turnsTaken += 1
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
                    <div id="outerContainer">
                      <Header />
                      <Game textFlash={textFlash} winningPlayer={winningPlayer} dimension={dimension} requiredAction={requiredAction} players={players} winningScore={winningScore} />
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