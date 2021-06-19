import React from 'react'
import Toolbar from './Toolbar'

export default function Editor(props) {
  return (
    <div className='panel'>
      <Toolbar text={props.title} />
      <textarea
        id='editor'
        onChange={props.onChange}
        type='text'
        value={props.markdown}
      />
    </div>
  )
}
