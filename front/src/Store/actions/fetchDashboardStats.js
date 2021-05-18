import {getStatsData} from '../../Api/axios'
import {readCookie} from '../middleware/cookies'

export function fetchStatsData() {
    return async (dispatch) => {
        const token = readCookie('token')

        let result = await getStatsData(token)
        if (result.status === 200){
            dispatch({type: 'DASHBOARD-FETCH', allTimeData: result.stats.stats.allTime, daysTimeData: result.stats.stats.daysTime})
        } else {
            dispatch({type: 'ERROR-ADD', status: result.status, error: result.error})
        }
    }
}