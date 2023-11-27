import React from "react";
import Tilt from "react-tilt";
import  SectionWrapper  from "../hoc/SectionWrapper";
import { technologies } from "../constants";
import '../styles/tech.scss'
import BorderCard from "./BorderCard";

const Tech = () => {
  return (
    <div className='technology-icon-section'>
      {technologies.map((technology) => (
        <div className='tech-icon-container' key={technology.name}>
            <div className="rounded-[20px] cursor-pointer">
              <Tilt>
                  <BorderCard src={technology.icon} name={technology.name}/>
              </Tilt>
            </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
