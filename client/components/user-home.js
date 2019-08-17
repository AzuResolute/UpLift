import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import CountdownComp from './countdown'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    // <div>
    //   <h3>Welcome, {email}</h3>
    // </div>
    <div className="d-flex justify-content-center align-items-center flex-column">
      {/* <div className="row">
        <div className="col-md-12">
          <img id="logo" src="/images/my-logo.png"/>
        </div>
      </div> */}
      {/* Create a future Calendar Component */}
      <CountdownComp />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
