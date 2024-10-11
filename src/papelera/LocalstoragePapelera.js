import React from "react";

function LocalStoragePapelera(itemName,initialvalue) {
    
    const [itemBorrado, setItemBorrado] = React.useState(() => {
        const stringyItemPapelera = localStorage.getItem(itemName);
        return stringyItemPapelera ? JSON.parse(stringyItemPapelera) : initialvalue;
    });




    const saveItemPapelera=(newItem)=>{
        localStorage.setItem(itemName,JSON.stringify(newItem))
        setItemBorrado(newItem);
    }


    return {saveItemPapelera,itemBorrado,setItemBorrado}
}



export {LocalStoragePapelera}