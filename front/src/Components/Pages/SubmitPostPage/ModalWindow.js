import React from 'react'

function ModalWindow(props) {
    if (props.showModal) {
        return (
            <div className={'modal'}>
                <div className={'modal-layout'}>
                    <div className={'modal-header'}>
                        <button onClick={()=>props.closeHandler()}>&times;</button>
                    </div>
                    <div className={'modal-body'}>
                        {props.message ? <p>{props.message}</p> : <p>{props.error}</p>}
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default ModalWindow
