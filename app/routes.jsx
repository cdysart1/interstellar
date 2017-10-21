import React, {Component} from 'react'
import {connect} from 'react-redux'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types'
import {Main, Campuses, Home, SingleCampus, SingleStudent, Students} from './components'

/**
 * COMPONENT
 */
export default class Routes extends Component {

  render () {
    return (
      <Router>
        <Main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/campuses' component={Campuses} />
            <Route path='/campuses/:id' component={SingleCampus} />
            <Route exact path='/students' component={Students} />
            <Route path='/students/:id' component={SingleStudent} />
          </Switch>
          </Main>
      </Router>
    )
  }
}




