import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import counter from './counterReducer';
import counter2 from './counterReducer2';
import users from './usersReducer';
import loaded from './loaderReducer';
  
const rootReducer = combineReducers({
    routerReducer,
    counter,
    counter2,
    users,
    loaded
});

export default rootReducer;