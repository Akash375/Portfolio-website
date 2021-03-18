import React,{Component} from 'react';
import {NavbarToggler,Collapse}from 'reactstrap';

class Home extends Component{
    constructor(props){
        super(props);

        this.state={
            isNavOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <div className="main">
                <div id="Navbar" className="navbar navbar-dark navbar-expand-md py-0" align="center">
                <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.isNavOpen} navbar>
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <a href="#home" className="nav-link active">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a href="#projects" className="nav-link">PROJECTS</a>
                            </li>
                            <li className="nav-item">
                                <a href="#skills" className="nav-link">SKILLS</a>
                            </li>
                            <li className="nav-item">
                                <a href="#education" className="nav-link">EDUCATION</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link">CONTACT</a>
                            </li>
                        </ul>
                        </Collapse>
                </div>
                <div id="home">
                    <div className="text-block mt-4" style={{color:"white",padding:"2rem"}}>
                  <center><p id="title" style={{fontFamily:"Sacramento",paddingTop:"6rem"}}>Akash Anand</p></center>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;