import React, { useState, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddLogModal = () => {
  const [message, setMessage] = useState('')
  const [attention, setAttention] = useState(false)
  const [tech, setTech] = useState('')

  const [techs, setTechs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTechs()
    // eslint-disable-next-line
  }, [])

  const getTechs = async () => {
    const res = await fetch('/techs')
    const data = await res.json()
    setTechs(data)
    setLoading(false)
  }

  const onSubmit = async () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Message & Tech required.' })
    } else {
      M.toast({ html: 'Log Submitted.' })
    }
    return
    /*
    const data = {
      message,
      attention,
      date: Date.now(),
      tech
    }
    try {
      await fetch('/logs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      // reset state
      setMessage('')
      setAttention(false)
      setTech('')
      console.log('success')
    } catch (err) {
      console.err(err)
    }
    */
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
          Enter
        </a>
      </div>
    </div>
  )
}

const modalStyle = {
  width: '75%',
  height: '75%'
}

export default AddLogModal
