import React, { useContext, useReducer } from 'react'
import { ActivePlayerContext, SwitchActivePlayerContext } from '../contexts/ActivePlayerContext'
import { CountdownContext, INIT_COUNTDOWN, SetCountdownContext } from '../contexts/CountdownContext'
import { GridSizeContext, INIT_GRID_SIZE, SetGridSizeContext } from '../contexts/GridSizeContext'
import PlayerContext from '../contexts/PlayerContext'
import { ACTION_CLICK_BOX, RequiredActionContext, SetRequiredActionContext } from '../contexts/RequiredActionContext'
import { SetSetupActiveContext, SetupActiveContext } from '../contexts/SetupActiveContext'
import { SetTextFlashContext, TextFlashContext } from '../contexts/TextFlashContext'
import { SetWinningScoreContext, WinningScoreContext } from '../contexts/WinningScoreContext'
import { calculateWinningPlayer } from '../utilities/calculateWinningPlayer'
import Game from './game/Game'
import Header from './Header'
import Setup from './setup/Setup'

const Container = () => {
  const setupActiveReducer = (_, setupActive) => setupActive
  const [setupActive, setSetupActive] = useReducer(setupActiveReducer, true)
  const gridSizeReducer = (_, gridSize) => gridSize
  const [gridSize, setGridSize] = useReducer(gridSizeReducer, INIT_GRID_SIZE)
  const winningScoreReducer = (_, winningScore) => winningScore
  const [winningScore, setWinningScore] = useReducer(winningScoreReducer, gridSize * 5)
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
    <SetSetupActiveContext.Provider value={setSetupActive}>
      <SetupActiveContext.Provider value={setupActive}>
        <SetGridSizeContext.Provider value={setGridSize}>
          <GridSizeContext.Provider value={gridSize}>
            <SetWinningScoreContext.Provider value={setWinningScore}>
              <WinningScoreContext.Provider value={winningScore}>
                <SetCountdownContext.Provider value={setCountdownSeconds}>
                  <CountdownContext.Provider value={countdownSeconds}>
                    <SetTextFlashContext.Provider value={setTextFlash}>
                      <TextFlashContext.Provider value={textFlash}>
                        <PlayerContext.Provider value={players}>
                          <SwitchActivePlayerContext.Provider value={switchActivePlayer}>
                            <ActivePlayerContext.Provider value={activePlayer}>
                              <SetRequiredActionContext.Provider value={setRequiredAction}>
                                <RequiredActionContext.Provider value={requiredAction}>
                                  <div id="container">
                                    <Header />
                                    {
                                      setupActive
                                      ? <Setup />
                                      : <Game winningPlayer={winningPlayer} />
                                    }
                                  </div>
                                </RequiredActionContext.Provider>
                              </SetRequiredActionContext.Provider>
                            </ActivePlayerContext.Provider>
                          </SwitchActivePlayerContext.Provider>
                        </PlayerContext.Provider> 
                      </TextFlashContext.Provider>
                    </SetTextFlashContext.Provider>
                  </CountdownContext.Provider>
                </SetCountdownContext.Provider>
              </WinningScoreContext.Provider>
            </SetWinningScoreContext.Provider>
          </GridSizeContext.Provider>
        </SetGridSizeContext.Provider>
      </SetupActiveContext.Provider>
    </SetSetupActiveContext.Provider>
  )
}

export default Container