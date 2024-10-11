import React from 'react'
import ReactDOM from 'react-dom'

function ModalCuestion({children}) {
    return ReactDOM.createPortal(
        <span>
            {children}
        </span>,document.getElementById('ModalCuestion')
    )
}

export {ModalCuestion}