import { createContext } from 'react';

const ACTION_CLICK_BOX = "Click box"
const ACTION_ENTER_WORD = "Enter word"
const RequiredActionContext = createContext(null)

export {ACTION_CLICK_BOX, ACTION_ENTER_WORD, RequiredActionContext}