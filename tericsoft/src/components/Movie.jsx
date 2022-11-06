import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios"
import { useEffect } from 'react';
import { MovieFailure, MovieRequest, MovieSuccess } from '../Redux/action';
const Movie = () => {

    const dispatch=useDispatch();
    const note=useSelector((store)=>store.note.note);
   
    const getdata=()=>{

       dispatch(MovieRequest())
        axios.get("http://localhost:8080/data")
           .then((r)=>{
               console.log(r.data)
               dispatch(MovieSuccess(r.data))})
               .catch((e)=>dispatch(MovieFailure(e)))
            
    }
    
    useEffect(()=>{
       getdata()
    },[])
    
  return (
    <div>
  {/* {note.map((e)=>(
        <div key={e.id}>
            <h1>{e.name}</h1>
            <img src={e.image}/>
        </div>
        
     ))} */}

    </div>
  )
}

export default Movie