import React from "react";

function useLocalStorage(initialvalue,itemname) {
    const[Item,setItem]=React.useState(initialvalue)
    const[error,setError]=React.useState(false)
    const[loading,setLoading]=React.useState(true)

    React.useEffect(()=>{
        try {
            setTimeout(() => {
                const stringyItem=localStorage.getItem(itemname)
                let parseItem

                if (!stringyItem) {
                    localStorage.setItem(itemname,JSON.stringify(initialvalue))
                } else {
                    parseItem=JSON.parse(stringyItem)
                    setItem(parseItem)

                }
                setLoading(false)
            }, 1000);
        } catch (error) {
            setError(true)
            setLoading(false)
        }
    },[])

    const saveItem=(newItem)=>{
        localStorage.setItem(itemname,JSON.stringify(newItem))
        setItem(newItem)
    }

    return{Item,saveItem,error,loading}
}

export{useLocalStorage}