import React, {useEffect, useRef} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchPost, submitPost, archivePost, deletePost} from '../../../../Store/actions/fetchPost'
import Loading from '../../../UI/Loading'

function PostPage(props) {

    let {id} = useParams('id')
    let history = useHistory()

    let rendered = useRef(false)

    useEffect(() => {
        if(rendered.current === false) {
            props.fetchPostData(id)
            rendered.current = true
        }
    }, [props, id])


    function deleteHandler() {
        props.deletePost(props.post[0]._id)
        history.push('/admin/post-list')
    }

    return (
        <div className='animate__animated animate__fadeIn'>
            {
                props.post && props.post.length > 0 ?
                    <div className='flex post_container'>
                        <div className='post_head'>
                            <h3>Post ID {props.post[0]._id}</h3>
                        </div>
                        <div className='flex post_body'>
                            <div className='post_image'>
                                <img src={'http://127.0.0.1:8080/' + props.post[0].imageSrc} alt={props.post[0].imageAlt} />
                            </div>
                            <div className='flex post_description'>
                                <p>Username: {props.post[0].username}</p>
                                <p>Email: {props.post[0].email}</p>
                                <p>Upload Date: {props.post[0].uploadDate}</p>
                                <p>Description: {props.post[0].description}</p>
                                <p>Submitted: {props.post[0].submitted}</p>
                                <div className='flex post_button-container'>
                                    {
                                        props.post[0].submitted === 'false' ?
                                            <button onClick={() => props.submitPostData(props.post[0]._id)}>
                                                Submit post
                                            </button>
                                        :   <button onClick={() => props.archivePost(props.post[0]._id)}>
                                                Archive post
                                            </button>
                                    }
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
        submitPostData: (id) => dispatch(submitPost(id)),
        archivePost: (id) => dispatch(archivePost(id)),
        deletePost: (id) => dispatch(deletePost(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)
