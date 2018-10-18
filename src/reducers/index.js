import { combineReducers } from 'redux';
import ContactReducer from './ContactReducer';

const appReducer = combineReducers({
    contact: ContactReducer
})

export default appReducer;