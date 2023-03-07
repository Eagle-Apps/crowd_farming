import React from 'react'
import { BiShareAlt } from 'react-icons/bi'
import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from 'react-icons/fa'

const FounderSection = () => {
  return (
    <div className='team-main-area about-team-main-area'>
      <div className='container'>
        <div className='justify-content-center row'>
          <div className='col-lg-4 col-md-7'>
            <div className='team-item mt-30'>
              <div className='team-thumb'>
                <img src='assets/team-1.66a07c6a.jpg' alt='team' />
                <div className='share'>
                  <BiShareAlt size={20} />
                  <ul>
                    <li>
                      <a href='https://krowd-nextjs.vercel.app/about#'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='https://krowd-nextjs.vercel.app/about#'>
                        <FaFacebookSquare />
                      </a>
                    </li>
                    <li>
                      <a href='https://krowd-nextjs.vercel.app/about#'>
                        <FaPinterest />
                      </a>
                    </li>
                    <li>
                      <a href='https://krowd-nextjs.vercel.app/about#'>
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='team-content text-center'>
                <h5 className='title'>Sarah Albert</h5>
                <span>Founder</span>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-7'>
            <div className='team-item mt-30'>
              <div className='team-thumb'>
                <img src='assets/team-2.654ed381.jpg' alt='team' />
                <div className='share'>
                  <i className='fa fa-share-alt' />
                  <ul>
                    <li>
                      <a href='https://krowd-nextjs.vercel.app/about#'>
                        <i className='fa fa-twitter' />
                      </a>
                    </li>
                    <li>
                      <a href='https://krowd-nextjs.vercel.app/about#'>
                        <i className='fa fa-facebook-official' />
                      </a>
                    </li>
                    <li>
                      <a href='https://krowd-nextjs.vercel.app/about#'>
                        <i className='fa fa-pinterest' />
                      </a>
                    </li>
                    <li>
                      <a href='https://krowd-nextjs.vercel.app/about#'>
                        <i className='fa fa-instagram' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='team-content text-center'>
                <h5 className='title'>Mike Hardson</h5>
                <span>Founder</span>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-7'>
            <div className='team-item mt-30'>
              <div className='team-thumb'>
                <img src='assets/team-3.a14d3fa4.jpg' alt='team' />
                <div className='share'>
                  <i className='fa fa-share-alt' />
                  <ul>
                    <li>
                      <a href='https://krowd-nextjs.vercel.app/about#'>
                        <i className='fa fa-twitter' />
                      </a>
                    </li>
                    <li>
                      <a href='https://krowd-nextjs.vercel.app/about#'>
                        <i className='fa fa-facebook-official' />
                      </a>
                    </li>
                    <li>
                      <a href='https://krowd-nextjs.vercel.app/about#'>
                        <i className='fa fa-pinterest' />
                      </a>
                    </li>
                    <li>
                      <a href='https://krowd-nextjs.vercel.app/about#'>
                        <i className='fa fa-instagram' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='team-content text-center'>
                <h5 className='title'>Aisha Martin</h5>
                <span>Founder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FounderSection
