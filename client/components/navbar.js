import React from 'react'
import PropTypes from 'prop-types'
import {Button, ButtonToolbar} from 'react-bootstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav>
      {isLoggedIn ? (
        <div>
          <Link to="/home">
            {/* Change the button styling similar to Carmichael */}
          <Button className="btn btn-light">
              Home
          </Button>
          </Link>
          <a href="#" onClick={handleClick}>
            <Button className="btn btn-light">
              Logout
            </Button>
          </a>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <Button className="btn btn-light">
            Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="btn btn-light">
              Sign Up
            </Button>
          </Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
