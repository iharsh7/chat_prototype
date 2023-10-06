import React from 'react'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IconButton } from '@mui/material';

const CreateGroup = () => {
  return (
    <div  className='group'>
        <div className='groupcontent'>
            <div className='grpinpt'>
        <input type="text" name="" className='groupdata' placeholder='Add Group Name'/>
        </div>
        <div className='grpcheck'>
        <IconButton>
        <DoneOutlineIcon/>
        </IconButton>
        </div>
        </div>
    </div>
  )
}

export default CreateGroup