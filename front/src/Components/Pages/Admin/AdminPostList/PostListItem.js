import React from 'react'

function PostListItem(props) {
    return (
        <div className='list-item'>
            <a className='list-item-prop' href={props.imageSrc}>{props.imageSrc.length>15 ? props.imageSrc.slice(0, 15)+'...' : props.imageSrc}</a>
            <div className='list-item-prop'>{props.username}</div>
            <div className='list-item-prop'>{props.email}</div>
            <div className='list-item-prop'>{props.uploadDate}</div>
            <div className='list-item-prop'>{props.submitted==='true' ? 'yes' : 'no'}</div>
        </div>
    )
}

export default PostListItem
