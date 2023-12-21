import React,{useState} from 'react';
import DataContext from './DataContext'

const DataProvider = (props) => {
    const [title, setTitle] = useState("");
    const[noteContent, setNoteContent] = useState("");
  return (
    <DataContext.Provider value={{title,setTitle,noteContent,setNoteContent}}>
        {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;