import React, { useContext, useState } from 'react'
import { ActivePlayerContext, SwitchActivePlayerContext } from '../contexts/ActivePlayerContext'
import { ACTION_CLICK_BOX, SetRequiredActionContext } from '../contexts/RequiredActionContext'
import SetTextFlashContext from '../contexts/TextFlashContext'
import { validateWord } from '../utilities/validateWord'

const WordEntry = ({active}) => {
  const setTextFlash = useContext(SetTextFlashContext)
  const setRequiredAction = useContext(SetRequiredActionContext)
  const activePlayer = useContext(ActivePlayerContext)
  const switchActivePlayer = useContext(SwitchActivePlayerContext)
  const [value, setValue] = useState("")
  const onClick = () => {
    if (!active) {
      setTextFlash({content: "Click a box", color: "red"})
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
          setTextFlash({content: "+" + word.length, color: "limegreen"})
          setValue("")
          setRequiredAction(ACTION_CLICK_BOX)
          switchActivePlayer()
        })
        .catch((error) => setTextFlash({content: error, color: "red"}))
    }
  }
  return (
    <div id="wordEntryContainer" className={active ? "active" : "inactive"}>
        <div className="labelContainer">
            <label>Enter a word</label>
        </div>
        <div className="inputContainer" onClick={onClick}>
            <input ref={input => input && input.focus()} id="wordEntry" type="text" value={value} disabled={!active} autoComplete={false} onChange={onChange} onKeyDown={onKeyDown} />
        </div>
    </div>
  )
}

export default WordEntry