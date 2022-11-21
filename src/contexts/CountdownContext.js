import { createContext } from 'react';

const INIT_COUNTDOWN = 15
const CountdownContext = createContext(null)
const SetCountdownContext = createContext(null)

export {INIT_COUNTDOWN, CountdownContext, SetCountdownContext}