import React from 'react'
import {connect} from 'react-redux';
import LineChart from './LineChart'

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
            <div className='dashboard-item posts-ds-view'>
                <span>Recent posts</span>
                <div className='posts-table-container'>
                    <table className='posts-table'>
                        <thead>
                            <tr className='posts-table-row posts-table-head'>
                                <th className='table-cell'>username</th>
                                <th className='table-cell'>email</th>
                                <th className='table-cell'>image</th>
                                <th className='table-cell'>upload date</th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* example data */}
                            <tr className='posts-table-row'>
                                <th className='table-cell'>user1</th>
                                <th className='table-cell'>user1@test.com</th>
                                <th className='table-cell'>jkhHJgN65F.png</th>
                                <th className='table-cell'>01-02-2021</th>
                            </tr>
                            <tr className='posts-table-row'>
                                <th className='table-cell'>user1</th>
                                <th className='table-cell'>user1@test.com</th>
                                <th className='table-cell'>jkhHJgN65F.png</th>
                                <th className='table-cell'>01-02-2021</th>
                            </tr>
                            <tr className='posts-table-row'>
                                <th className='table-cell'>user1</th>
                                <th className='table-cell'>user1@test.com</th>
                                <th className='table-cell'>jkhHJgN65F.png</th>
                                <th className='table-cell'>01-02-2021</th>
                            </tr>
                        </tbody>
                    </table>
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
