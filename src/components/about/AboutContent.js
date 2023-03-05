/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
// import { FiCheck, FiCheckCircle } from 'react-icons/fi'

const AboutContent = () => {
  return (
    <section className='about-introduction-area pt-120 pb-120 mx-20'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5'>
            <div className='about-introduction-content'>
              <span>Our Introduction</span>
              <h3 className='title'>Learn About Our Company</h3>
              <p>
                There are many variations of passages of available but the
                majority have suffered alteration in some form, by injected
                humou or randomised words.
              </p>
              <div className='item'>
                <i className='flaticon-checkmark' />
                <h4 className='title'>
                  Discover how to plan, create, and manage your crowdfunding
                  campaign
                </h4>
              </div>
              <div className='item mt-35'>
                <i className='flaticon-checkmark' />
                <h4 className='title'>
                  Discover how to plan, create, and manage your crowdfunding
                  campaign
                </h4>
              </div>
            </div>
          </div>
          <div className='col-lg-7'>
            <div className='about-introduction-thumb'>
              <img
                src='assets/about-introduction-thumb.27a851a8.jpg'
                alt=''
              
              />
              <div className='about-introduction-customers'>
                <h3 className='title odometer'>
                  <span>8000</span>
                </h3>
                <br />
                <span>Satisfied Customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutContent
