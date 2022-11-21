import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';



const Home = () => {
  return (
    <div style={{backgroundImage: "linear-gradient(to right, #fc354c,#0abfbc)",height:"100%"}}>
        <div className="wrapper-home-first">
            <div className="intro-home" >
                <h1 style={{color:"white"}}>Hi There...</h1>
                <h1 style={{color:"white"}}>I am <span className='highlight'>Nilay Rudra </span></h1>
                <h1 style={{color:"white"}}>Frontend Web Developer</h1>
            </div>
            <div className="img-home">
                <img src="pngtree-programmer-semi-flat-color-vector-character-png-image_6016257-removebg-preview.png" alt="" height={350} width={450}/>
            </div>
        </div>
        <div className="wrapper-home-second">
            <h1 style={{color:"white"}}>LET ME <span className='highlight'>INTRODUCE</span> MYSELF</h1>
            <h2 style={{color:"white"}}>I fell in love with development and I have always strived for betterment, I think… 🤷‍♂️</h2>
            <h2 style={{color:"white"}}>I am fluent in technologies like <span className='highlight'> HTML5 </span>, <span className='highlight'>CSS3 </span>, <span className='highlight'>Javascript </span> and <span className='highlight'>ReactJs</span></h2>
            <h2 style={{color:"white"}}>My field of Interests are building new <span className='highlight'> Web Applications</span> and also to explore lot about it</h2>
            <h2 style={{color:"white"}}>Whenever possible, I also follow my passion of <span className='highlight'>Cyber Security</span> and<span className='highlight'> Competetive Programming</span></h2>

        </div>
        <div className="wrapper-home-third">
            <h1 style={{color:"white"}}>VISIT ME VIRTUALLY</h1>
            <h3 style={{color:"white"}}>Feel free to <span className='highlight'> connect</span> with me</h3>
            <div className="social-icons">
                <span className='icons'><a href="https://www.facebook.com/nilay.rudra.9"><FacebookIcon style={{color:"white"}}/></a></span>               
                 <span className='icons'><a href="https://www.instagram.com/rudra_nilay03/"><InstagramIcon style={{color:"white"}}/></a></span>
                <span className='icons'><a href="https://www.linkedin.com/in/nilay-rudra-421427229/"><LinkedInIcon style={{color:"white"}}/></a></span>
                <span className='icons'><a href="https://github.com/N03Nilay"><GitHubIcon style={{color:"white"}}/></a></span>              
            </div>
        </div>
    </div>
  )
}

export default Home