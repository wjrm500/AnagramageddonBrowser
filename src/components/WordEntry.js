import React, { useContext, useState } from 'react'
import { ActivePlayerContext, SwitchActivePlayerContext } from '../contexts/ActivePlayerContext'
import { CountdownContext, SetCountdownContext } from '../contexts/CountdownContext'
import { ACTION_CLICK_BOX, ACTION_ENTER_WORD, RequiredActionContext, SetRequiredActionContext } from '../contexts/RequiredActionContext'
import { FLASH_ERROR, FLASH_SCORE, SetTextFlashContext } from '../contexts/TextFlashContext'
import { validateWord } from '../utilities/validateWord'

const WordEntry = () => {
  const requiredAction = useContext(RequiredActionContext)
  const active = requiredAction == ACTION_ENTER_WORD
  const setTextFlash = useContext(SetTextFlashContext)
  const setRequiredAction = useContext(SetRequiredActionContext)
  const activePlayer = useContext(ActivePlayerContext)
  const switchActivePlayer = useContext(SwitchActivePlayerContext)
  const countdownSeconds = useContext(CountdownContext)
  const setCountdownSeconds = useContext(SetCountdownContext)
  const [value, setValue] = useState("")
  const onClick = () => {
    if (!active) {
      setTextFlash({content: "Click a box", status: FLASH_ERROR})
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
          activePlayer.enterWord(word)
          setTextFlash({content: "+" + word.length, status: FLASH_SCORE})
          setRequiredAction(ACTION_CLICK_BOX)
          switchActivePlayer()
        })
        .catch((error) => {
          setCountdownSeconds(countdownSeconds - 5)
          setTextFlash({content: error, status: FLASH_ERROR})
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