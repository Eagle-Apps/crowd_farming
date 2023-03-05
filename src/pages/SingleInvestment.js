import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


import ProjectDetails from '../components/investmentSinglepage/project-details'
import ProjectBanner from '../components/investmentSinglepage/project-banner'
import ProjectDetailsContent from '../components/investmentSinglepage/project-details-content'
import ProjectCard from '../components/investmentSinglepage/project-card'


const SingleInvestment = () => {
  const [investment, setInvestment] = useState(null)
  const { _id } = useParams()

  console.log('ID', _id)

  // useEffect(() => {
  //   axios
  //     .get(`https://ndembele.onrender.com/investment/${_id}`)
  //     .then((response) => setInvestment(response.pageOfItems))
  //     .catch((err) => console.log(err))
  // }, [_id])

  useEffect(() => {
    fetch(`https://ndembele.onrender.com/investment/${_id}`)
      .then((response) => response.json())
      .then((data) => setInvestment(data))
  }, [_id])

  console.log('Investment', investment)

  return (
    <>
      <div>
        <ProjectBanner />
        {investment && <ProjectDetails investments={investment} />}
        <ProjectDetailsContent />
        <ProjectCard /> 
      </div>

      {/* {investments && (
        <div>
          <ProjectBanner />
          <ProjectDetails />
        </div>
      )} */}

      {/* {investments !== {} ? (
        <div>
          <ProjectBanner investments={investments} />
        </div>
      ) : (
        <div>Loading...</div>
      )} */}
      {/* <div className=''> */}
      {/* <p className='text-red-500'>Hello</p>
      <h1>Details About User {_id}</h1> */}
      {/* <ProjectBanner />
      <ProjectDetails /> */}
      {/* <ProjectDetails />
      <ProjectDetailsContent />
      <ProjectCard /> */}
      {/* </div> */}
    </>
  )
}

export default SingleInvestment
