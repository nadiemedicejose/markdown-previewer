import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Toolbar extends Component {
  static propTypes = {
    text: PropTypes.string,
    icon: PropTypes.object,
    onClick: PropTypes.func
  }

  render() {
    return (
      <div className='toolbar'>
        <i className='fa fa-free-code-camp' title='no-stack-dub-sack' />
        {this.props.text}
        <i className={this.props.icon} onClick={this.props.onClick} />
    </div>
    )
  }
}
