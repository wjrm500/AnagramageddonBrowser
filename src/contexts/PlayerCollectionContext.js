import { createContext } from 'react';

const playerColors = ["red", "blue", "gold", "green"]
const PlayerCollectionContext = createContext(null)
const ModifyPlayerCollectionContext = createContext(null)

export {playerColors, PlayerCollectionContext, ModifyPlayerCollectionContext}