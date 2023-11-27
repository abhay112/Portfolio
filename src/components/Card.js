/* eslint-disable jsx-a11y/img-redundant-alt */
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import '../../src/styles/tech.scss'
import arrow from '../assets/images/arrow.svg';
import listArrow from '../assets/images/rightAr.svg';
import Parse from 'html-react-parser';
import ImageSlide from './ImageSlide';

const Card = ({i, title1, title2, description, src, link, color, progress, range, targetScale}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  console.log(description)

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
 
  return (
    <div ref={container} className='cardContainer'>
      <motion.div 
        style={{backgroundColor: color, scale, top:`calc(-5vh + ${i * 25}px)`}} 
        className='card'
      >
        {i===0&&
        <>
          <div className='card-header'>
            <h2 className='heading-lg'>Projects</h2>
            <div class="arrow-container">
                <div class="arrow">
                  <img src={arrow}/>
                </div>
            </div>
          </div>
        </>
        }
        {i!==0 &&<>
        {/* <h2 className='heading-lg'>{title}</h2> */}
        <ImageSlide  title1={title1} title2={title2} src={src}/>
        <div className='card-body'>
          <div className='card-description'>
            {/* <img src={listArrow}/> */}
            <p>{Parse(description)}</p>
            <span>
              <a href={link} target="_blank">Link</a>
               <div className='arrow'>
                {/* <img src={arrow}></img> */}
               </div>
            </span>
          </div>

        </div></>}
        
      </motion.div>
    </div>
  )
}

export default Card