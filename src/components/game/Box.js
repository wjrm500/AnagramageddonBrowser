import React from 'react'
import { FLASH_ERROR } from '../../reducers/textFlash'
import { generateRandomLetter } from '../../utilities/randomLetter'

class Box extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultPlayer: props.defaultPlayer,
      coords: {x: props.rowIdx, y: props.colIdx},
      activePlayer: props.activePlayer,
      active: props.active,
      postBoxClickHandler: props.postBoxClickHandler,
      setTextFlash: props.setTextFlash
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
      this.state.player.removeBox(this)
    }
    this.setState({player})
    player.addBox(this)
  }

  onClick = () => {
    if (!this.state.active) {
      this.state.setTextFlash({content: "Enter a word", status: FLASH_ERROR})
      return
    }
    if (this.state.activePlayer.canAddBox(this)) {
      this.setPlayer(this.state.activePlayer)
      this.state.postBoxClickHandler()
    } else {
      this.state.setTextFlash({content: "Can't go here", status: FLASH_ERROR})
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