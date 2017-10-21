import axios from 'axios';


// ACTION TYPES
const GET_CAMPUSES_FROM_SERVER = 'GOT_CAMPUSES_FROM_SERVER';
const DELETE_CAMPUS = 'DELETE_CAMPUS'
const ADD_CAMPUS = "ADD_CAMPUS"


// ACTION CREATORS
export function getCampusesFromServer(campuses) {
  const action = {
    type: GET_CAMPUSES_FROM_SERVER,
    campuses
  };
  return action;
}

export function deleteCampus(id){
  const action = {
    type: DELETE_CAMPUS,
    data: id
  };
  return action;
}

export function addCampus(newCampus){
  const action = {
    type: ADD_CAMPUS,
    newCampus
  }
  return action;
}

//THUNK CREATORS
export function fetchCampuses() {
    return function thunk(dispatch) {
      return axios.get('/api/campuses')
        .then(res => res.data)
        .then(campuses => {
          const action = getCampusesFromServer(campuses);
          dispatch(action);
        });
    }
  }

  export function removeCampus(id){
    return function thunk(dispatch){
      return axios.delete(`/api/campuses/${id}`)
      .then(res => res.data)
      .then(deletedCampus => {
        console.log('deletedCampus', deletedCampus);
      });
    }
  }

  export function createCampus(name){
    return function thunk(dispatch){
      return axios.post('/api/campuses', name)
      .then(res => res.data)
      .then(newCampus => {
        const action = addCampus(newCampus);
        dispatch(action);
      })
    }
  }

// REDUCER
export default function reducer(state = [], action){
  switch(action.type){
    case GET_CAMPUSES_FROM_SERVER:
      return action.campuses;
    case DELETE_CAMPUS:
      return state.filter(campus => campus.id !== action.data);
    case ADD_CAMPUS:
      return state.slice().concat(action.newCampus);
    default:
      return state;
  }
}
