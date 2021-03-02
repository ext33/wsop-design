import React from 'react'
import {connect} from 'react-redux';
import LineChart from './LineChart'
// import BarChart from './BarChart'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function DashboardPage(props) {

    return (
        <div id='dashboard' className='flex animate__animated animate__fadeIn'>
            <div className='dashboard-item line-chart flex'>
                <span>Today</span>
                <div className='chart-container'>
                    <LineChart data={props.data1} />
                </div>
            </div>
            <div className='dashboard-item total-view'>
                <span>All time</span>
                <div className='total-info'>
                    <p>2000 views</p>
                    <p>321 posts</p>
                    <p className='total-info-date'>on 02.03.2021</p>
                </div>
            </div>
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
