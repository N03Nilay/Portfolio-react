import React from 'react'
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import StarPurple500RoundedIcon from '@mui/icons-material/StarPurple500Rounded';

const About = () => {
  return (
    <div style={{backgroundImage: "linear-gradient(to right, #fc354c,#0abfbc)",height:"100%",color:"white"}}>
        <div className="wrapper-about-first">
            <div className="about-intro">
            <h1>Who I'm</h1>
            <h2>Hi Everyone, I am <span className="highlight"> Nilay Rudra</span> from <span className="highlight">Lucknow, India</span>. <br />
                I am pursuing my B-Tech in Computer Science Engineering <br /> from Ajay Kumar Garg Engineering College,Ghaziabad.</h2>
                <h2>Apart from Frontend Web Development my Interest includes</h2>
                <h2>
                    <ul>
                        <li><DoubleArrowRoundedIcon /><span className="highlight">Cyber Security</span></li>
                        <li><DoubleArrowRoundedIcon /><span className="highlight">Competetive Programming</span></li>
                        <li><DoubleArrowRoundedIcon /><span className="highlight">Backend technologies used in Web Development</span></li>
                    </ul>
                </h2>
                </div>
                <div className="about-img">
                <img src="little-boy-creating-robot-robotics-programming-engineering-kids_254685-1142-removebg-preview.png" alt="" height={350} width={350}/>
                </div>
        </div>
        <div className="wrapper-about-second">
            <h1>PROFESSIONAL <span className="highlight">SKILLSET</span></h1>
            <div className="all-skills">
                <div className="skill">
                <img src="html-5-logo_318-41768-removebg-preview.png" alt="" height={120} width={170}/>
                </div>
                <div className="skill">
                <img src="kisspng-computer-icons-cascading-style-sheets-css3-respons-5af2925ccbe2d7.7020902115258466208351-removebg-preview.png" alt="" height={120} width={170}/>
                </div>
                <div className="skill">
                <img src="png-clipart-javascript-node-js-computer-icons-logo-application-software-javascript-icon-text-logo-removebg-preview.png" alt="" height={120} width={170}/>
                </div>
                <div className="skill">
                <img src="download-removebg-preview.png" alt="" height={120} width={170}/>
                </div>
                <div className="skill-last-two-a">
                <img src="png-clipart-react-computer-icons-redux-javascript-others-symmetry-electron-removebg-preview.png" alt="" height={120} width={170}/>
                </div>
                <div className="skill-last-two-b">
                <img src="png-transparent-c-computer-icons-object-c-icon-text-logo-monochrome-removebg-preview.png" alt="" height={120} width={170}/>
                </div>
            </div>
        </div>
        {/* //TOOLS */}
        <div className="wrapper-about-third">
            <h1><span className="highlight">Tools</span> I Use</h1>
            <div className="all-skills">
                <div className="skill">
                <img src="1240970-removebg-preview.png" alt="" height={120} width={170}/>
                </div>
                <div className="skill">
                <img src="kisspng-microsoft-visual-studio-express-computer-icons-mic-studio-5b2042c2299539.8085534615288408981703-removebg-preview.png" alt="" height={130} width={170}/>
                </div>
                <div className="skill">
                <img src="5968671-removebg-preview.png" alt="" height={120} width={170}/>
                </div>
                <div className="skill">
                <img src="png-clipart-react-computer-icons-redux-javascript-others-symmetry-electron-removebg-preview.png" alt="" height={120} width={170}/>
                </div>
                
                
            </div>
        </div>
        <div className="wrapper-about-fourth">
            <h1><span className="highlight">PROJECTS</span> I Made</h1>
            <div className="project-made">
            <div className="proj-achievement">
            <a href="https://github.com/N03Nilay/Weather"><h2 style={{fontFamily: "'Kanit', sans-serif",textAlign:"center"}}>WEATHER <br /> APP</h2></a>
            </div>
             <div className="proj-achievement">
             <a href="https://github.com/N03Nilay/Google-Keep-Clone"><h2 style={{fontFamily: "'Kanit', sans-serif",textAlign:"center"}}>GOOGLE KEEP APP</h2></a>
            </div>
            <div className="proj-achievement">
            <a href="https://github.com/N03Nilay/Dictionary"><h2 style={{fontFamily: "'Kanit', sans-serif",textAlign:"center"}}>DICTIONARY APP</h2></a>
            </div>
            <div className="proj-achievement">
            <a href="https://github.com/N03Nilay/Tic-Tac-Toe"><h2 style={{fontFamily: "'Kanit', sans-serif",textAlign:"center"}}>TIC-TAC-TOE GAME</h2></a>
            </div>
            </div>
        </div>
        <div className="wrapper-about-fifth">
            <h1><span className="highlight">ACHIEVEMENTS</span> I Got</h1>
            <div className="project-made">
            <div className="proj-achievement">
            <a><h2 style={{fontFamily: "'Kanit', sans-serif",textAlign:"center"}}>HACKTOBERFEST <br /> -2022</h2></a>
            </div>
             <div className="proj-achievement">
             <a><h2 style={{fontFamily: "'Kanit', sans-serif",textAlign:"center"}}>JAVA-PROBLEM<br /> SOLVING</h2></a>
            </div>
            <div className="proj-achievement">
            <a><h2 style={{fontFamily: "'Kanit', sans-serif",textAlign:"center"}}>HACKERRANK<br /><StarPurple500RoundedIcon style={{color:"black"}}/><StarPurple500RoundedIcon style={{color:"black"}}/><StarPurple500RoundedIcon style={{color:"black"}}/><StarPurple500RoundedIcon style={{color:"black"}}/><StarPurple500RoundedIcon style={{color:"black"}}/></h2></a>
            </div>
            <div className="proj-achievement">
            <a><h2 style={{fontFamily: "'Kanit', sans-serif",textAlign:"center"}}>CODECHEF<br /><StarPurple500RoundedIcon style={{color:"black"}}/> </h2></a>
            </div>
            </div>
        </div>
        
    </div>
  )
}

export default About