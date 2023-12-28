import { useState,useContext,useEffect,useRef} from "react";
import NoteItemContext from "../Context/NoteItemsContext"
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import DataContext from "../Context/DataContext";
import ColorPicker from './ColorPicker';

const AddNote = () => {
   const inputRef = useRef(null);
  const { title, setTitle, noteContent, setNoteContent,bgColor,setColorPickerAnchor, id,setId} = useContext(DataContext);
  const { noteItems, setNoteItems,setFilteredNotes } = useContext(NoteItemContext);
  

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
      setNoteItems(storedNotes);
      setFilteredNotes(storedNotes);
    }
  }, [setNoteItems]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(noteItems));
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
    }
  }, [noteItems]);

  function handleTitleUpdate(event) {
    setTitle(event.target.value);
  }

  function handleContentUpdate(event) {
    if(event===null){
      return;
    }
    setNoteContent(event.target.value);
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() !== "" || noteContent.trim() !== "") {
      setNoteItems([
        ...noteItems,
        {
          title: title,
          content: noteContent,
          background: bgColor,
          id: id
        },
      ]);
      setFilteredNotes(noteItems);
      setId(id+1);
    }
    setTitle("");
    setNoteContent("");
  };
  const handleColorPickerClick = (event) => {
    event.preventDefault();
    setColorPickerAnchor(event.currentTarget);
  };  
  return (
    <div className='addNote'>
        <form className='form' onSubmit={(event)=>handleSubmit(event)} >
             <input value={title} style={{fontWeight: "bold"}}onChange={handleTitleUpdate}placeholder='Title'/>
             <textarea ref={inputRef} value={noteContent} onChange={handleContentUpdate} type='text'  placeholder='Take a note ...'/>
             <div className="newNoteContainerButtons">
                <button><AddAlertOutlinedIcon/></button>
                <button><PersonAddAltOutlinedIcon/></button>
                <button onClick={handleColorPickerClick}><ColorLensOutlinedIcon/></button>
                <button><InsertPhotoOutlinedIcon/></button>
                <button><ArchiveOutlinedIcon/></button>
                <button><MoreVertOutlinedIcon/></button>
                <button><UndoOutlinedIcon/></button>
                <button><RedoOutlinedIcon/></button>
                <button type="submit">Add Note</button>
             </div>
             <div>
                <ColorPicker/>
             </div>
        </form>
    </div>
  )
}

export default AddNote