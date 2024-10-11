import React from "react";
import { TodoContext } from "../TodoContext";
import App from "../App";

function Initial({children}) {
    const {initiaPage}=React.useContext(TodoContext)

        {initiaPage && <Root><App/></Root>}
    return(
        <div>
                {children}
        </div>
    )
}

export{Initial}