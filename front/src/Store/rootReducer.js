import {combineReducers} from 'redux';
import imagesReducer from './reducers/imagesReducer'
import submitFormReducer from './reducers/submitFormReducer'
import layoutReducer from './reducers/layoutReducer'

export default combineReducers({
    imagesReducer, 
    submitFormReducer,
    layoutReducer,
})