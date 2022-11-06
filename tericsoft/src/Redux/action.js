import axios from "axios";
import {  ADD_MOVIE_FAILURE, ADD_MOVIE_REQUEST, ADD_MOVIE_SUCCESS, GET_NOTE_FAILURE, GET_NOTE_REQUEST, GET_NOTE_SUCCESS } from "./action.type";

export const NoteRequest=()=>{

    return{
        type:GET_NOTE_REQUEST
    }
    
};

export const NoteSuccess=(data)=>{
    return{
        type:GET_NOTE_SUCCESS,
        Payload:data
    }
     
 
};


export const NoteFailure=(err)=>{

    return{
        type:GET_NOTE_FAILURE,
        Payload:err
    }
};




export const MovieRequest=()=>{

    return{
        type:ADD_MOVIE_REQUEST
    }
    
};

export const MovieSuccess=(data)=>{
    return{
        type:ADD_MOVIE_SUCCESS,
        Payload:data
    }
     
 
};


export const MovieFailure=(err)=>{

    return{
        type:ADD_MOVIE_FAILURE,
        Payload:err
    }
};


export const Notedata=()=>async (dispatch)=>{

    dispatch(NoteRequest());

     await axios.get("http://localhost:8080/cycles")
     .then((r)=>{
       console.log(r.data)
       dispatch(NoteSuccess(r.data))})
       
     .catch((e)=>dispatch(NoteFailure(e)))
   }
   
   




