import React from 'react'
import HeaderBanner from '../components/about/HeaderBanner'
import AboutContent from '../components/about/AboutContent'
import ProjectComplete from '../components/about/ProjectComplete'

import FundNext from '../components/about/FundNext'
import FounderSection from '../components/about/FounderSection'
import StartProject from '../components/about/StartProject'
import Testimonial from '../components/about/Testimonial'

const About = () => {
  return (
    <div className='max-w-[1640px] bg-white'>
      <HeaderBanner />
      <AboutContent />
      <ProjectComplete />
      <FundNext />
      <FounderSection />
      <StartProject />
      <Testimonial />
    </div>
  )
}

export default About
