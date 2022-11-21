import React from 'react'
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';

const Resume = () => {
  return (
    <div style={{backgroundImage: "linear-gradient(to right, #fc354c,#0abfbc)",height:"35.4rem"}}>
        <a href ="nilay resume web1 (2).pdf" attributes-list download ="Nilay-Rudra-Resume">
            <div className='download'><button style={{cursor:"pointer"}} className='resume-btn-icon' > <DownloadForOfflineOutlinedIcon /><br /><h2> DOWNLOAD RESUME</h2></button>
            </div>
            </a> 
    </div>
  )
}

export default Resume