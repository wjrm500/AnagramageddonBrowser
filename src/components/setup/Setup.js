import React from 'react'

const Setup = () => {
  return (
    <div class="formContainer">
      <form id="setupForm">
        <div className="formComponent">
          <label>Number of players</label>
          <input type="number" disabled value="2" />
        </div>
        <div className="formComponent">
          <label>Grid size</label>
          <input type="number" value="5" />
        </div>
        <div className="formComponent">
          <label>Winning score</label>
          <input type="number" value="25" />
        </div>
        <div className="formComponent">
          <input type="submit" />
        </div>
      </form>
    </div>
  )
}

export default Setup