import React, { useEffect } from 'react'

import SearchBar from './components/layout/SearchBar'
import LogList from './components/logs/LogList'
import AddBtn from './components/layout/AddBtn'
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import AddTechModal from './components/techs/AddTechModal'
import TechListModal from './components/techs/TechListModal'
import { Provider } from 'react-redux';
import store from './store'

import 'materialize-css/dist/css/materialize.min.css'
import './App.css'

import M from '../node_modules/materialize-css/dist/js/materialize.min.js'

function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit()
    // eslint-disable-next-line
  }, [])
  return (
    <>
    <Provider store={store}>

      <SearchBar />
      <AddLogModal />
      <EditLogModal />
      <AddTechModal />
      <TechListModal />
      <AddBtn />
      <div className="container">
        <LogList />
      </div>

    </Provider>
    </>
  )
}

export default App
