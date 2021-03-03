const initialState={
    allTimeData: null,
    daysTimeData: null,
    error: null
}

export default function dashboardReducer(state = initialState, action) {
    switch (action.type){
        case 'DASHBOARD-FETCH':
          return {
              allTimeData: action.allTimeData,
              daysTimeData: action.daysTimeData
          }
        case 'DASHBOARD-ERROR':
          return {
            allTimeData: null,
            daysTimeData: null,
            error: action.error
          }
        default:
            return state
    }
}