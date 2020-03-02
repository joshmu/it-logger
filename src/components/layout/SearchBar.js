import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { searchLogs } from '../../actions/logActions'
import PropTypes from 'prop-types'

const SearchBar = ({ searchLogs }) => {
  const text = useRef('')
  const onSearch = () => {
    searchLogs(text.current.value)
  }

  return (
    <nav className="indigo lighten-1" style={{ marginBottom: '3rem' }}>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" ref={text} onChange={onSearch} />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  )
}

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired
}

export default connect(null, { searchLogs })(SearchBar)
