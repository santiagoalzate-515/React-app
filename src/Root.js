import React from 'react';
import ReactDOM from 'react-dom'

function Root({children}) {
    return ReactDOM.createPortal(
        <span>
            {children}
        </span>,document.getElementById('root')
    )
}

export {Root}