import React from 'react'
import { generateRandomLetter } from '../utilities/randomLetter'

class Box extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultPlayer: props.defaultPlayer,
      coords: {x: props.rowIdx, y: props.colIdx},
      activePlayer: props.activePlayer,
      active: props.active,
      postBoxClickHandler: props.postBoxClickHandler
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      activePlayer: props.activePlayer,
      active: props.active
    })
  }

  componentDidMount() {
    if (this.state.defaultPlayer) {
      this.setPlayer(this.state.defaultPlayer)
    }
    this.setState({
      letter: generateRandomLetter()
    })
  }

  getX = () => this.state.coords.x

  getY = () => this.state.coords.y

  setPlayer = (player) => {
    if (this.state.player) {
      this.state.player.removeBox()
    }
    this.setState({player})
    player.addBox(this)
  }

  onClick = () => {
    this.state.postBoxClickHandler()
    if (!this.state.active) {
      return false
    }
    if (this.state.activePlayer.canAddBox(this)) {
      this.setPlayer(this.state.activePlayer)
    }
  }

  render() {
    return (
      <div className="outerBox">
        <div
          className={"innerBox " + (!this.state.active ? "inactive" : "")}
          style={{
            backgroundColor: this.state.player ? this.state.player.color : "",
            color: this.state.player ? "white" : ""
          }}
          onClick={this.onClick}
          >
          {this.state.letter}
        </div>
      </div>
    )
  }
    
}

export default Box