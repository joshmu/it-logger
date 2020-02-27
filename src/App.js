import React, { useEffect } from 'react'

import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'

import '../node_modules/materialize-css/dist/css/materialize.min.css'
import './App.css'

import M from '../node_modules/materialize-css/dist/js/materialize.min.js'

function App() {
  useEffect(() => {
    M.AutoInit()
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <SearchBar />
      <div className="container">
        <Logs />
      </div>
    </>
  )
}

export default App
