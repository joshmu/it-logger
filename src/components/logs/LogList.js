import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getLogs } from '../../actions/logActions'

import LogItem from './LogItem'
import Preloader from '../layout/Preloader'
import PropTypes from 'prop-types'

const LogList = ({ logState: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs()
    // eslint-disable-next-line
  }, [])

  if (loading || logs === null) return <Preloader />

  return (
    <ul className="collection with-header">
      <li className="collection-header center">
        <h4>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs showing.</p>
      ) : (
        logs.map(log => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  )
}

LogList.propTypes = {
  log: PropTypes.object,
  getLogs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({ logState: state.logState })

export default connect(mapStateToProps, { getLogs })(LogList)
