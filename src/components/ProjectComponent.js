import {Card,CardBody,CardImg, CardImgOverlay}from 'reactstrap';
import rezinga from '../bck_img9 .1.jfif';
import splitit from '../split.png';
import rememberit from '../rememberit.jpg';
import comingsoon from '../comingsoon.jpeg';
import risto from '../risto.jfif';

function Projects(){
    return(
        <div id="projects" className="mt-4" style={{padding:"2rem 0"}}>
                <center><p style={{fontFamily:"Calibri Light",fontSize:"3.2rem",padding:"2rem 0",color:"#FFFFFF"}}>Projects</p></center>
                    <div className="row justify-content-center mt-4">
                        <div className="flip-card col-md-4">
                        <Card className="flip-card-inner">
                            <CardImg className="flip-card-front" src={rezinga} width="100%" height="250rem"/>
                            <CardImgOverlay className="cardText" align="center">ReZinga</CardImgOverlay>
                            <CardBody className="flip-card-back">
                                    <p style={{fontSize: "1.25rem"}}>ReZinga</p>
                                    <p className="subtitle">Find Restaurants in any city, 
                                    results can be filtered depending on cuisines and restaurant name. Implemented Infinite Pagination 
                                    with responsive design.<br/> Tech Stacks: React, Axios and CSS.</p>
                                    <p>
                                        <a className="btn" target="_blank" href="https://rezinga-cddf4.web.app/">
                                            <button type="button" className="btn btn-outline-success">Demo</button>
                                        </a>
                                        <a className="btn" target="_blank" href="https://github.com/Akash375/ReZinga">
                                            <button type="button" className="btn btn-outline-primary ml-4">Code</button>
                                        </a>
                                    </p>
                            </CardBody>
                        </Card>
                        </div>
                        <div className="flip-card col-md-4">
                        <Card className="flip-card-inner">
                            <CardImg className="flip-card-front" src={splitit} width="100%" height="250rem"/>
                            <CardImgOverlay className="cardText" align="center">Split-iT</CardImgOverlay>
                            <CardBody className="flip-card-back">
                                    <p style={{fontSize: "1.25rem"}}>Split-iT</p>
                                    <p className="subtitle">Full Functional Bill splitting 
                                    web app. Add your friends, their individual expenses and divide the bill with ease.That too at no 
                                    extra cost and no tension.<br/>
                                    Tech Stacks: React, NodeJs and Express</p>
                                    <p>
                                        <a className="btn" target="_blank" href="https://split-it-a0334.web.app/">
                                            <button type="button" className="btn btn-outline-success">Demo</button>
                                        </a>
                                        <a className="btn" target="_blank" href="https://github.com/Akash375/SplitiT/">
                                            <button type="button" className="btn btn-outline-primary ml-4">Code</button>
                                        </a>
                                    </p>
                            </CardBody>
                        </Card>
                        </div>
                        <div className="flip-card col-md-4">
                        <Card className="flip-card-inner">
                            <CardImg className="flip-card-front" src={rememberit} width="100%" height="250rem"/>
                            <CardImgOverlay className="cardText" align="center">RememberiT</CardImgOverlay>
                            <CardBody className="flip-card-back">
                                    <p style={{fontSize: "1.25rem"}}>Remember-it</p>
                                    <p className="subtitle">A Task Management Website, where you can keep track of all your tasks in a
                                    project and manage their status very easily.<br/>
                                    Tech Stacks: React,Axios and CSS</p>
                                     <p>
                                        <a className="btn" /*target="_blank" href="https://remember-it-146df.web.app/"*/>
                                            <button type="button" className="btn btn-outline-success">Soon..</button>
                                        </a>
                                        <a className="btn" target="_blank" href="https://github.com/Akash375/Remember-it/">
                                            <button type="button" className="btn btn-outline-primary ml-4">Code</button>
                                        </a>
                                    </p>
                              
                            </CardBody>
                        </Card>
                        </div>
                        <div className="flip-card col-md-4">
                        <Card className="flip-card-inner">
                            <CardImg className="flip-card-front" src={risto} width="100%" height="250rem"/>
                            <CardImgOverlay className="cardText" align="center">Ristorante Con Fusion</CardImgOverlay>
                            <CardBody className="flip-card-back">
                                
                                    <p style={{fontSize: "1.25rem"}} className="title">Ristorante Con Fusion</p>
                                    <p className="subtitle">A dummy restaurant website with all the details of dishes and menu along with
                                    facilities of saving favorite dishes and feedback.<br/>
                                    Tech Stack: React, NodeJS, Express and MongoDB.</p>
                                     <p>
                                        <a className="btn" href="#">
                                            <button type="button" className="btn btn-outline-success">Demo</button>
                                        </a>
                                        <a className="btn" target="_blank" href="https://github.com/Akash375/Restaurant/">
                                            <button type="button" className="btn btn-outline-primary ml-4">Code</button>
                                        </a>
                                    </p>
                            </CardBody>
                        </Card>
                        </div>
                        <div className="flip-card col-md-4">
                        <Card className="flip-card-inner">
                            <CardImg className="flip-card-front" src={comingsoon} width="100%" height="250rem"/>
                           {/* <CardImgOverlay className="cardText" align="center">Coming Soon</CardImgOverlay>*/}
                            <CardBody className="flip-card-back">
                               
                                    <p style={{fontSize: "1.25rem"}} className="title">Coming Soon</p>
                                    <p className="subtitle">Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                                     <p>
                                        <a className="btn" /*target="_blank"*/ href="#">
                                            <button type="button" className="btn btn-outline-success">Demo</button>
                                        </a>
                                        <a className="btn" /*target="_blank"*/ href="#">
                                            <button type="button" className="btn btn-outline-primary ml-4">Code</button>
                                        </a>
                                    </p>
                            </CardBody>
                        </Card>
                        </div>
                    </div>
                </div>
    );
}

export default Projects;