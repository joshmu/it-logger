import React from 'react'
import { connect } from 'react-redux'
import { removeLog } from '../../actions/logActions'
import Moment from 'react-moment'
import PropTypes from 'prop-types'

const LogItem = ({ log, removeLog }) => {
  return (
    <li className="collection-item">
      <a
        href="#edit-log-modal"
        className={`modal-trigger ${
          log.attention ? 'red-text' : 'indigo-text'
        }`}
      >
        {log.message}
      </a>
      <br />
      <span className="grey-text">
        <span className="black-text">ID #{log.id}</span> last updated by{' '}
        <span className="black-text">{log.tech}</span> on{' '}
        <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        <a href="#!" className="secondary-content">
          <i
            className="material-icons grey-text"
            onClick={() => removeLog(log.id)}
          >
            delete
          </i>
        </a>
      </span>
    </li>
  )
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  removeLog: PropTypes.func.isRequired
}

export default connect(null, { removeLog })(LogItem)
