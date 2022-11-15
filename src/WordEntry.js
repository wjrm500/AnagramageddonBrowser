import React from 'react'

const WordEntry = () => {
  return (
    <div id="word-entry-container" class="inactive">
        <div class="label-container">
            <label>Enter a word</label>
        </div>
        <div class="input-container">
            <input id="word-entry" type="text" disabled />
        </div>
    </div>
  )
}

export default WordEntry