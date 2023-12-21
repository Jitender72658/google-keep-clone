import React,{useContext} from 'react'
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import keep_image from "../Images/keep_image.png"
import hamburgmenu_icon from "../Images/icons8-hamburger-menu.svg"
import RefreshSharpIcon from '@mui/icons-material/RefreshSharp';
import ViewStreamSharpIcon from '@mui/icons-material/ViewStreamSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ClassNameContext from "../Context/ClassNameConext";
import NoteItemContext from '../Context/NoteItemsContext';

const Navbar = () => {
     const {className, setClassName} = useContext(ClassNameContext);
     const {searchInput,setSearchInput,filteredNotes, setFilteredNotes,noteItems} = useContext(NoteItemContext);
     function showDetail(){
      setClassName(className === "showName" ? "hideName" : "showName");
     }
     function implementSearch() {
      setFilteredNotes(noteItems.filter((value) => value.title.includes(searchInput) || value.content.includes(searchInput)));
    }
     function implementUpdate(event){
          setSearchInput(event.target.value);
           implementSearch();
     }
  return (
    <nav>
        <div className='nav-sidebar'> 
            <button onClick={showDetail}> <img src={hamburgmenu_icon} alt="hamburgurmenu-logo"/></button>
             <img className= "noteLogo" src={keep_image} alt= "keep-logo"/>
             <p>Keep</p>
        </div>
        <div>
              <button onClick={implementSearch} className='searchBtn'><SearchSharpIcon/></button>
             <input value={searchInput} onChange={(e)=>implementUpdate(e)} placeholder="Search Here"/>
        </div>
        <div className='nav-rightContainer'>
             <button><RefreshSharpIcon/></button>
             <button><ViewStreamSharpIcon/></button>
             <button><SettingsSharpIcon/></button>
             <button><AppsSharpIcon/></button>
             <button><AccountCircleSharpIcon/></button>
        </div>
    </nav>
  )
}

export default Navbar