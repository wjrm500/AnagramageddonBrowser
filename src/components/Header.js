import React from 'react'

const Header = () => {
  return (
    <h1 id="headerText" onClick={() => window.location.reload()}>
      ANAGRAMAGEDDON
    </h1>
  )
}

export default Header