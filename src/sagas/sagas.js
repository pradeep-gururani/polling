import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("ADD_USER", workerSaga);
}

// function that makes the api request and returns a Promise for response
function addUser(val) {
  console.log('inside add user saga', val);
  return axios({
    method: "POST",
    url: "https://secure-refuge-14993.herokuapp.com/add_user?username=admin&password=admin&role=admin"
  }); 
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    console.log('workersaga...',this.props);
    const response = yield call(addUser);

    const respond = response.data.message;
    const status = response.data.error;
    console.log('workersaga response----',respond);

    // dispatch a success action to the store with the new respond
    yield put({ type: "API_CALL_SUCCESS", respond,status });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}