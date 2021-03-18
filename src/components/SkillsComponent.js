import ReactTooltip from "react-tooltip";
import reactlogo from '../react.png';

function Skills(){
    return(
        <div id="skills" className="" style={{padding:"2rem 0"}} align="center">
                    <center><p style={{fontFamily:"Calibri Light",fontSize:"3.2rem",padding:"1rem 0",color:"#ffffff"}}>Skills</p></center>
                    <div className="row col-md-8 justify-content-center">
                        <div className="col-md-3 logo" align="center">
                            <img data-tip data-for="C++" src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" height="80rem"/>
                            <ReactTooltip id="C++" place="top" effect="solid">C++</ReactTooltip>
                        </div>
                        <div className="col-md-3 logo" align="center">
                            <img data-tip data-for="react" src={reactlogo} height="80rem"/>
                            <ReactTooltip id="react" place="top" effect="solid">React</ReactTooltip>
                        </div>
                        <div className="col-md-3 logo" align="center">
                            <img data-tip data-for="html" src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" height="80rem" />
                            <ReactTooltip id="html" place="top" effect="solid">HTML</ReactTooltip>
                        </div>
                        <div className="col-md-3 logo" align="center">
                            <img data-tip data-for="css" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" height="80rem" />
                            <ReactTooltip id="css" place="top" effect="solid">CSS</ReactTooltip>
                        </div>
                        <div className="col-md-3 logo" align="center">
                            <img data-tip data-for="js" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" height="80rem" />
                            <ReactTooltip id="js" place="top" effect="solid">JavaScript</ReactTooltip>
                        </div>
                        <div className="col-md-3 logo" align="center">
                            <img data-tip data-for="nodejs" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" height="80rem" />
                            <ReactTooltip id="nodejs" place="top" effect="solid">NodeJS</ReactTooltip>
                        </div>
                        <div className="col-md-3 logo" align="center">
                            <img data-tip data-for="c" src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" height="80rem" />
                            <ReactTooltip id="c" place="top" effect="solid">C</ReactTooltip>
                        </div>
                        <div className="col-md-3 logo" align="center">
                            <img data-tip data-for="bootstrap" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" height="80rem" />
                            <ReactTooltip id="bootstrap" place="top" effect="solid">Bootstrap</ReactTooltip>
                        </div>
                        <div className="col-md-3 logo" align="center">
                            <img data-tip data-for="mongodb" src="https://toppng.com/uploads/preview/9kib-354x415-unnamed-mongodb-logo-sv-11562860723mgempnmrq3.png" height="80rem" />
                            <ReactTooltip id="mongodb" place="top" effect="solid">MongoDB</ReactTooltip>
                        </div>
                        <div className="col-md-3 logo" align="center">
                            <img data-tip data-for="git" src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" height="80rem"/>
                            <ReactTooltip id="git" place="top" effect="solid">Git</ReactTooltip>
                        </div>
                    </div>
                </div>
    );
}

export default Skills;