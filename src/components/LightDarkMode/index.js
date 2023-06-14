import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {onMode: false}

  onButton = () => {
    this.setState(preState => ({onMode: !preState.onMode}))
  }

  onButtonText = () => {
    const {onMode} = this.state
    return onMode ? 'Dark Mode' : 'Light Mode'
  }

  onCardClassName = () => {
    const {onMode} = this.state
    return onMode ? 'light' : 'dark'
  }

  render() {
    const buttonText = this.onButtonText()
    const cardClassName = this.onCardClassName()
    return (
      <div className="container">
        <div className={cardClassName}>
          <h1 className="heading">Click to Change Mode</h1>
          <button className="button" type="button" onClick={this.onButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
