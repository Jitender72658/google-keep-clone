import React,{useContext} from 'react'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ClassNameContext from '../Context/ClassNameConext';

const Sidebar = () => {
      const {className} = useContext(ClassNameContext);
      console.log(className);
   
  return (
    <div className='sidebarContent'>
        <button><LightbulbOutlinedIcon/> <span className={className}>Notes</span></button>
        <button><NotificationsNoneOutlinedIcon/> <span className={className}>Remainders</span></button>
        <button> <ModeEditOutlineOutlinedIcon/><span className={className}>Edit lables</span></button>
        <button><ArchiveOutlinedIcon/> <span className={className}>Archives</span></button>
        <button> <DeleteOutlineOutlinedIcon/><span className={className}>Trash</span></button>
    </div>
  )
}

export default Sidebar