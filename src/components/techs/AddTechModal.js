import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const onSubmit = async () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'First & Last name required.' })
    } else {
      M.toast({ html: 'Technician Added.' })
      clearFields()
    }
  }

  const clearFields = () => {
    setFirstName('')
    setLastName('')
  }

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>Add Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor="message" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor="message">Last Name</label>
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

export default AddTechModal
