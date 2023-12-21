import React, { useContext, useEffect, useState } from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import NoteItemContext from '../Context/NoteItemsContext';
import DataContext from '../Context/DataContext';

const NoteItems = () => {
  const { noteItems, setNoteItems, filteredNotes,setFilteredNotes} = useContext(NoteItemContext);
  const { setTitle, setNoteContent } = useContext(DataContext);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  useEffect(() => {
    setFilteredNotes(noteItems)
  }, [noteItems]); 
  

  const handleDeleteClick = (id) => {
    setItemToDelete(id);
    setShowConfirmation(true);
    console.log("delete button clicked")
  };

  const handleCancelClick = () => {
    setItemToDelete(null);
    setShowConfirmation(false);
  };

  const handleConfirmDelete = () => {
    if (itemToDelete !== null) {
      setNoteItems(noteItems.filter((value) => value.id !== itemToDelete));
      setFilteredNotes(noteItems);
      setItemToDelete(null);
    }
    setShowConfirmation(false);
  };

  const handleEdit = (id) => {
    console.log(id, "edit clickec")
    const foundNote = noteItems.find((note) => note.id === id);
    if (foundNote) {
      setTitle(foundNote.title);
      setNoteContent(foundNote.content);
      setNoteItems(noteItems.filter((note) => note.id !== id));
      setFilteredNotes(noteItems);
    }
  };  
  console.log(filteredNotes.length);
  return (
    <div className='noteItemsContainer'>
      {showConfirmation && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete?</p>
          <button className="confirm-delete-button" onClick={handleConfirmDelete}>Confirm</button>
          <button className='confirm-cancel-button' onClick={handleCancelClick}>Cancel</button>
        </div>
      )}

      {
        filteredNotes.length > 0 &&
        filteredNotes.slice().reverse().map((note) => (
          <div className='noteItemDiv' key={note.id} style={{ backgroundColor: note.background }}>
            <p>{note.title}</p>
            <p>{note.content}</p>
            <div className='noteItemModificationButton'>
              <button onClick={() => handleEdit(note.id)}><EditOutlinedIcon /></button>
              <button onClick={() => handleDeleteClick(note.id)}><DeleteOutlineOutlinedIcon /></button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default NoteItems;
