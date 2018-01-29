import { combineReducers } from 'redux';
import counterAddReducer from './couterAddReducer';



const rootReducer = combineReducers({
    counterAdd:counterAddReducer
});

export default rootReducer;