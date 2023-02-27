import React from 'react'
import { FiCheck, FiCheckCircle } from 'react-icons/fi'

const StoryContent = () => {
  return (
    <div
      className='tab-pane animated fadeIn show active'
      id='pills-home'
      role='tabpanel'
    >
      <div className='project-details-content-top'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          vulputate sed mauris vitae pellentesque. Nunc ut ullamcorper libero.
          Aenean fringilla mauris quis risus laoreet interdum. Quisque imperdiet
          orci in metus aliquam egestas. Fusce elit libero, imperdiet nec orci
          quis, convallis hendrerit nisl. Cras auctor nec purus at placerat.
        </p>
        <ul className=''>
          <li className='flex gap-3'>
            <FiCheck className='mt-3' />
            <span>Nsectetur cing mauris quis risus laoreet elit.</span>
          </li>
          <li className='flex gap-3'>
            <FiCheck className='mt-3' />
            <span>
              Nsectetur cing mauris quis risus laoreet elit mauris quis risus
              laoreet .
            </span>
          </li>
          <li className='flex gap-3'>
            <FiCheck className='mt-3' />
            <span>Nsectetur cing mauris quis risus laoreet elit.</span>
          </li>
          <li className='flex gap-3'>
            <FiCheck className='mt-3' />
            <span>
              Nsectetur cing mauris quis risus laoreet elit mauris quis risus
              laoreet .
            </span>
          </li>
          <li className='flex gap-3'>
            <FiCheck className='mt-3' />
            <span>Nsectetur cing mauris quis risus laoreet elit.</span>
          </li>
        </ul>
        <div className='project-details-thumb'>
          <img src='/assets/project-details-thumb.a427b972.jpg' alt className />
        </div>
      </div>
      <div className='project-details-item'>
        <p>
          Integer feugiat est in tincidunt congue. Nam eget accumsan ligula.
          Nunc auctor ligula a quam fermentum, non iaculis diam suscipit.
          Aliquam lacinia lorem vel suscipit pulvinar. Etiam condimentum nunc
          non ultricies hendrerit. Sed nec blandit libero, ut gravida quam. Nam
          tortor est, faucibus at dolor id, blandit venenatis leo. Praesent
          euismod tempus libero et accumsan. Nunc ultrices sit amet urna sed
          euismod. Pellentesque finibus ipsum non mi sodales, vel ullamcorper
          ipsum pharetra. Praesent nec pharetra neque.
        </p>
        <div className='item flex gap-5'>
          <span>
            <FiCheckCircle size={30} />
          </span>
          <div className='mb-[4rem]'>
            <h5 className='title'>One Power Bank for Every Wrist Car</h5>
            <p>
              Lorem Ipsum nibh vel velit auctor aliquet. Aenean sollic tudin,
              lorem is simply free text quis bibendum.
            </p>
          </div>
        </div>
        <div className='item flex gap-5'>
          <span>
            <FiCheckCircle size={30} />
          </span>
          <div className='mb-[4rem]'>
            <h5 className='title'>One Power Bank for Every Wrist Car</h5>
            <p>
              Lorem Ipsum nibh vel velit auctor aliquet. Aenean sollic tudin,
              lorem is simply free text quis bibendum.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-6'>
            <div className='project-details-thumb'>
              <img src='/assets/project-details-1.41b346ac.jpg' alt className />
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-6'>
            <div className='project-details-thumb'>
              <img src='/assets/project-details-2.35f078dd.jpg' alt className />
            </div>
          </div>
        </div>
        <p className='text'>
          Nulla in ex at mi viverra sagittis ut non erat raesent nec congue
          elit. Nunc arcu odio, convallis a lacinia ut, tristique id eros.
          Suspendisse leo erat, pellentesque et commodo vel, varius in felis.
          Nulla mollis turpis porta justo eleifend volutpat. Cras malesuada nec
          magna eu blandit. Nam sed efficitur ante. Quisque lobortis sodales
          risus, eu dapibus dolor porta vitae. Vestibulum eu ex auctor,
          scelerisque velit sit amet, vehicula sapien.
        </p>
      </div>
    </div>
  )
}

export default StoryContent
