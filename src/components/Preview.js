import React from 'react'
import Toolbar from './Toolbar'
const marked = require('marked')

export default function Preview(props) {
  // Allows line breaks with return button
  marked.setOptions({
    breaks: true
  });

  // Inserts target="_blank" into 'href' tags
  const renderer = new marked.Renderer();
  renderer.link = function(href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };

  return (
    <div className='panel'>
      <Toolbar text={props.title} />
      <div className='panel-container'>
        <div
          id='preview'
          dangerouslySetInnerHTML={{
            __html: marked(props.markdown, { renderer: renderer })
          }}
        />
      </div>
    </div>
  )
}
