import React from 'react';
import ReactDOM from 'react-dom'


function Modal({children}) {
    return ReactDOM.createPortal(
        <span>
            {children}
        </span>,document.getElementById('Modal')
    )
}

export {Modal}