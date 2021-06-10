import React, { Component } from 'react'

export default class Editor extends Component {
  render() {
    return (
      <textarea
        id='editor'
        onChange={this.props.onChange}
        type='text'
        value={this.props.markdown}
      />
    )
  }
}
