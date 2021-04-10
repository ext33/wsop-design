import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function RotateNotify() {
    return (
        <div className="admin_notify-body flex animate__animated animate__fadeIn">
            <p className="admin_notify-title">
                Rotate your device
            </p>
            <p className="admin_notify-icon flex">
                <FontAwesomeIcon icon={['fas', 'mobile']} />
                <FontAwesomeIcon icon={['fas', 'chevron-right']} />
                <FontAwesomeIcon className="fa-rotate-90" icon={['fas', 'mobile']} />
            </p>
            <p className="admin_notify-ps">
                * if it is'nt work, try on another device
            </p>
        </div>
    )
}

export default RotateNotify
