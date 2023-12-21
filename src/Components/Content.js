import React,{useContext}from 'react'
import AddNote from './AddNote'
import NoteItems from './NoteItems'
import DeleteConfirmation from './DeleteConfirmation'

const Content = () => {
    
  return (
    <div className='contentContainer'>
        <div>
              <AddNote/>
        </div>
        <div>
            { <DeleteConfirmation/> && <NoteItems/> }
        </div>       
    </div>
  )
}

export default Content