import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import store, { fetchCampuses } from '../store';
import AddCampus from './AddCampus';

export class Campuses extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const campusesThunk = fetchCampuses();
    store.dispatch(campusesThunk);
  }

  render() {
    const campuses = this.props.campuses;

    return (
      <div>
        <div className="campusBackgroundContainer" >
          <img className="campusbackground" src="images/campusbackground.jpg" />
          <div className="bottom-right">WELCOME</div>
        </div>
        <AddCampus />
        <h1 className="campuses-h1">OUR CURRENT CAMPUSES</h1>
        {campuses.map(campus => {
          return (
            <div key={campus.id} className="campusContainer">
              <Link to={`/campuses/${campus.id}`}>
                <img className="campusImage" src={"" + campus.image} />
                <div className="bottomRight"> {campus.name} </div>
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses
  }
}

export default connect(mapStateToProps)(Campuses);
