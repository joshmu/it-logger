import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addLog } from '../../actions/logActions'
import { getTechs } from '../../actions/techActions'
import M from 'materialize-css/dist/js/materialize.min.js'
import PropTypes from 'prop-types'

const AddLogModal = ({ techs, addLog, getTechs }) => {
  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false)
  const [tech, setTech] = useState('')

  useEffect(() => {
    getTechs()
    // eslint-disable-next-line
  }, [])

  const onSubmit = async () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'More details required.', classes: 'red darken-2' })
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date()
      }
      addLog(newLog)

      M.toast({ html: `Log added by ${tech}` })
      clearFields()
    }
  }

  const clearFields = () => {
    setMessage('')
    setAttention(false)
    setTech('')
  }

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Add Log</h4>
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
          Add
        </a>
      </div>
    </div>
  )
}

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
  getTechs: PropTypes.func.isRequired,
  techs: PropTypes.array
}

const modalStyle = {
  width: '75%',
  height: '75%'
}

const mapStateToProps = state => {
  return {
    techs: state.techState.techs
  }
}

export default connect(mapStateToProps, { addLog, getTechs })(AddLogModal)
