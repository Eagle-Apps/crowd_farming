import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ProjectDetails from '../components/farmSinglePage/project-details'
import ProjectBanner from '../components/farmSinglePage/project-banner'
import ProjectDetailsContent from '../components/farmSinglePage/project-details-content'
// import ProjectCard from '../components/farmSinglePage/project-card'

const SingleFarm = () => {
  const [farm, setFarm] = useState(null)
  const { _id } = useParams()

  console.log('ID', _id)

  useEffect(() => {
    fetch(`https://ndembele.onrender.com/farm/${_id}`)
      .then((response) => response.json())
      .then((data) => setFarm(data))
  }, [_id])

  console.log('Farm', farm)

  return (
    <>
      <div>
        {/* <ProjectBanner /> */}
        {farm && <ProjectDetails farm={farm} />}
        <ProjectDetailsContent />
        {/* <ProjectCard /> */}
      </div>
    </>
  )
}

export default SingleFarm
