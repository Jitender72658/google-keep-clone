import React,{useContext, useState} from 'react';
import NoteItemContext from "./NoteItemsContext";

const NoteItemProvider = (props) => {
   const [noteItems, setNoteItems] = useState([]);
  return (
    <NoteItemContext.Provider value={{noteItems,setNoteItems}}>
        {props.children}
    </NoteItemContext.Provider>
  );
};

export default NoteItemProvider;