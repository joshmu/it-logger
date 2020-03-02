import React from 'react'
import { connect } from 'react-redux'
import { removeTech } from '../../actions/techActions'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js'

const TechItem = ({ tech, removeTech }) => {
  const onDelete = () => {
    removeTech(tech._id)
    M.toast({ html: `${tech.firstName} ${tech.lastName} removed.` })
  }

  return (
    <li className="collection-item">
      {tech.firstName} {tech.lastName}
      <a href="#!" className="secondary-content">
        <i className="material-icons grey-text" onClick={onDelete}>
          delete
        </i>
      </a>
    </li>
  )
}

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  removeTech: PropTypes.func.isRequired
}

export default connect(null, { removeTech })(TechItem)
