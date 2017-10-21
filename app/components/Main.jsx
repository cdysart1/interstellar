import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'


/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
export default class Main extends Component {

  render() {
    const children = this.props.children;
    return (
      <div className="main-wrapper">
        <nav className="nav">
          <div className="name">
            <h3>INTERSTELLAR</h3>
          </div>
          <div className="links">
            <div><Link to='/'>Home</Link></div>
            {/* <div><Link to='/about'>About</Link></div>
            <div><Link to='/contact'>Contact</Link></div> */}
          </div>
        </nav>
        {children}
      </div>
    )
  }
}





