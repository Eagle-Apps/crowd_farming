import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// import ProjectDetails from '../components/singlepage/project-details'
// import ProjectBanner from '../components/singlepage/project-banner'
// import ProjectDetailsContent from '../components/singlepage/project-details-content'
// import ProjectCard from '../components/singlepage/project-card'
import Nav from '../layouts/Nav'

const SingleInvestment = () => {
  const [investments, setInvestment] = useState({})
  const { _id } = useParams()


  useEffect(() => {
    fetch(`https://ndembele.onrender.com/investments/${_id}`)
      .then((response) => response.json())
      .then((data) => setInvestment(data.pageOfItems))
  }, [_id])

  return (
    <>
      <Nav />
      {/* <div className=''> */}
      <h1>Details About User {_id}</h1>
      {/* <ProjectBanner />
      <ProjectDetails />
      <ProjectDetailsContent />
      <ProjectCard /> */}
      {/* </div> */}
    </>
  )
}

export default SingleInvestment
