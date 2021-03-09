import {getStatsData} from '../../../Api/axios'

export function fetchStatsData() {
    return async (dispatch) => {
        let result = await getStatsData()
        if (result.status === 200){
            dispatch({type: 'DASHBOARD-FETCH', allTimeData: result.allTimeData, daysTimeData: result.daysTimeData})
        } else {
            dispatch({type: 'DASHBOARD-ERROR', error: result.error})
        }
    }
}