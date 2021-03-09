import React from 'react'
import {NavLink} from 'react-router-dom'

function PostListItem(props) {
    return (
        <div className='list-item'>
            <NavLink className='list-item-prop' to={`/admin/post/${props.id}`}>{props.imageSrc.length>15 ? props.imageSrc.slice(0, 15)+'...' : props.imageSrc}</NavLink>
            <div className='list-item-prop'>{props.username}</div>
            <div className='list-item-prop'>{props.email}</div>
            <div className='list-item-prop'>{props.uploadDate}</div>
            <div className='list-item-prop'>{props.submitted==='true' ? 'yes' : 'no'}</div>
        </div>
    )
}

export default PostListItem
