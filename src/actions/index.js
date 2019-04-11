export const ADD_USER = (username,password,role) => ({
    type:"ADD_USER",
    username,
    password,
    role
  });
  

export const API_CALL_SUCCESS = "API_CALL_SUCCESS";
export const API_CALL_FAILURE = "API_CALL_FAILURE";