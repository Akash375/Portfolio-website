import myimg from '../DSC_0219-02.jpeg';

function About(){
    return(
        <div id="about" className="mt-4" style={{padding:"2rem 0"}}>
            <center><p style={{fontFamily:"Calibri Light",fontSize:"3.2rem"}}>About me</p></center>
            <div className="card-deck">
               <div className="col-md-4" align="center" >
                  <img id="mypic" src={myimg} width="40%" style={{borderRadius:"1rem 0"}} />
               </div>
               <div className="col-md-6">
                    <p style={{fontSize: "1.2rem", color: "#808080",paddingTop:"2rem"}}>A Competitive Programmer and a Full-Stack Web Developer. My interests lie in the fields of data 
                        structure, algorithms and web development. Skilled in C++, React and NodeJS.</p>
                    <p style={{fontSize: "1.2rem", color: "#808080"}}>Currently, I am a Pre-Final year student 
                        pursuing Bachelor of Technology in Electronics and Communication Engineering at IIT(ISM), Dhanbad</p>
                    <p style={{fontSize: "1.2rem", color: "#808080"}}>A keen observer. Apart from these, I also have interest in writing short poetries.</p>
                </div>
            </div>
                <p align="center">
                    <a className="btn" target="_blank" href="https://www.linkedin.com/in/akash-anand-690675193/"><i className="fa fa-linkedin fa-2x"></i></a>
                    <a className="btn" target="_blank" href="https://www.facebook.com/profile.php?id=100009061662539"><i className="fa fa-facebook fa-2x"></i></a>
                    <a className="btn" target="_blank" href="https://www.instagram.com/_.akash_anand/"><i className="fa fa-instagram fa-2x"></i></a>
                    <a className="btn" target="_blank" href="mailto:anandakash375@gmail.com"><i className="fa fa-envelope-o fa-2x"></i></a>
                </p>
        </div>
    );
}

export default About;