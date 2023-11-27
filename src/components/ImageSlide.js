import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../../src/styles/image-slide.scss';

const anim = {
    initial: {width: 0},
    open: {width: "auto", transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}},
    closed: {width: 0}
}

export default function ImageSlide({title1,title2,src}) {

    const [isActive, setIsActive] = useState(false);
    console.log(src);
    // const { title1, title2 } = ["",""]
    return (
        <div onMouseEnter={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}} className='project'>
            <p>{title1}</p>
            <motion.div variants={anim} animate={isActive ? "open" : "closed"} className='imgContainer'>
               <a href={src} target='__blank'> <img src={src}></img>  </a>
            </motion.div>
            <p>{title2}</p>
        </div>
    )
}
