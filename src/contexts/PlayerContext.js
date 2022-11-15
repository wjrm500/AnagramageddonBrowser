import { createContext } from 'react';

const players = [
  {
    name: "William",
    color: "red"
  },
  {
    name: "Kate",
    color: "blue"
  }
]

const PlayerContext = createContext(players)

export default PlayerContext