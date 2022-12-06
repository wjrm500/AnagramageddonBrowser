import React, { useReducer } from 'react'
import { CountdownContext, INIT_COUNTDOWN, SetCountdownContext } from '../contexts/CountdownContext'
import { GridSizeContext, INIT_GRID_SIZE, SetGridSizeContext } from '../contexts/GridSizeContext'
import { ModifyPlayerCollectionContext, PlayerCollectionContext, playerColors } from '../contexts/PlayerCollectionContext'
import { ACTION_CLICK_BOX, RequiredActionContext, SetRequiredActionContext } from '../contexts/RequiredActionContext'
import { SetSetupActiveContext, SetupActiveContext } from '../contexts/SetupActiveContext'
import { SetTextFlashContext, TextFlashContext } from '../contexts/TextFlashContext'
import { SetWinningScoreContext, WinningScoreContext } from '../contexts/WinningScoreContext'
import { Player } from '../non-components/Player'
import { PlayerCollection } from '../non-components/PlayerCollection'
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
  const playerCollectionReducer = (playerCollection, data) => {
    debugger
    switch (data.action) {
      case "addPlayers":
        const players = data.playerNames.map((playerName, idx) => new Player(playerName, playerColors[idx]))
        playerCollection.addPlayers(players)
        return playerCollection
      case "switchActivePlayer":
        playerCollection.switchActivePlayer()
        return playerCollection
    }
  }
  const [playerCollection, modifyPlayerCollection] = useReducer(playerCollectionReducer, new PlayerCollection())
  const winningPlayer = calculateWinningPlayer(winningScore, playerCollection)
  const countdownReducer = (_, countdownSeconds) => countdownSeconds
  const [countdownSeconds, setCountdownSeconds] = useReducer(countdownReducer, INIT_COUNTDOWN)
  const setRequiredActionReducer = (_, requiredAction) => requiredAction
  const [requiredAction, setRequiredAction] = useReducer(setRequiredActionReducer, ACTION_CLICK_BOX)
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
                        <ModifyPlayerCollectionContext.Provider value={modifyPlayerCollection}>
                          <PlayerCollectionContext.Provider value={playerCollection}>
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
                          </PlayerCollectionContext.Provider>
                        </ModifyPlayerCollectionContext.Provider>
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