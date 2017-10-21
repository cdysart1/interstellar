// ACTION TYPES
const WRITE_CAMPUS = 'WRITE_CAMPUS'

//ACTION CREATORS
export function writeCampus(newCampusEntry){
  const action = {
    type: WRITE_CAMPUS,
    newCampusEntry
  };
  return action;
}

//REDUCER
export default function reducer(state = '', action){
  switch(action.type){
    case WRITE_CAMPUS:
      return action.newCampusEntry;
    default:
      return state;
  }
}
