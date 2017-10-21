import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import store, { fetchStudents } from '../store';
import AddStudent from './AddStudent';


export class Students extends Component {
  constructor(){
    super();
  }

  componentDidMount(){
    const studentsThunk = fetchStudents();
    store.dispatch(studentsThunk);
  }
  render() {
    const students = this.props.students;
    const history = this.props.history;
    console.log('props', this.props);
    const studentCampusName = this.props.studentCampusName;

    return (
      <div>
        <AddStudent />
        <h1 className="our-students">Our Current Students</h1>
        <table className="students-table">
          <tr>
            <th>Name</th>
            <th>E-mail</th>
            <th>Campus</th>
            <th>View this Student</th>
          </tr>
          {students.map(student => {
            return (
              <tr key={student.id} >
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.campus ? student.campus.name : studentCampusName}</td>
                <td>
                  <button
                    type="submit"
                    onClick={() => { history.push(`/students/${student.id}`) }}
                  >
                    GO!
                </button>
                </td>
              </tr>
            )
          })}
        </table>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    students: state.students,
    studentCampusName: state.studentCampusName
  }
}

export default connect(mapStateToProps)(Students);
