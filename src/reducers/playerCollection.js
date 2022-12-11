import { Player } from "../non-components/Player"
import { PlayerCollection } from "../non-components/PlayerCollection"

export const playerColors = ["red", "blue", "green", "gold"]
export const ADD_PLAYERS = 'ADD_PLAYERS'
export const ENTER_WORD = 'ENTER_WORD'
export const SWITCH_ACTIVE_PLAYER = 'SWITCH_ACTIVE_PLAYERS'

export const playerCollectionReducer = (playerCollection = new PlayerCollection(), action) => {
  switch (action.type) {
    case ADD_PLAYERS:
      const players = action.value.map((playerName, idx) => new Player(playerName, playerColors[idx]))
      playerCollection.addPlayers(players)
      return playerCollection
    case ENTER_WORD:
      playerCollection.getActivePlayer().enterWord(action.value)
      return playerCollection
    case SWITCH_ACTIVE_PLAYER:
      playerCollection.switchActivePlayer()
      return playerCollection
    default:
      return playerCollection
}
}