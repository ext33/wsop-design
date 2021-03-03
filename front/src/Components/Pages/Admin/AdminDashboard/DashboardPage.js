import React from 'react'
import {connect} from 'react-redux';
import LineChart from './LineChart'
import {NavLink} from "react-router-dom";

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
                    <div className='posts-table'>
                        <div className='posts-table-row posts-table-head'>
                            <div className='table-cell'>username</div>
                            <div className='table-cell'>email</div>
                            <div className='table-cell'>image</div>
                            <div className='table-cell'>upload date</div>
                        </div>
                        {/* example data */}
                        <div className='posts-table-row'>
                            <div className='table-cell'>user1</div>
                            <div className='table-cell'>user1@test.com</div>
                            <div className='table-cell'>jkhHJgN65F.png</div>
                            <div className='table-cell'>01-02-2021</div>
                        </div>
                        <div className='posts-table-row'>
                            <div className='table-cell'>user1</div>
                            <div className='table-cell'>@test.com</div>
                            <div className='table-cell'>jkhHJgN65F.png</div>
                            <div className='table-cell'>01-02-2021</div>
                        </div>
                        <div className='posts-table-row'>
                            <div className='table-cell'>user1</div>
                            <div className='table-cell'>user1@test.com</div>
                            <div className='table-cell'>.png</div>
                            <div className='table-cell'>01-02-2021</div>
                        </div>
                    </div>
                </div>
                <div className='posts-link'>
                    <NavLink to="/admin/post-list" strict >
                        See more posts
                    </NavLink>
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
