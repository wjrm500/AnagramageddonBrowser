import React, { useContext, useState } from 'react'
import { ACTION_CLICK_BOX, RequiredActionDispatchContext } from '../contexts/RequiredActionContext'

const WordEntry = ({active}) => {
  const requiredActionDispatch = useContext(RequiredActionDispatchContext)
  const [value, setValue] = useState("")
  const onChange = (e) => {
    setValue(e.target.value)
  }
  const onKeyDown = (e) => {
    if (e.key == "Enter") {
      setValue("")
      requiredActionDispatch(ACTION_CLICK_BOX)
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