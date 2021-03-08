import React, {useEffect, useRef} from 'react'
import {connect} from 'react-redux'
import LineChart from './LineChart'
import {NavLink, Redirect} from "react-router-dom"
import {fetchImageData} from '../../../../Store/actions/fetchImages'
import {fetchStatsData} from '../../../../Store/actions/fetchDashboardStats'
import Loading from '../../../Loading'

function DashboardPage(props) {

    let rendered = useRef(false)
    useEffect(()=>{
        if(rendered.current === false) {
            props.fetchStatsData()
            props.fetchImagesData()
            rendered.current = true
        }
    })

    if(props.statsError || props.imagesError){
        return (<Redirect to={{
            pathname: "/error",
            state: {
                type: 500,
            }
        }}/>)
    }

    return (
        <div id='dashboard' className='flex animate__animated animate__fadeIn'>
        { props.imagesData.length > 0 && props.allTimeData ?
            <>
            <div className='dashboard-item line-chart flex'>
                <span>Today</span>
                <div className='chart-container'>
                    <LineChart data={props.daysTimeData} />
                </div>
            </div>
            <div className='dashboard-item total-view'>
                <span>All time</span>
                <div className='total-info'>
                    <p>{props.allTimeData.visits} views</p>
                    <p>{props.allTimeData.posts} posts</p>
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
                        {
                            props.imagesData.map((elem, index) => {
                                return(
                                    <div className='posts-table-row' key={index}>
                                        <div className='table-cell'>{elem.username}</div>
                                        <div className='table-cell'>{elem.email}</div>
                                        <div className='table-cell'>{elem.imageSrc.length>15 ? elem.imageSrc.slice(0, 15)+'...' : elem.imageSrc}</div>
                                        <div className='table-cell'>{elem.uploadDate}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='posts-link'>
                    <NavLink to="/admin/post-list" strict >
                        See more posts
                    </NavLink>
                </div>
            </div>
            </>
            : <Loading />
        }
        </div>
    )
}

function mapStateToProps(state){
    return {
        allTimeData: state.dashboardReducer.allTimeData,
        daysTimeData: state.dashboardReducer.daysTimeData,
        statsError: state.dashboardReducer.error,
        imagesError:  state.imagesReducer.error,
        imagesData: state.imagesReducer.imagesObj,
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchImagesData: () => dispatch(fetchImageData()),
        fetchStatsData: () => dispatch(fetchStatsData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
