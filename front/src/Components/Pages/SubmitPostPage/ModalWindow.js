import React from 'react'

function ModalWindow(props) {
    let cls = ['modal']
    if (props.message) {
        cls.push('modal-message')
    }
    return (
        <div className={cls.join(' ')}>  
            {props.message ? <p>{props.message}</p> : <p>{props.error}</p>}    
        </div>
    )
}

export default ModalWindow
