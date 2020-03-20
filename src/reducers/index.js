import {combineReducers} from 'redux';
import elementsReducer from './elementsReducer'
import newCardReducer from './newCardReducer';

export default combineReducers({
    elements : elementsReducer,
    novo : newCardReducer

});