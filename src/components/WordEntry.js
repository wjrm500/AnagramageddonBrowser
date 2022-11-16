import React, { useContext, useState } from 'react'
import { ActivePlayerContext, SwitchActivePlayerContext } from '../contexts/ActivePlayerContext'
import PlayerContext from '../contexts/PlayerContext'
import { ACTION_CLICK_BOX, SetRequiredActionContext } from '../contexts/RequiredActionContext'

const WordEntry = ({active}) => {
  const setRequiredAction = useContext(SetRequiredActionContext)
  const activePlayer = useContext(ActivePlayerContext)
  const switchActivePlayer = useContext(SwitchActivePlayerContext)
  // const players = useContext(PlayerContext)
  const [value, setValue] = useState("")
  const onChange = (e) => {
    setValue(e.target.value)
  }
  const onKeyDown = (e) => {
    if (e.key == "Enter") {
      activePlayer.score += e.target.value.length
      setValue("")
      setRequiredAction(ACTION_CLICK_BOX)
      switchActivePlayer()
    }
  }
  
  return (
    <div id="wordEntryContainer" className={active ? "active" : "inactive"}>
        <div className="labelContainer">
            <label>Enter a word</label>
        </div>
        <div className="inputContainer">
            <input ref={input => input && input.focus()} id="wordEntry" type="text" value={value} disabled={!active} onChange={onChange} onKeyDown={onKeyDown}  />
        </div>
    </div>
  )
}

export default WordEntry