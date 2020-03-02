import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTechs } from '../../actions/techActions'

const TechListOptions = ({ loading, techs, getTechs }) => {
  useEffect(() => {
    getTechs()
    // eslint-disable-next-line
  }, [])

  return (
    !loading &&
    techs !== null &&
    techs.map(tech => (
      <option
        key={tech._id}
        value={`${tech.firstName} ${tech.lastName}`}
      >{`${tech.firstName} ${tech.lastName}`}</option>
    ))
  )
}

TechListOptions.propTypes = {
  loading: PropTypes.bool.isRequired,
  techs: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  loading: state.techState.loading,
  techs: state.techState.techs
})

export default connect(mapStateToProps, { getTechs })(TechListOptions)
