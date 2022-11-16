import React from 'react'

const WordEntry = ({active}) => {
  return (
    <div id="wordEntryContainer" className={active ? "active" : "inactive"}>
        <div className="labelContainer">
            <label>Enter a word</label>
        </div>
        <div className="inputContainer">
            <input id="word-entry" type="text" disabled />
        </div>
    </div>
  )
}

export default WordEntry