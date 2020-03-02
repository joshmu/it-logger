import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { clearCurrent, updateLog } from '../../actions/logActions'
import M from 'materialize-css/dist/js/materialize.min.js'
import PropTypes from 'prop-types'

const EditLogModal = ({ log, clearCurrent, updateLog }) => {
  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false)
  const [tech, setTech] = useState('')

  const [techs, setTechs] = useState([])

  useEffect(() => {
    if (techs.length === 0) getTechs()
    if (log !== null) {
      setMessage(log.message)
      setAttention(log.attention)
      setTech(log.tech)
      setTimeout(M.updateTextFields, 1)
    }
    // eslint-disable-next-line
  }, [log])

  const getTechs = async () => {
    const res = await fetch('/techs')
    const data = await res.json()
    setTechs(data)
  }

  const onSubmit = async () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Message & Tech required.' })
    } else {
      const updatedLog = {
        message,
        attention,
        tech,
        id: log.id,
        date: new Date()
      }
      updateLog(updatedLog)
      M.toast({ html: `Log updated by ${tech}` })
      clearCurrent()
    }
  }

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Edit Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              {techs.map(t => (
                <option
                  value={`${t.firstName} ${t.lastName}`}
                  key={t.id}
                >{`${t.firstName} ${t.lastName}`}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(e.target.checked)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          className="modal-close waves-effect waves-green btn indigo"
          onClick={onSubmit}
        >
          Update
        </a>
      </div>
    </div>
  )
}

const modalStyle = {
  width: '75%',
  height: '75%'
}

EditLogModal.propTypes = {
  log: PropTypes.object,
  clearCurrent: PropTypes.func.isRequired,
  updateLog: PropTypes.func.isRequired
}

const mapStateToProps = state => ({ log: state.logState.current })

export default connect(mapStateToProps, { clearCurrent, updateLog })(
  EditLogModal
)
