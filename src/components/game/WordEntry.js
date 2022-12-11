import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DECREMENT_COUNTDOWN, RESET_COUNTDOWN } from '../../reducers/countdownSeconds'
import { ENTER_WORD, SWITCH_ACTIVE_PLAYER } from '../../reducers/playerCollection'
import { ACTION_CLICK_BOX, ACTION_ENTER_WORD, SET_REQUIRED_ACTION } from '../../reducers/requiredAction'
import { FLASH_ERROR, FLASH_SCORE, SET_TEXT_FLASH } from '../../reducers/textFlash'
import { validateWord } from '../../utilities/validateWord'

const WordEntry = () => {
  const requiredAction = useSelector(state => state.requiredAction)
  const active = requiredAction == ACTION_ENTER_WORD
  const activePlayer = useSelector(state => state.playerCollection).getActivePlayer()
  const dispatch = useDispatch()
  const [value, setValue] = useState("")
  const onClick = () => {
    if (!active) {
      dispatch({type: SET_TEXT_FLASH, value: {content: "Click a box", status: FLASH_ERROR}})
    }
  }
  const onChange = (e) => {
    setValue(e.target.value)
  }
  const onKeyDown = (e) => {
    if (e.key == "Enter") {
      const word = e.target.value.toUpperCase()
      validateWord(word, activePlayer)
        .then(() => {
          dispatch({type: ENTER_WORD, value: word})
          dispatch({type: SET_TEXT_FLASH, value: {content: "+" + word.length, status: FLASH_SCORE}})
          dispatch({type: RESET_COUNTDOWN})
          dispatch({type: SET_REQUIRED_ACTION, value: ACTION_CLICK_BOX})
          dispatch({type: SWITCH_ACTIVE_PLAYER})
        })
        .catch((error) => {
          dispatch({type: DECREMENT_COUNTDOWN, decrementBy: 5})
          dispatch({type: SET_TEXT_FLASH, value: {content: error, status: FLASH_ERROR}})
        })
        .finally(() => setValue(""))
    }
  }
  return (
    <div id="wordEntryContainer" className={active ? "active" : "inactive"}>
        <div className="labelContainer">
            <label>Enter a word</label>
        </div>
        <div className="inputContainer" onClick={onClick}>
            <input ref={input => input && input.focus()} id="wordEntry" type="text" value={value} disabled={!active} autoComplete="off" onChange={onChange} onKeyDown={onKeyDown} />
        </div>
    </div>
  )
}

export default WordEntry