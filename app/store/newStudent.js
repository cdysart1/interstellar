// ACTION TYPES
const WRITE_STUDENT = 'WRITE_STUDENT'

//ACTION CREATORS
export function writeStudent(newStudentEntry){
  const action = {
    type: WRITE_STUDENT,
    newStudentEntry
  };
  return action;
}

//REDUCER
export default function reducer(state = '', action){
  switch(action.type){
    case WRITE_STUDENT:
      return action.newStudentEntry;
    default:
      return state;
  }
}
