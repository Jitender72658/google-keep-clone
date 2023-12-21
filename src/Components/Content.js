import React,{useContext}from 'react'
import AddNote from './AddNote'
import NoteItems from './NoteItems'

const Content = () => {
    
  return (
    <div className='contentContainer'>
        <div>
              <AddNote/>
        </div>
        <div className='noteItemOuterContainer'>
            <NoteItems/>
        </div>       
    </div>
  )
}

export default Content