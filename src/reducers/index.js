import axios from 'axios';
const reducer = (state = {}, action) => {
    let response;
    let signUpURL = `https://secure-refuge-14993.herokuapp.com/add_user?username=${action.uname}&password=${action.password}&role=${action.role}`;
    switch (action.type) {
       case 'USER_SIGNUP':
        console.log('inside signup-->',action.uname, action.password, action.role);       
        axios.post(signUpURL).then((res)=>{
            //on success
            console.log('response',res);
            response = res;
        }).catch((error)=>{
            //on error
            console.log(error);
        });
          return response;

       case 'SAGA_USER_SIGNUP':
       return;

       default:
          return state;
     }
  };
  export default reducer;