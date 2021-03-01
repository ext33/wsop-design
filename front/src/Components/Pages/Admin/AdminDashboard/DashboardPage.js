import React from 'react'
import {connect} from 'react-redux';
import LineChart from './LineChart'
// import BarChart from './BarChart'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function DashboardPage(props) {

    return (
        <div id='dashboard' className='flex'>
            <div className='dashboard-item line-chart flex'>
                <span>Today</span>
                <LineChart data={props.data1} />
            </div>
            {/* <div className='dashboard-item line-chart flex'>
                <BarChart data={props.data2} />
            </div> */}
        </div>
    )
}

function mapStateToProps(state){
    return {
        data1: state.dashboardReducer.data1,
        data2: state.dashboardReducer.data2
    }
}

function mapDispatchToProps(dispatch){
    return {
          
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
