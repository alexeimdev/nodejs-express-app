import { combineReducers } from 'redux';
import counter from './counterReducer';
import counter2 from './counterReducer2';

const rootReducer = combineReducers({
    counter,
    counter2
});

export default rootReducer;