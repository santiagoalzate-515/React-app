import React from "react";
import "./ContainerInitial"

function ContainerInitial({children}) {
    return(
        <div className="container-main">
            {children}
        </div>
    )
}

export{ContainerInitial}