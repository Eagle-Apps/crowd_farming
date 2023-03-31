/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Tab, Tabs, TabContainer } from 'react-bootstrap'
import History from './tabs/History'
import Mission from './tabs/Mission'
import Vision from './tabs/Vision'

const FundNext = () => {
  return (
    <section className='next-big-thing-area next-big-thing-about-area bg-slate-200'>
      <div className='container'>
        <div className='align-items-center row mx-20'>
          <div className='col-lg-6'>
            <div className='next-big-thing-content'>
              <span>Get to Know Krowd</span>
              <h3 className='title'>Fund the Next Big Thing</h3>
              {/* <ul className='text-[#0f7508]'> */}
              <Tabs defaultActiveKey='mission' className='mb-1 text-green-700' >
                <Tab
                  eventKey='mission'
                  title=' Our Mission'
                  className='nav-item nav-link '
                  role='presentation'
                >
                  <Mission />
                </Tab>

                <Tab eventKey='vision' title=' Our Vision'>
                  <Vision />
                </Tab>
                <Tab eventKey='history' title=' Our History'>
                  <History />
                </Tab>
              </Tabs>
              {/* </ul> */}
              <div className='tab-content' id='pills-tabContent'></div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='next-big-thing-content-2'>
              <p>
                There are many variations of passages of available but the
                majority have in some form, by injected humou or words which
                don't look even slightly believable. There are many variations
                of but the majority have suffered.
              </p>
              <div className='next-big-thing-list'>
                <div className='thumb'>
                  <img src='assets/next-big-thing-thumb.2567adce.png' alt='' />
                </div>
                <div className='list'>
                  <ul>
                    <li>
                      <i className='flaticon-check' /> Nsectetur cing elit.
                    </li>
                    <li>
                      <i className='flaticon-check' /> Suspe ndisse suscipit
                      sagittis leo.
                    </li>
                    <li>
                      <i className='flaticon-check' /> Entum estibulum dignissim
                      posuere.
                    </li>
                    <li>
                      <i className='flaticon-check' /> If you are going to use a
                      passage.
                    </li>
                    <li>
                      <i className='flaticon-check' /> Lorem Ipsum on the tend
                      to repeat.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FundNext
