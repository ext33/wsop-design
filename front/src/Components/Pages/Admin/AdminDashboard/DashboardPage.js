import React from 'react'
import {connect} from 'react-redux';
import LineChart from './LineChart'

function DashboardPage(props) {

    return (
        <div id='dashboard'>
            <div className='chart'>
                <span>Activity</span>
                <LineChart data={props.data} />
            </div>
            <div className=''>
                
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        data: state.dashboardReducer.data
    }
}

function mapDispatchToProps(dispatch){
    return {
          
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
