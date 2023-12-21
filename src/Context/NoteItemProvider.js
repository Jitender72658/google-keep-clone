import React,{useContext, useState} from 'react';
import NoteItemContext from "./NoteItemsContext";

const NoteItemProvider = (props) => {
   const [noteItems, setNoteItems] = useState([]);
   const [searchInput, setSearchInput] = useState("");
   const [filteredNotes, setFilteredNotes] = useState([]);
  return (
    <NoteItemContext.Provider value={{noteItems,setNoteItems,searchInput,setSearchInput, filteredNotes,setFilteredNotes}}>
        {props.children}
    </NoteItemContext.Provider>
  );
};

export default NoteItemProvider;