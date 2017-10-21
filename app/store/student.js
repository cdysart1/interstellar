import axios from 'axios';

// ACTION TYPES
const GET_STUDENT_FROM_SERVER = 'GET_STUDENT_FROM_SERVER';


// ACTION CREATORS
export function getStudentFromServer(student) {
  const action = {
    type: GET_STUDENT_FROM_SERVER,
    student
  };
  return action;
}

//THUNK CREATORS
  export function fetchStudent(id) {

    return function thunk(dispatch) {
      return axios.get(`/api/students/${id}`)
        .then(res => res.data)
        .then(student => {
          const action = getStudentFromServer(student);
          dispatch(action);
        });
    }
  }


// REDUCER
export default function reducer(state = [], action){
  switch(action.type){
    case GET_STUDENT_FROM_SERVER:
      return action.student;
    default:
      return state;
  }
}
