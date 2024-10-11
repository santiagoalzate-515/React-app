import React from 'react'
import ReactDOM from 'react-dom'

function Modal2({children}) {
    return ReactDOM.createPortal(
        <span>
            {children}
        </span>,document.getElementById('Modal2')
    )
}

export {Modal2}