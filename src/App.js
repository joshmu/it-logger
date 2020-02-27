import React, { useEffect } from 'react'

import SearchBar from './components/layout/SearchBar'
import LogList from './components/logs/LogList'
import AddBtn from './components/layout/AddBtn'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import AddTechModal from './components/techs/AddTechModal'

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
      <EditLogModal />
      <AddTechModal />
      <AddBtn />
      <div className="container">
        <LogList />
      </div>
    </>
  )
}

export default App
