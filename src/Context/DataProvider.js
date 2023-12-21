import React,{useState} from 'react';
import DataContext from './DataContext'

const DataProvider = (props) => {
    const [title, setTitle] = useState("");
    const[noteContent, setNoteContent] = useState("");
    const[bgColor, setBgColor] = useState("white");
    const [colorPickerAnchor, setColorPickerAnchor] = useState(null);
    const [id,setId] = useState(1);
  return (
    <DataContext.Provider value={{title,setTitle,noteContent,setNoteContent,bgColor,setBgColor,colorPickerAnchor,setColorPickerAnchor,id,setId}}>
        {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;