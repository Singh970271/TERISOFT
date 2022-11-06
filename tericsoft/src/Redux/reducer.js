import {  ADD_MOVIE_FAILURE, ADD_MOVIE_REQUEST, ADD_MOVIE_SUCCESS, GET_NOTE_FAILURE, GET_NOTE_REQUEST, GET_NOTE_SUCCESS } from "./action.type"

const inistate={
    note:[],
    isLoading:false,
    isError:false
}

export const NoteReducer=(state = inistate,{type,Payload})=>{
 switch(type){

    case GET_NOTE_REQUEST:

        return{

            ...state,
            isLoading:true,
            isError:false
        }

        case GET_NOTE_SUCCESS:

            return{

                ...state,
                note:Payload,
                isLoading:false,
                isError:false
            }

          case GET_NOTE_FAILURE:

            return{

                ...state,
                isLoading:false,
                isError:true
            }  

            

            case ADD_MOVIE_REQUEST:

                return{
        
                    ...state,
                    isLoading:true,
                    isError:false
                }
        
                case ADD_MOVIE_SUCCESS:
        
                    return{
        
                        ...state,
                        note:Payload,
                        isLoading:false,
                        isError:false
                    }
        
                  case ADD_MOVIE_FAILURE:
        
                    return{
        
                        ...state,
                        isLoading:false,
                        isError:true
                    }  
        
                    


    default :return state        
 }


}