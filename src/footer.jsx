import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const footer = () => {
  return (
    <div style={{backgroundColor:"black" , color:"white"}}>
        <div className="wrapper-footer">
            <div className="left">
            <p>Designed and Developed by Nilay Rudra</p>
            </div>
            <div className="centre">
            <p>Copyright &#169; 2022 </p>
            </div>
            <div className="right">
            <p><a href="https://www.facebook.com/nilay.rudra.9"><FacebookIcon style={{color:"white"}}/></a>&nbsp;&nbsp; <a href="https://www.instagram.com/rudra_nilay03/"><InstagramIcon style={{color:"white"}} /></a>&nbsp;&nbsp; <a href="https://www.linkedin.com/in/nilay-rudra-421427229/"><LinkedInIcon style={{color:"white"}}/></a>&nbsp;&nbsp; <a href="https://github.com/N03Nilay"><GitHubIcon style={{color:"white"}}/></a>&nbsp;&nbsp;</p>
            </div>
        </div>
    </div>
  )
}

export default footer