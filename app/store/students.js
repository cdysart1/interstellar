import axios from 'axios';
// ACTION TYPES
const GET_STUDENTS_FROM_SERVER = 'GET_STUDENTS_FROM_SERVER';
const DELETE_STUDENT = 'DELETE_STUDENT';
const ADD_STUDENT = 'ADD_STUDENT';


// ACTION CREATORS
export function getStudentsFromServer(students) {
  const action = {
    type: GET_STUDENTS_FROM_SERVER,
    students
  };
  return action;
}

export function deleteStudent(id) {
  const action = {
    type: DELETE_STUDENT,
    data: id
  };
  return action;
}

export function addStudent(newStudent){
  const action = {
    type: ADD_STUDENT,
    newStudent
  }
  return action;
}


//THUNK CREATORS
export function fetchStudents() {
    return function thunk(dispatch) {
      return axios.get('/api/students')
        .then(res => res.data)
        .then(students => {

          const action = getStudentsFromServer(students);
          dispatch(action);
        });
    }
  }

export function removeStudent(id) {
  return function thunk(dispatch) {
    return axios.delete(`/api/students/${id}`)
      .then(res => res.data)
      .then(deletedStudent => {
        console.log('deletedStudent', deletedStudent);
      });
  }
}

export function createStudent(data){
  console.log('datahere!!', data);
  return function thunk (dispatch){
    return axios.post('/api/students', data)
    .then (res => res.data)
    .then(newStudent => {
      console.log('newStudent', newStudent);
      const action = addStudent(newStudent);
      dispatch(action);
    })
  }
}

// REDUCER
export default function reducer(state = [], action){
  switch(action.type){
    case GET_STUDENTS_FROM_SERVER:
      return action.students;
    case DELETE_STUDENT:
      return state.filter(student => student.id !== action.data);
    case ADD_STUDENT:
      return state.slice().concat(action.newStudent);
    default:
      return state;
  }
}
