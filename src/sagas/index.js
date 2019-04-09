// import { takeEvery, all, call, put } from 'redux-saga/effects';

// async function* submitForm(data){
//   try{
//     let url =`https://secure-refuge-14993.herokuapp.com/add_user?username=${data.username}&password=${data.password}&role=${data.role}`;
//     let response = await fetch(url, {
//       method: 'POST'    
//   });
//   let responseJson = await response.json();
//   return responseJson;
// }catch(error){
//     console.log(error);
// }
// }

// function* callSubmit(action) {
//   const result = yield call(submitForm, action);
//   if(result.errors){
//     yield put({type: 'REQUEST_FAILED', result});
//   }
//   else{
//     yield put({type: 'REQUEST_SUCCESSFUL', result});
//   }
//   yield put({ type: '', result });
// }

// export default function* rootSaga() {
//   yield [
//     all([
//           submitForm()
//         ])
//   ];
// }
