import { ADD_USER, DELETE_USER, UPDATE_USER,FETCH_USER } from "../Types"
const initialObject={
    user:[]
}
const UserReducer =(state = initialObject, action)=>{
    switch(action.type){
        case ADD_USER: {
            return {
                ...state,
                user:[...state.user,action.payload]
            }
        }
        case DELETE_USER: {
            return {
                ...state,
                user:[...state.user.filter(item=>item.id!==action.payload)]
            }
        }
        case UPDATE_USER: {
            return {
                ...state,
                user:state.user.map(item=>{
                   if(item.id===action.payload.id){
                    return { ...item, name: action.payload.name};
                   }
                   else {
                    return item
                   }
                })
            }
        }   case FETCH_USER: {
            return {
                user:action.payload
            }
        }
        default:return state
    }
}

export default UserReducer;
