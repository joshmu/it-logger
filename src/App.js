import React, { useEffect } from 'react'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import M from '../node_modules/materialize-css/dist/js/materialize.min.js'
import './App.css'

function App() {
  useEffect(() => {
    M.AutoInit()
    // eslint-disable-next-line
  }, [])
  return <div className="App">Hello</div>
}

export default App
