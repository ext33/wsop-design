import React from 'react'

export default function ImageBlock(props) {
    return (
        <div className='images_img-container'>
            <img className='images_img' src={'http://127.0.0.1:8080/' + props.image} alt={props.alt} />
        </div>
    )
}
