import React,{useContext} from 'react'
import NoteItemContext from '../Context/NoteItemsContext'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DataContext from '../Context/DataContext';

const NoteItems = () => {
    const {noteItems, setNoteItems} = useContext(NoteItemContext);
    const{title,setTitle,noteContent,setNoteContent} = useContext(DataContext);
     console.log(noteItems);
    function handleEdit(id){
        const value = noteItems[id];
        setTitle(value.title);
        setNoteContent(value.content);
        setNoteItems(noteItems.filter((content,index)=> id!==index));
    }
  return (
    <div className='noteItemsContainer'>
       {  noteItems.length>0 && noteItems.map((note,index)=>(<div className='noteItemDiv' key={index} style={{backgroundColor:note.background}}>
                        <p>{note.title}</p>
                        <p>{note.content}</p>
                        <div className='noteItemModificationButton'>
                            <button onClick={()=>handleEdit(index)}><EditOutlinedIcon/></button>
                            <button><DeleteOutlineOutlinedIcon/></button>
                        </div>
                     </div>))
        }
    </div>
  )
}

export default NoteItems