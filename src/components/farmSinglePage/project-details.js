import React from 'react'
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineWhatsApp,
} from 'react-icons/ai'

const ProjectDetails = ({ farm }) => {
  const icons = [
    AiFillFacebook,
    AiFillInstagram,
    AiFillTwitterCircle,
    AiOutlineWhatsApp,
  ]
  console.log('From project banner', farm)

  return (
    <section className='project-details-area pt-120 pb-190'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7'>
            <div className='project-details-thumb'>
              <img
                // src='/assets/single-project-thumb.2959a928.jpg'
                src={farm.images[0]}
                alt={farm.name}
                className='h-[50vh]'
              />
              <div className='icon'>
                <i className='fa fa-heart' />
              </div>
            </div>
          </div>
          <div className='col-lg-5'>
            <div className='project-details-content'>
              <div className='details-btn'>
                <span>Subscribe</span>
                <div className='flag'>
                  <img src='/assets/flag.3de87ccd.png' alt='' className='' />
                  <p>Nigeria</p>
                </div>
              </div>
              <h3 className='title'>{farm.name}</h3>
              <div className='project-details-item'>
                <div className='item text-center w-[5rem]'>
                  <h5 className='title'>{farm.phone}</h5>
                  <span>Phone Number</span>
                </div>
                {/* <div className='item text-center'>
                  <h5 className='title'>{farm.category}</h5>
                  <span>Category</span>
                </div> */}
                <div className='item text-center'>
                  <h5 className='title'>20</h5>
                  <span>Days Left</span>
                </div>
              </div>
              <div className='projects-range'>
                <div className='projects-range-content'>
                  <ul>
                    <li>Raised:</li>
                    <li>23%</li>
                  </ul>
                  <div className='range' />
                </div>
              </div>
              <div className='projects-goal'>
                <span>
                  Goal: <span>3600.00 </span>
                </span>
              </div>
              <div className='project-btn mt-25'>
                <a
                  className='main-btn'
                  href='https://krowd-nextjs.vercel.app/single-project#'
                >
                  Back this project
                </a>
              </div>
              <div className='project-share d-flex align-items-center'>
                <span>Share this Project</span>
                <ul>
                  {icons.map((Icon, ind) => (
                    <li key={ind}>
                      <a href='https://krowd-nextjs.vercel.app/single-project#'>
                        <Icon />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetails
