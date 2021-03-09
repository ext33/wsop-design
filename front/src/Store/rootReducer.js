import {combineReducers} from 'redux';
import imagesReducer from './reducers/imagesReducer'
import submitFormReducer from './reducers/submitFormReducer'
import dashboardReducer from './reducers/dashboardReducer'
import postReducer from './reducers/postReducer'

export default combineReducers({
    imagesReducer, 
    submitFormReducer,
    dashboardReducer,
    postReducer,
})