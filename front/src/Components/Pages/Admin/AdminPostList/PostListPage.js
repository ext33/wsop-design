import React, {useEffect, useRef} from 'react'
import PostListItem from './PostListItem'
import {connect} from 'react-redux'
import {fetchImageData} from '../../../../Store/actions/fetchImages'
import Loading from '../../../UI/Loading'

function PostListPage(props) {


    let rendered = useRef(false)

    useEffect(()=>{
        if(rendered.current === false) {
            props.fetchImagesData()
            rendered.current = true
        }
    })

    return (
        <div className='flex animate__animated animate__fadeIn'>
            {/* TODO: add search and filters */}
            {/* <div className='list-container'>

            </div> */}
            <div className='list-container'>
                
                    <div className='list-item list-head'>
                        <div className='list-item-prop'>image</div>
                        <div className='list-item-prop'>username</div>
                        <div className='list-item-prop'>email</div>
                        <div className='list-item-prop'>upload date</div>
                        <div className='list-item-prop'>approved</div>
                    </div>
                        { 
                            props.imagesData.length > 0 ?
                            props.imagesData.map((elem, i)=>{
                                return(
                                    <PostListItem 
                                        key={i}
                                        id={elem._id}
                                        username={elem.username}
                                        email={elem.email}
                                        imageSrc={elem.imageSrc}
                                        uploadDate={elem.uploadDate}
                                        submitted={elem.submitted}
                                    />
                                )
                            }) 
                            :   <div className='table_posts-table-info'>
                                    No posts yet...
                                </div>    
                        }
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        imagesError:  state.imagesReducer.error,
        imagesData: state.imagesReducer.imagesObj,
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchImagesData: () => dispatch(fetchImageData()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListPage)
