import React from 'react'

export default function ImageBlock(props) {
    return (
        <div className='images_img-container'>
            <img className='images_img' src={props.image} alt={props.alt} />
        </div>
    )
}
