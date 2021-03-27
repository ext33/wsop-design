import {combineReducers} from 'redux';
import imagesReducer from './reducers/imagesReducer'
import submitFormReducer from './reducers/submitFormReducer'
import dashboardReducer from './reducers/dashboardReducer'
import postReducer from './reducers/postReducer'
import authReducer from './reducers/authReducer'
import errorsReducer from './reducers/errorsReducer'

export default combineReducers({
    imagesReducer, 
    submitFormReducer,
    dashboardReducer,
    postReducer,
    authReducer,
    errorsReducer
})