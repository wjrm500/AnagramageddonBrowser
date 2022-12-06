import { createContext } from 'react';

const playerColors = ["red", "blue", "gold", "green"]
const ADD_PLAYERS = "addPlayers"
const SWITCH_ACTIVE_PLAYER = "switchActivePlayer"
const PlayerCollectionContext = createContext(null)
const ModifyPlayerCollectionContext = createContext(null)

export {playerColors, ADD_PLAYERS, SWITCH_ACTIVE_PLAYER, PlayerCollectionContext, ModifyPlayerCollectionContext}