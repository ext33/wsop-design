import React from 'react'
import {connect} from 'react-redux';
import LineChart from './LineChart'

function DashboardPage(props) {

    return (
        <div id='dashboard' className='flex'>
            <div className='dashboard-row flex'>
                <div className='dashboard-item flex'>
                    <span>Activity</span>
                    <LineChart data={props.data} />
                </div>
                
                <div className='dashboard-item flex'>
                    
                </div>
            </div>

            <div className='dashboard-row flex'>
                <div className='dashboard-item flex'>
                    
                </div>
                
                <div className='dashboard-item flex'>
                    
                </div>
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
