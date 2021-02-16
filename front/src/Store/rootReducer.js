import {combineReducers} from 'redux';
import imagesReducer from './reducers/imagesReducer'
import submitFormReducer from './reducers/submitFormReducer'

export default combineReducers({
    imagesReducer, 
    submitFormReducer,
})