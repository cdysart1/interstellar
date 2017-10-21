import axios from 'axios';


// ACTION TYPES
const CREATE_STUDENT_CAMPUS_NAME = 'CREATE_STUDENT_CAMPUS_NAME';


// ACTION CREATORS

export function createStudentCampusName(studentCampusName) {
  const action = {
    type: CREATE_STUDENT_CAMPUS_NAME,
    studentCampusName
  };
  return action;
}

// REDUCER
export default function reducer(state = '', action){
  switch(action.type){
    case CREATE_STUDENT_CAMPUS_NAME:
      return action.studentCampusName;
    default:
      return state;
  }
}
