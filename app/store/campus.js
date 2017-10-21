import axios from 'axios';


// ACTION TYPES
const GET_CAMPUS_FROM_SERVER = 'GET_CAMPUS_FROM_SERVER';


// ACTION CREATORS

export function getCampusFromServer(campus) {
  const action = {
    type: GET_CAMPUS_FROM_SERVER,
    campus
  };
  return action;
}

//THUNK CREATORS
  export function fetchCampus(id) {
    console.log('here');
    return function thunk(dispatch) {
      return axios.get(`/api/campuses/${id}`)
        .then(res => res.data)
        .then(campus => {
          const action = getCampusFromServer(campus);
          dispatch(action);
        });
    }
  }


// REDUCER
export default function reducer(state = [], action){
  switch(action.type){
    case GET_CAMPUS_FROM_SERVER:
      return action.campus;
    default:
      return state;
  }
}
