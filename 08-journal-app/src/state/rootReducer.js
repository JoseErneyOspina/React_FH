import { combineReducers } from 'redux';
import {authReducer} from "./reducers/authreducer";

const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;
