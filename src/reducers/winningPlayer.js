import { calculateWinningPlayer } from "../utilities/calculateWinningPlayer"

export const CHECK_WINNING_PLAYER = 'CHECK_WINNING_PLAYER'

export const winningPlayerReducer = (winningPlayer = null, action) => {
  switch (action.type) {
    case CHECK_WINNING_PLAYER:
      return calculateWinningPlayer(action.winningScore, action.playerCollection)
    default:
      return winningPlayer
  }
}