// ACTION TYPES
const WRITE_STUDENT_EMAIL = 'WRITE_STUDENT_EMAIL'

//ACTION CREATORS
export function writeStudentEmail(newStudentEmail){
  const action = {
    type: WRITE_STUDENT_EMAIL,
    newStudentEmail
  };
  return action;
}

//REDUCER
export default function reducer(state = '', action){
  switch(action.type){
    case WRITE_STUDENT_EMAIL:
      return action.newStudentEmail;
    default:
      return state;
  }
}
