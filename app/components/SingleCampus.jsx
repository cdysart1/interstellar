import React, { Component } from 'react';
import store, { fetchCampus, fetchStudents } from '../store';
import { connect } from 'react-redux';
import DeleteCampus from './DeleteCampus';


class SingleCampus extends Component {

  componentDidMount() {
    console.log('hello');
    const id = this.props.match.params.id;
    store.dispatch(fetchCampus(id));
  }

  render() {
    console.log('props', this.props);
    const campus = this.props.campus;
    console.log('campus', campus);

    return (
      <div>
        <div className="campusContainer">
          <img className="campusImage" src={"" + campus.image} />
          <div className="bottomRight"> {campus.name} </div>
        </div>
        <div className="campusFlexContainer" >
          <div className="table">
            <table className="single-campus-table">
              <tr>
                <th>Current Students</th>
              </tr>
              {campus.students ? campus.students.map(student => {
                return (
                  <tr key={student.id} >
                    <td>{student.name}</td>
                  </tr>
                )
              }) : null}
            </table>
          </div>
          <DeleteCampus props={this.props} name={campus.name} id={campus.id}/>
        </div>

      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    campus: state.campus,
    students: state.students
  }
}

export default connect(mapStateToProps)(SingleCampus);
