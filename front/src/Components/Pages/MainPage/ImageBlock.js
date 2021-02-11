import React from 'react'

export default function ImageBlock(props) {
    return (
        <div className='img-container'>
            <img src={props.image} alt={props.alt} />
        </div>
    )
}
