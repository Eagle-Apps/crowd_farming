import React from 'react'
import ProjectDetails from '../components/singlepage/project-details'
import ProjectBanner from '../components/singlepage/project-banner'
import ProjectDetailsContent from '../components/singlepage/project-details-content'
import Nav from '../layouts/Nav'
import ProjectCard from '../components/singlepage/project-card'

const SingleInvestment = () => {
  return (
    <>
      <Nav />
      {/* <div className=''> */}
      <ProjectBanner />
      <ProjectDetails />
      <ProjectDetailsContent />
      <ProjectCard />
      {/* </div> */}
    </>
  )
}

export default SingleInvestment
