import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "style.css";
import image1 from '../assets/resume/image1.jpg'
import image2 from '../assets/resume/image2.jpg'
import image3 from '../assets/resume/image3.jpg'
import '../styles/resume.scss';
import  resume from "../assets/pdf/Abhay.pdf";


gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#resumeContainer",
        start: "10% 30%",
        end: "70% 30%",
        scrub: true,
        // markers: true,
      },
    });
    tl.to("#imgTwo", {
      rotateX: "0deg",
    })
      .to("#imgThree", {
        rotateX: "0deg",
      })
      .to(".resume", {
        marginTop: "50vh",
        marginBottom:"20vh",
        scale: "0.8",
      }, 'sa')
      .to(".img", {
        filter: "grayscale(1)",
      }, 'sa')
      .to(".text", {
        marginTop: "-100vh",
      }, 'sa')
      .to(".overlay", {
        opacity: 1,
        marginBottom: "-10vh",
      }, 'sa')
      .to(".overlay", {
        opacity: 0,
      }, 'end')
    
  }, []);
 

  return (
    <div id="resumeContainer" className="resume-container">
      <div className="resume" id="resume">
        <div id="imgOne" className="img">
          <img src={image1} alt="" />
        </div>
        <div id="imgTwo" className="img">
          <img src={image2} alt="" />
        </div>
        <div id="imgThree" className="img">
          <img src={image3} alt="" />
        </div>
      </div>
      <div className="text">
        <h2><a href={resume} target="_blank">Download Resume</a></h2>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Resume;
