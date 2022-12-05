import { createContext } from 'react';

const FLASH_NEUTRAL = "black"
const FLASH_SCORE = "green"
const FLASH_ERROR = "red"

const TextFlashContext = createContext(null)
const SetTextFlashContext = createContext(null)

export {FLASH_NEUTRAL, FLASH_SCORE, FLASH_ERROR, TextFlashContext, SetTextFlashContext}