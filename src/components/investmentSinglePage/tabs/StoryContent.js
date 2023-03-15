import React from 'react'
// import { FiCheck, FiCheckCircle } from 'react-icons/fi'

const StoryContent = ({ investments }) => {
  console.log('Commitment', investments?.ownerCommitment?.name)
  // console.log('Story', investments.budget)
  return (
    <div
      className='tab-pane animated fadeIn show active'
      id='pills-home'
      role='tabpanel'
    >
      <div className='project-details-content-top'>
        <p>{investments?.descp}</p>

        <div className='project-details-thumb'>
          {/* <img src='/assets/project-details-thumb.a427b972.jpg' alt='' /> */}
          <img src={investments?.images[0]} alt='' className='h-[50vh]' />
        </div>
      </div>
      <div className='project-details-item'>
        <div className='flex flex-col gap-2 mt-4'>
          <span>Terms: {investments?.terms}</span>
          <span> Cycles: {investments?.cycle}</span>
          <span> Farm: {investments?.ownerCommitment?.name}</span>
        </div>
        <p>
          {/* Integer feugiat est in tincidunt congue. Nam eget accumsan ligula.
          Nunc auctor ligula a quam fermentum, non iaculis diam suscipit.
          Aliquam lacinia lorem vel suscipit pulvinar. Etiam condimentum nunc
          non ultricies hendrerit. Sed nec blandit libero, ut gravida quam. Nam
          tortor est, faucibus at dolor id, blandit venenatis leo. Praesent
          euismod tempus libero et accumsan. Nunc ultrices sit amet urna sed
          euismod. Pellentesque finibus ipsum non mi sodales, vel ullamcorper
          ipsum pharetra. Praesent nec pharetra neque. */}
        </p>

        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-6'>
            <div className='project-details-thumb'>
              {/* <img src='/assets/project-details-1.41b346ac.jpg' alt='' /> */}
              <img src={investments?.images[1]} alt='' className='w-full' />
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-6'>
            <div className='project-details-thumb'>
              {/* <img src='/assets/project-details-2.35f078dd.jpg' alt='' /> */}
              <img src={investments?.images[2]} alt='' className='w-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoryContent
