import React from 'react';
import { connect } from 'react-redux';
import store, { writeStudent, writeStudentEmail, createStudent, fetchCampuses, createStudentCampusName } from '../store';

export function AddStudent (props){
  const campuses = props.campuses;
  !campuses.length ? store.dispatch(fetchCampuses()) : null;

  return (
    <div className="add-container">
      <p className="add-intro">At Interstellar University, we believe the strongest systems are created when users have a voice.  Here, we give you the chance to drive the future of our University by adding our next students. </p>
      <form className="add-form" onSubmit={props.handleSubmit} >
        <input
          className="name-form"
          type="text"
          name="name"
          placeholder="Add Student Name"
          onChange={props.handleNameChange}
          value={props.newStudentEntry}
        ></input> <br/>
        <input
          className="name-form"
          type="text"
          name="email"
          placeholder="Add Email"
          onChange={props.handleEmailChange}
          value={props.newStudentEmail}
        ></input> <br/>
        <select className='selectclass'
          onSubmit={props.handleSubmit}
          name="campus"
        >
          {campuses.map(campus => {
            return (
              <option
                key={campus.id}
                value={[campus.id, campus.name]}
              >{campus.name}
            </option>
            )
          })}
        </select><br/>
        <input className="submit-form" type="submit">
        </input>
      </form>
    </div>
  )
}

const mapStatetoProps = function(state){
  console.log('state', state);
  return {
    newStudentEntry: state.newStudentEntry,
    newStudentEmail: state.newStudentEmail,
    selectedCampus: state.selectedCampus,
    campuses: state.campuses
  }
}

const mapDispatchtoProps = function(dispatch){
  return {
    handleNameChange(evt){
      dispatch(writeStudent(evt.target.value));
    },
    handleEmailChange(evt){
      dispatch(writeStudentEmail(evt.target.value));
    },
    handleCampusChange(evt){
      // dispatch()
    },
    handleSubmit(evt){
      evt.preventDefault();
      const campusSplit = evt.target.campus.value.split(',');
      const campusId = campusSplit[0];
      const studentCampusName = campusSplit[1];
      console.log('campusName', studentCampusName);
      const name = evt.target.name.value;
      const email = evt.target.email.value;
      dispatch(createStudent({ name, email, campusId}));
      dispatch(createStudentCampusName( studentCampusName))
    }
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(AddStudent);
