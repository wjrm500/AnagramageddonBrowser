import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { INIT_COUNTDOWN_SECONDS, SET_COUNTDOWN_SECONDS } from '../../reducers/countdownSeconds'
import { ENTER_WORD, SWITCH_ACTIVE_PLAYER } from '../../reducers/playerCollection'
import { ACTION_CLICK_BOX, ACTION_ENTER_WORD, SET_REQUIRED_ACTION } from '../../reducers/requiredAction'
import { FLASH_ERROR, FLASH_SCORE, SET_TEXT_FLASH } from '../../reducers/textFlash'
import { validateWord } from '../../utilities/validateWord'

const WordEntry = () => {
  const requiredAction = useSelector(state => state.requiredAction)
  const active = requiredAction == ACTION_ENTER_WORD
  const activePlayer = useSelector(state => state.playerCollection).getActivePlayer()
  const countdownSeconds = useSelector(state => state.countdownSeconds)
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
          dispatch({type: SET_COUNTDOWN_SECONDS, value: INIT_COUNTDOWN_SECONDS})
          dispatch({type: SET_REQUIRED_ACTION, value: ACTION_CLICK_BOX})
          dispatch({type: SWITCH_ACTIVE_PLAYER, value: null})
        })
        .catch((error) => {
          dispatch({type: SET_COUNTDOWN_SECONDS, value: countdownSeconds - 5})
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