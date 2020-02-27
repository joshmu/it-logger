import React, { useEffect } from 'react'

import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import AddBtn from './components/layout/AddBtn'
import AddLogModal from './components/logs/AddLogModal'

import 'materialize-css/dist/css/materialize.min.css'
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
      <AddLogModal />
      <div className="container">
        <Logs />
      </div>
      <AddBtn />
    </>
  )
}

export default App
