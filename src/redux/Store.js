
import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk'
import Rootreducer from "./Rootreducer";
const Store = compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())(createStore)(Rootreducer);
export default Store;
