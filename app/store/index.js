//import { combineReducers } from 'redux'
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import { composeWithDevTools } from 'redux-devtools-extension';
import campuses from './campuses'
import students from './students'
import campus from './campus'
import student from './student'
import newCampus from './newCampus'
import newStudent from './newStudent'
import newStudentEmail from './newStudentEmail'
import studentCampusName from './studentCampusName'


const reducer = combineReducers({
  campuses,
  students,
  campus,
  student,
  newCampus,
  newStudent,
  newStudentEmail,
  studentCampusName
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger()))
);

export default store;

//export action creators
export * from './students';
export * from'./campuses';
export * from './campus';
export * from './student';
export * from './newCampus';
export * from './newStudent';
export * from './newStudentEmail';
export * from'./studentCampusName'
