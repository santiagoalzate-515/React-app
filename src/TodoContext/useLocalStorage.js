import React from "react";

function useLocalStorage(itemName,initialValue) {

    const [Item,setItem]=React.useState(initialValue);
    const [error,setError]=React.useState(false);
    const [loading,setLoading]=React.useState(true);

    React.useEffect(()=>{
        try {
            setTimeout(()=>{
                const stringieItem=localStorage.getItem(itemName);
                let parseItem;

                if (!stringieItem) {
                    localStorage.setItem(itemName,JSON.stringify(initialValue))
                } else {
                    parseItem=JSON.parse(stringieItem);
                    setItem(parseItem)
                }
                setLoading(false)
            },1000)
        } catch (error) {
            setError(true)
            setLoading(false)
        }
    },[])
    
    const saveItem=(newItem)=>{
        localStorage.setItem(itemName,JSON.stringify(newItem))
        setItem(newItem);
    }

    return {Item,saveItem,error,loading};
}

export{useLocalStorage};