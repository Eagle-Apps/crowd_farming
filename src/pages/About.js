import React from 'react'
import HeaderBanner from '../components/about/HeaderBanner'
import AboutContent from '../components/about/AboutContent'
import ProjectComplete from '../components/about/ProjectComplete'

// import Nav from '../layouts/Nav'
// import Footer from './Footer'
import FundNext from '../components/about/FundNext'
import FounderSection from '../components/about/FounderSection'
import StartProject from '../components/about/StartProject'
import Testimonial from '../components/about/Testimonial'

const About = () => {
  return (
    <div className='max-w-[1640px] bg-white'>
      {/* <Nav /> */}
      <HeaderBanner />
      <AboutContent />
      <ProjectComplete />
      <FundNext />
      <FounderSection />
      <StartProject />
      <Testimonial />
      {/* <Footer /> */}
    </div>
  )
}

export default About
