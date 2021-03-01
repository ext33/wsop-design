import React from 'react'
import {connect} from 'react-redux';
import LineChart from './LineChart'
import BarChart from './BarChart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function DashboardPage(props) {

    return (
        <div id='dashboard' className='flex'>
            <div className='dashboard-row flex'>
                <div className='dashboard-item bordered flex'>
                    <span>Activity</span>
                    <LineChart data={props.data1} />
                </div>
                
                <div className='dashboard-item flex'>
                    <div className='stat-body flex'>
                        <FontAwesomeIcon icon={['far', 'eye']}/>
                        <div className='stat-main flex'>
                            <div className='stat-title'>All visits:</div>
                            <div className='stat-value'>1000</div>
                        </div>
                    </div>
                    <div className='stat-body flex'>
                        <FontAwesomeIcon />
                        <div className='stat-main flex'>
                            <div className='stat-title'>All posts: </div>
                            <div className='stat-value'>200</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='dashboard-row flex'>
                <div className='dashboard-item flex'>
                    
                </div>
                
                <div className='dashboard-item bordered flex'>
                    <span>Today's activity</span>
                    <BarChart data={props.data2}/>
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
