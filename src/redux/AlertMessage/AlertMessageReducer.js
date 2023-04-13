import { ALERT_MESSAGE } from "../Types"
const initialObject={
    isVisible:false,
    title:"",
    message:""
}
const AlertMessageReducer =(state = initialObject, action)=>{
    console.log(action.payload)
    switch(action.type){
          case ALERT_MESSAGE: {
            return {
                title:action.payload.title,
                message:action.payload.message,
                isVisible:action.payload.isVisible
            }
        }
        default:return state
    }
}
export default AlertMessageReducer;

