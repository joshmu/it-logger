import React from 'react'
import { connect } from 'react-redux'
import { removeLog, setCurrent } from '../../actions/logActions'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js'

const LogItem = ({ log, removeLog, setCurrent }) => {
  const onRemove = () => {
    removeLog(log._id)
    M.toast({ html: `Log #${log._id} removed.` })
  }

  const onEdit = () => {
    setCurrent(log)
  }

  return (
    <li className="collection-item">
      <a
        href="#edit-log-modal"
        className={`modal-trigger ${
          log.attention ? 'red-text' : 'indigo-text'
        }`}
        onClick={onEdit}
      >
        {log.message}
      </a>
      <br />
      <span className="grey-text">
        <span className="black-text">ID #{log._id}</span> last updated by{' '}
        <span className="black-text">{log.tech}</span> on{' '}
        <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text" onClick={onRemove}>
            delete
          </i>
        </a>
      </span>
    </li>
  )
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  removeLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
}

export default connect(null, { removeLog, setCurrent })(LogItem)
