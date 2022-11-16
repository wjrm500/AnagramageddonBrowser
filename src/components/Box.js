import React from 'react'
import ActivePlayerContext from '../contexts/ActivePlayerContext'
import { generateRandomLetter } from '../utilities/randomLetter'

class Box extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      coords: {x: props.rowIdx, y: props.colIdx},
      letter: generateRandomLetter(),
      defaultPlayer: props.defaultPlayer
    }
  }

  componentDidMount() {
    if (this.state.defaultPlayer) {
      this.setPlayer(this.state.defaultPlayer)
    }
  }

  getX = () => this.state.coords.x

  getY = () => this.state.coords.y

  setPlayer = (player) => {
    if (this.state.player) {
      this.state.player.removeBox()
    }
    this.setState({
      player: player
    })
    player.addBox(this)
  }

  onClick = (activePlayer) => {
    if (activePlayer.canAddBox(this)) {
      this.setPlayer(activePlayer)
    }
  }

  render() {
    return (
      <ActivePlayerContext.Consumer>
        {
          (activePlayer) => (
            <div className="outerBox">
              <div
                className="innerBox"
                style={{
                  backgroundColor: this.state.player ? this.state.player.color : "",
                  color: this.state.player ? "white" : ""
                }}
                onClick={() => this.onClick(activePlayer)}
                >
                {this.state.letter}
              </div>
            </div>
          )
        }
      </ActivePlayerContext.Consumer>
    )
  }
    
}

export default Box