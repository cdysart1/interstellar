import React from 'react';
import { connect } from 'react-redux';
import { writeCampus, createCampus } from '../store';

export function AddCampus(props) {
  console.log('add props', props);
  return (

    <div className="add-container">
      <p className="add-intro">At Interstellar, we believe the strongest systems are created when users have a voice.  Here, we give you the chance to drive the future by creating our next campus. </p>
      <form className="add-form" onSubmit={props.handleSubmit} >
        <div className="container2" >
        <div className="radio">
            Choose a Background Theme
          <label>
              <input
                name="image"
                type="radio" value="images/MarsUniversity.jpg" />Martian</label>
            <label>
              <input
                name="image"
                type="radio" value="images/NovaTech.jpg" />Space</label>
            <label>
              <input
                name="image"
                type="radio"
                value="images/HamiltonU.jpg"
                />Earth</label>
            <label>
              <input
                name="image"
                type="radio"
                value="images/PlutoTech.jpg"
                 />Planet Surface</label>
            <label>
              <input
                name="image"
                type="radio"
                value="images/VenusCollege.jpg"
                 />Bright Light</label>
          </div>
          <div>
            <input
              className="name-form"
              type="text"
              name="campusName"
              placeholder="Enter Campus Name"
              onChange={props.handleChange}
              value={props.newCampusEntry}
            ></input> <br />
            <input className="submit-form" type="submit" value="Add this campus!">
            </input>
          </div>

        </div>
      </form>
    </div>
  )
}

const mapStateToProps = function (state) {
  return {
    newCampusEntry: state.newCampusEntry,
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleChange(evt) {
      dispatch(writeCampus(evt.target.value));
    },
    handleSubmit(evt) {
      evt.preventDefault();
      const name = evt.target.campusName.value
      const image = evt.target.image.value;
      dispatch(createCampus({ name, image }));
      dispatch(writeCampus(""));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCampus);
