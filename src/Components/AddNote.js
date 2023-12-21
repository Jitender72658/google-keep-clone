import { useState,useContext} from "react";
import NoteItemContext from "../Context/NoteItemsContext"
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import { NotificationAddOutlined } from "@mui/icons-material";
import DataContext from "../Context/DataContext";

const AddNote = () => {
     const{title,setTitle,noteContent,setNoteContent} = useContext(DataContext);
      const {noteItems, setNoteItems} = useContext(NoteItemContext);
     function handleTitleUpdate(event){
      setTitle(event.target.value);   
     }
     function handleContentUpdate(event){
      setNoteContent(event.target.value);
      event.target.style.height = 'auto';
      event.target.style.height = event.target.scrollHeight + 'px';
     }
     function handleSubmit(event) {
          event.preventDefault();
          if (title !== "" || noteContent !== "") {
              setNoteItems([
                  ...noteItems,
                 { title: title, content: noteContent, background: "white" }
               ]);
         }
         setTitle("");
         setNoteContent("");
         console.log(noteItems);
         console.log("submitted");
    }
     
  return (
    <div className='addNote'>
        <form className='form' onSubmit={(event)=>handleSubmit(event)} >
             <input value={title} style={{fontWeight: "bold"}}onChange={handleTitleUpdate}placeholder='Title'/>
             <textarea value={noteContent} onChange={handleContentUpdate} type='text'  placeholder='Take a note ...'/>
             <div className="newNoteContainerButtons">
                <button><NotificationAddOutlined/></button>
                <button><PersonAddAltOutlinedIcon/></button>
                <button><ColorLensOutlinedIcon/></button>
                <button><InsertPhotoOutlinedIcon/></button>
                <button><ArchiveOutlinedIcon/></button>
                <button><UndoOutlinedIcon/></button>
                <button><RedoOutlinedIcon/></button>
                <button type="submit">Add Note</button>
             </div>
        </form>
    </div>
  )
}

export default AddNote