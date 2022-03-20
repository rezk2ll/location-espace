import axios from "axios";
import { FAIL, LOAD, LOG_OUT, SIGN_IN, SIGN_UP } from "../actions types/User";
import { FAIL_ANNONCE, GET_ANNONCE, LOAD_ANNONCE } from "../actions types/User";


export const signup=(newUser)=>async(dispatch)=>{
    dispatch({type:LOAD})
    try {
       let result= await axios.post("/api/user/signup",newUser)
       dispatch({
           type:SIGN_UP ,
           payload:result.data
       })
    } catch (error) {
        dispatch({
            type: FAIL,
            payload:error.response.data.errors
        })
    }
}
export const signin=(user)=>async(dispatch)=>{
    dispatch({type:LOAD})
    try {
       let result= await axios.post("/api/user/signin",user)
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

 //get all annonce
 export const getAnnonce = () => async (dispatch) => {
    dispatch({ type: LOAD_ANNONCE });
    try {
      let result = await axios.get("/api/announcement");
      dispatch({ type: GET_ANNONCE, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_ANNONCE, payload: error.response });
    }
  };
  
  //add annonce
  export const addAnnonce = (newAnnonce) => async (dispatch) => {
    try {
      await axios.post("/api/user/add", newAnnonce);
      dispatch(getAnnonce());
    } catch (error) {
      dispatch({ type: FAIL_ANNONCE, payload: error.response });
    }
  };
  
  //delete annonce
  export const deleteAnnonce = (id) => async (dispatch) => {
    try {
      await axios.delete(`/api/user/deleteAnnonce/${id}`);
      dispatch(getAnnonce());
    } catch (error) {
      dispatch({ type: FAIL_ANNONCE, payload: error.response });
    }
  };
  //edit annonce
  export const editAnnonce=(id,editAnnonce)=>async(dispatch)=>{
      try {
          await axios.put(`/api/user/editAnnonce/${id}`,editAnnonce)
          dispatch(getAnnonce())
      } catch (error) {
          dispatch({ type: FAIL_ANNONCE, payload: error.response });
          
      }
  }