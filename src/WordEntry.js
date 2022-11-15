import React from 'react'

const WordEntry = () => {
  return (
    <div id="wordEntryContainer" class="inactive">
        <div class="labelContainer">
            <label>Enter a word</label>
        </div>
        <div class="inputContainer">
            <input id="word-entry" type="text" disabled />
        </div>
    </div>
  )
}

export default WordEntry