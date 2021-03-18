import React from 'react';
import Footer from './FooterComponent';
import Education from './EducationComponent';
import Skills from './SkillsComponent';
import Projects from './ProjectComponent';
import About from './AboutComponent';
import Home from './HomeComponent';

function Main(){
    return(
        <>
            <Home/>
            <About/>
            <Projects/>
            <Skills/>
            <Education/>
            <Footer/>
        </>
    );
}

export default Main;