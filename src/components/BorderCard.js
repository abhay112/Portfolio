import React from 'react'
import '../styles/resume.scss';


const BorderCard = ({src,name}) => {
  const className = name?.split(' ')[0];
  console.log(className)
  return (
    <div className='box-container'>
       <div>
        <a href={src} className={`${className}`}><img src={src} alt='icon'/> <span>{name}</span></a>
    </div>
    </div>
  )
}

export default BorderCard