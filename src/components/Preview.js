import React, { Component } from 'react'
const marked = require('marked')

export default class Preview extends Component {
  render() {
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
      <div
        dangerouslySetInnerHTML={{
          __html: marked(this.props.markdown, { renderer: renderer })
        }}  
        id='preview'
      />  
    )  
  }  
}  
