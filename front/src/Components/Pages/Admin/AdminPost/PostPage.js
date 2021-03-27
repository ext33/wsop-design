import React, {useEffect, useRef} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchPost, updatePost, deletePost} from '../../../../Store/actions/fetchPost'
import Loading from '../../../UI/Loading'

function PostPage(props) {

    let {id} = useParams()
    let history = useHistory()

    let rendered = useRef(false)

    useEffect(() => {
        if(rendered.current === false) {
            props.fetchPostData(id)
            rendered.current = true
        }
    })

    function deleteHandler() {
        props.deletePost(props.post.id)
        history.push('/admin/post-list')
    }

    return (
        <div className='animate__animated animate__fadeIn'>
            {
                props.post ?
                    <div className='flex post-container'>
                        <div className='post-head'>
                            <h3>Post ID {props.post.id}</h3>
                        </div>
                        <div className='flex post-body'>
                            <div className='post-image'>
                                <img src={props.post.imageSrc} alt={props.post.imageAlt} />
                            </div>
                            <div className='flex post-description'>
                                <p>Username: {props.post.username}</p>
                                <p>Email: {props.post.email}</p>
                                <p>Upload Date: {props.post.uploadDate}</p>
                                <p>Description: {props.post.description}</p>
                                <p>Submitted: {props.post.submitted}</p>
                                <div className='flex post-button-container'>
                                    <button onClick={() => props.updatePostData(props.post.id)}>
                                        Submit post
                                    </button>
                                    <button onClick={() => deleteHandler()}>
                                        Delete post
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                : <Loading />
            }
        </div>
    )
}

function mapStateToProps(state){
    return {
        error: state.postReducer.errorStatus,
        post: state.postReducer.post,
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchPostData: (id) => dispatch(fetchPost(id)),
        updatePostData: (id) => dispatch(updatePost(id)),
        deletePost: (id) => dispatch(deletePost(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)
