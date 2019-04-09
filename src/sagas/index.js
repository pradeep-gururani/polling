import { takeEvery, fork, call, put } from 'redux-saga/effects';

async function submitForm(data){
  try{
    let response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    
  });
  let responseJson = await response.json();
  return responseJson;
}catch(error){
    console.log(error);
}

function* callSubmit(action) {
  const result = yield call(submitForm, action.data);
  if(result.errors){
    yield put({type: 'REQUEST_FAILED', result});
  }
  else{
    yield put({type: 'REQUEST_SUCCESSFUL', result});
  }
  yield put({ type: '', result });
}

function* submitSaga() {
  yield takeEvery('REQUEST_SUBMIT', callSubmit);
}

export default function* root() {
  yield [
    fork(submitSaga),
  ];
}
