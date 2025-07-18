import React from 'react'
import AboutTop from './AboutTop'
import Functionality from './Functionality'
import Feature from './Feature'
import Team from './Team'
const AboutComponent = () => {
    return (
        <>
           <AboutTop/> 
           <Functionality/>
           <Feature/>
           <Team className="mb-100"/>
        </>
    )
}

export default AboutComponent
