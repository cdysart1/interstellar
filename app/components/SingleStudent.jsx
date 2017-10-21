import React, { Component } from 'react';
import store, { fetchStudent } from '../store';
import { connect } from 'react-redux';
import DeleteStudent from './DeleteStudent';


class SingleStudent extends Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    store.dispatch(fetchStudent(id));
  }

  render() {
    const student = this.props.student;

    return (
      <div className="student-card" >
        <img src="/images/alien.jpg" alt="alien" style={{width: '50%'}}  />

          <h1>{student.name}</h1>
          <p className="student-title">{student.email}</p>
          {student.campus ?
          <p>{student.campus.name}</p>
            : null }
          <DeleteStudent props={this.props} studentId={student.id} />

      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
          student: state.student,
  }
}

export default connect(mapStateToProps)(SingleStudent);
