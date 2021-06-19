import React, { useState } from 'react'
import Editor from './components/Editor'
import Preview from './components/Preview'
import { placeholder } from './data/placeholder'
import './styles/App.scss'

export default function App() {
  const [markdown, setMarkdown] = useState(placeholder)

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  }

  return (
    <div className='App'>
      <div className='container'>
        <Editor
          title = {'Editor'}
          markdown = {markdown}
          onChange = {handleChange}
        />
        <Preview
          title = {'Preview'}
          markdown = {markdown}
        />
      </div>

      <footer>
        <p>Designed and developed by<br></br><a href="https://nadiemedicejose.web.app">Jose Estrada</a> &copy; 2021</p>
      </footer>
    </div>
  )
}
