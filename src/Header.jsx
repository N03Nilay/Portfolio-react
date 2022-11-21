import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <div className="wrapper-header">
            <ul>
                <li className='home-header'><Link to="/home"><HomeOutlinedIcon style={{fontSize: "200%",color:"white"}}/></Link></li>
                <li className='about-header'><Link to="/about"><PersonOutlineIcon style={{fontSize: "200%",color:"white"}}/></Link></li>
                <li className='resume-header'><Link to="/resume"><DescriptionOutlinedIcon style={{fontSize: "200%",color:"white"}}/></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header