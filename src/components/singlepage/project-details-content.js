/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Comments from './tabs/Comments'
import Faq from './tabs/Faq'
import StoryContent from './tabs/StoryContent'
import Updates from './tabs/Updates'

const ProjectDetailsContent = () => {
  return (
    <section className='project-details-content-area pb-110 '>
      <div className='container'>
        <div className='justify-content-center row'>
          <div className='col-lg-8'>
            <Tabs
              defaultActiveKey='story'
              id='pills-tab '
              className='tab-content'
            >
              {/* <ul className='nav nav-pills' id='pills-tab' role='tablist'> */}
              <Tab
                eventKey='story'
                title='Story'
                className='nav-item'
                role='tab'
              >
                <StoryContent />
              </Tab>
              <Tab eventKey='faqs' title='FAQS' role='tab'>
                <Faq />
              </Tab>
              <Tab eventKey='updates' title='UPDATES'>
                <Updates />
              </Tab>
              <Tab eventKey='comments' title='COMMENTS' role='tab'>
                <Comments />
              </Tab>
            </Tabs>
            <div className='tab-content' id='pills-tabContent'></div>
          </div>
          <div className='col-lg-4 col-md-7 col-sm-9'>
            <div className='project-details-sidebar'>
              <div className='project-details-info mt-70 box'>
                <div className='info'>
                  <img src='/assets/project-info.8826c26f.jpg' alt className />
                  <h5 className='title'>John Smith</h5>
                  <span>20 backed</span>
                </div>
                <p>
                  Aenean fringilla mauris quis risus laoreet interdum. Quisque
                  imperdiet orci in metus aliquam egestas.
                </p>
              </div>
              <div className='project-details-park mt-30 box'>
                <h4 className='title'>Select a Perk</h4>
                <img src='/assets/project-perk.45d57acc.jpg' alt className />
                <span>SAPPHIRE(50 sold already)</span>
                <p>$5,800 (62% OFF)</p>
                <ul>
                  <li>Estimated Shipping</li>
                  <li>
                    <span>November 2022</span>
                  </li>
                  <li>
                    23 out of 30 <span>claimed</span>
                  </li>
                </ul>
                <a
                  className='main-btn'
                  href='https://krowd-nextjs.vercel.app/single-project#'
                >
                  Continue now
                </a>
              </div>
              <div className='project-details-park mt-30 box item-2'>
                <h4 className='title'>Select a Perk</h4>
                <span>SAPPHIRE(50 sold already)</span>
                <p>$5,800 (62% OFF)</p>
                <ul>
                  <li>Estimated Shipping</li>
                  <li>
                    <span>November 2022</span>
                  </li>
                  <li>
                    23 out of 30 <span>claimed</span>
                  </li>
                </ul>
                <a
                  className='main-btn'
                  href='https://krowd-nextjs.vercel.app/single-project#'
                >
                  Continue now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetailsContent
