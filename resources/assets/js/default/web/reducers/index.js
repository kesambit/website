import {combineReducers} from 'redux' ;
import MenuReducer from './reducer.menus';

const allReducers = combineReducers({
    menus : MenuReducer
});

export default allReducers;
