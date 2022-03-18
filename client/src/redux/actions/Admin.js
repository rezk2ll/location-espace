import axios from "axios"
import { FAIL, FAIL_USER, GET_USER, LOAD, LOAD_USER, LOG_OUT, SIGN_IN } from "../actions types/Admin"

//SIGN IN && SIGN UP && LOG OUT
// export const signup=(newAdmin)=>async(dispatch)=>{ 
//     dispatch({type:LOAD})
//     try {
//        let result= await axios.post("/api/admin/signup",newAdmin)
//        dispatch({
//            type:SIGN_UP ,
//            payload:result.data
//        })
//     } catch (error) {
//         dispatch({
//             type: FAIL,
//             payload:error.response.data.errors
//         })
//     }
// } 
export const signin=(admin)=>async(dispatch)=>{ 
    dispatch({type:LOAD})
    try {
       let result= await axios.post("/api/admin/signin",admin)
       dispatch({
           type:SIGN_IN ,
           payload:result.data
       })
    } catch (error) {
        dispatch({
            type:FAIL ,
            payload:error.response.data.errors
        })
    }
}
export const logout=()=>{
    return {type:LOG_OUT}
}
 //------------------CRUD---------------

 //get all user
export const getUser = () => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
      let result = await axios.get("/api/admin");
      dispatch({ type: GET_USER, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_USER, payload: error.response });
    }
  };
  
  //add user
  export const addUser = (newUser) => async (dispatch) => {
    try {
      await axios.post("/api/admin/add", newUser);
      dispatch(getUser());
    } catch (error) {
      dispatch({ type: FAIL_USER, payload: error.response });
    }
  };
  
  //delete user
  export const deleteUser = (id) => async (dispatch) => {
    try {
      await axios.delete(`/api/admin/deleteUser/${id}`);
      dispatch(getUser());
    } catch (error) {
      dispatch({ type: FAIL_USER, payload: error.response });
    }
  };
  //edit user
  export const editUser=(id,editUser)=>async(dispatch)=>{
      try {
          await axios.put(`/api/admin/editUser/${id}`,editUser)
          dispatch(getUser())
      } catch (error) {
          dispatch({ type: FAIL_USER, payload: error.response });
          
      }
  }