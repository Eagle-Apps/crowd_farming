/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const ProjectComplete = () => {
  return (
    <section className='fun-facts-area fun-facts-about-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-6'>
            <div className='fun-facts-item text-center'>
              <div className='icon'>
                <i className='flaticon-scrum' />
              </div>
              <br />
              <h4 className='title odometer'>
                <span>690</span>
              </h4>
              <span>Projects Completed</span>
            </div>
          </div>
          <div className='col-lg-3 col-md-6'>
            <div className='fun-facts-item text-center'>
              <div className='icon'>
                <i className='flaticon-mission' />
              </div>
              <br />
              <h4 className='title odometer'>
                <span>8080</span>
              </h4>
              <span>Projects Completed</span>
            </div>
          </div>
          <div className='col-lg-3 col-md-6'>
            <div className='fun-facts-item text-center'>
              <div className='icon'>
                <i className='flaticon-team' />
              </div>
              <br />
              <h4 className='title odometer'>
                <span>440</span>
              </h4>
              <span>Projects Completed</span>
            </div>
          </div>
          <div className='col-lg-3 col-md-6'>
            <div className='fun-facts-item text-center'>
              <div className='icon'>
                <i className='flaticon-increment' />
              </div>
              <br />
              <h4 className='title odometer'>
                <span>2870</span>
              </h4>
              <span>Projects Completed</span>
            </div>
          </div>
        </div>
      </div>
      <div className='fun-facts-shape-1'>
        <img src='assets/fun-facts-shape-1.df299ab5.png' alt='' />
      </div>
      <div className='fun-facts-shape-2'>
        <img src='assets/fun-facts-shape-2.5b1828b6.png' alt='' />
      </div>
    </section>
  )
}

export default ProjectComplete
