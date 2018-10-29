import React, { Component } from 'react'

class Controls extends Component {
  state = {
    bpm: 1000,
  }

  record = () => {
    this.props.record(this.props.name);
  }

  stopRecord = () => {
    this.props.stopRecord();
  }

  playRecord = () => {
    this.props.playRecord(this.props.name, this.state.bpm);
  }

  pause = () => {
    this.props.pause(this.props.name);
  }

  deleteRecord = () => {
    this.props.deleteRecord(this.props.name);
  }

  setBPM = (e) => {
    this.setState({ bpm: e.target.value });
  }

  render() {
    return (
      <div className='controls'>
        <div>{this.props.name}</div>
        <div className='control-button' onClick={this.record}><i className="fas fa-registered"></i></div>
        <div className='control-button' onClick={this.stopRecord}><i className="fas fa-stop-circle"></i></div>
        <div className='control-button' onClick={this.playRecord}><i className="fas fa-play-circle"></i></div>
        <div className='control-button' onClick={this.pause}><i className="fas fa-pause-circle"></i></div>
        <div className='control-button' onClick={this.deleteRecord}><i className="fas fa-trash-alt"></i></div>
        <div className='control-button'>MSBS: {this.state.bpm} <input value={this.state.bpm} type='range' min={100} max={2000} step={1} onChange={this.setBPM} /></div>
      </div>
    )
  }
}

export default Controls
