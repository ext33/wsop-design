import {combineReducers} from 'redux';
import imagesReducer from './reducers/imagesReducer'
import submitFormReducer from './reducers/submitFormReducer'
import dashboardReducer from './reducers/dashboardReducer'

export default combineReducers({
    imagesReducer, 
    submitFormReducer,
    dashboardReducer,
})