import { createContext } from 'react';
import { Player } from '../non-components/Player';

const players = [
  new Player("William", "red"),
  new Player("Kate", "blue")
]

const PlayerContext = createContext(players)

export default PlayerContext