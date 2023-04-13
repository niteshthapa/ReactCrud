
import { combineReducers } from "redux";
import UserReducer from "./Users/UserReducer";
import AlertMessageReducer from "./AlertMessage/AlertMessageReducer";
const Rootreducer = combineReducers({UserReducer,AlertMessageReducer});
export default Rootreducer;
