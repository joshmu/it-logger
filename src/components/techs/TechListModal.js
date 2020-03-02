import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getTechs } from '../../actions/techActions'
import PropTypes from 'prop-types'
import TechItem from './TechItem'

const Techs = ({ techs, getTechs }) => {
  useEffect(() => {
    getTechs()
    // eslint-disable-next-line
  }, [])

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {techs.length === 0 ? (
            <li className="collection-item">
              There are no technicians available.
            </li>
          ) : (
            techs.map(tech => <TechItem key={tech.id} tech={tech} />)
          )}
        </ul>
      </div>
    </div>
  )
}

Techs.propTypes = {
  techs: PropTypes.array.isRequired,
  getTechs: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return { techs: state.techState.techs }
}

export default connect(mapStateToProps, { getTechs })(Techs)
