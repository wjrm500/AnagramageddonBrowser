import React, { useState } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from '../reducers/rootReducer'
import Game from './game/Game'
import Header from './Header'
import Setup from './setup/Setup'

const store = createStore(rootReducer)

const Container = () => {
  const [setupActive, setSetupActive] = useState(true)
  return (
    <Provider store={store}>
      <div id="container">
        <Header />
        {
          setupActive
          ? <Setup setSetupActive={setSetupActive} />
          : <Game />
        }
      </div>
    </Provider>
  )
}

export default Container