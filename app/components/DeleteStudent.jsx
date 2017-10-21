import { deleteStudent, removeStudent } from '../store';
import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

export function DeleteStudent(props) {
  console.log('props', props);

  return (
    <div className="form-group" >
      <form id="new-message-form" onSubmit={props.handleSubmit}
      >
        <span className="input-group-btn">
          <p><button className="student-button">Delete this Student</button></p>
        </span>
      </form>
    </div>
  )
}

const mapStateToProps = function (state) {
  return {
    students: state.students
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  console.log('ownProps', ownProps);
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const history = ownProps.props.history;

      dispatch(removeStudent(ownProps.studentId));
      dispatch(deleteStudent(ownProps.studentId));
      history.push('/students');
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteStudent);

