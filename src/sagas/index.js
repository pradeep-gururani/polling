import {put,call, all} from 'redux-saga/effects';
  function* actionWatcher() {
       yield call('SAGA_USER_SIGNUP')
  }
  export default function* rootSaga() {
     yield all([
     actionWatcher(),
     ]);
  }