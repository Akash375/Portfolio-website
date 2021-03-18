function Footer(){

    return(
        <div id="contact" className="mt-4" style={{padding:"2rem 0",background:"#393939"}}>
                    {/*<center><p style={{fontFamily:"Calibri Light",fontSize:"3rem"}}>Contact</p></center>*/}
                    <p align="center">
                        <a class="scroll btn" href="#home"><i class="fa fa-arrow-circle-up fa-3x"></i></a>
                    </p>
                    <p align="center">
                        <a className="btn" target="_blank" href="https://www.linkedin.com/in/akash-anand-690675193/"><i className="fa fa-linkedin fa-3x"></i></a>
                        <a className="btn" target="_blank" href="https://github.com/Akash375/"><i className="fa fa-github fa-3x"></i></a>
                        <a className="btn" target="_blank" href="https://www.facebook.com/profile.php?id=100009061662539"><i className="fa fa-facebook fa-3x"></i></a>
                        <a className="btn" target="_blank" href="https://www.instagram.com/_.akash_anand/"><i className="fa fa-instagram fa-3x"></i></a>
                        <a className="btn" target="_blank" href="mailto:anandakash375@gmail.com"><i className="fa fa-envelope-o fa-3x"></i></a>
                    </p>
                </div>
    );
}

export default Footer;