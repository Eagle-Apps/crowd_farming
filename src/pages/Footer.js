import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
} from 'react-icons/sl'

import { Container } from '../utils/utils'

const Footer = () => {
  return (
    <footer className='bg-emerald-600 py-24 mt-24 border-t border-indigo-100 text-[#FBFBFF] '>
      <Container>
        {/* <img
          src='/images/footer-bg.png'
          className='w-full object-center object-cover border-b'
          alt=''
        /> */}
        <nav className='flex flex-col justify-items-center items-center'>
          <ul className='flex text-[16px] gap-x-[2rem]'>
            <li className='flex cursor-pointer hover:text-emerald-400 active:text-emerald-500 focus:outline-none focus:ring focus:ring-text-emerald-100  '>
              Contact Us
            </li>
            <li className='flex cursor-pointer hover:text-emerald-400 active:text-emerald-500 focus:outline-none focus:ring focus:ring-text-emerald-100  '>
              About Us
            </li>
            <li className='flex cursor-pointer hover:text-emerald-400 active:text-emerald-500 focus:outline-none focus:ring focus:ring-text-emerald-100  '>
              Terms of Service{' '}
            </li>
            <li className='flex cursor-pointer hover:text-emerald-400 active:text-emerald-500 focus:outline-none focus:ring focus:ring-text-emerald-100  '>
              Privacy Policy
            </li>
            <li className='flex cursor-pointer hover:text-emerald-400 active:text-emerald-500 focus:outline-none focus:ring focus:ring-text-emerald-100  '>
              Privacy Settings
            </li>
          </ul>
        </nav>

        <div className='mt-8 flex items-center justify-between'>
          <p className='text-[#FBFBFF] uppercase text-sm md:text-base'>
            Copyright © 2023 NDEMBELE. All Rights Reserved.
          </p>

          <div className='flex items-center space-x-4 text-indigo-800'>
            <span className='bg-white hover:bg-emerald-400 shadow-lg border border-gray-300 border-opacity-30 rounded-full p-2 cursor-pointer'>
              <SlSocialFacebook className='w-6 h-6' />
            </span>

            <span className='bg-white hover:bg-emerald-400 shadow-lg border border-gray-300 border-opacity-30 rounded-full p-2 cursor-pointer'>
              <SlSocialTwitter className='w-6 h-6' />
            </span>

            <span className='bg-white hover:bg-emerald-400 shadow-lg border border-gray-300 border-opacity-30 rounded-full p-2 cursor-pointer'>
              <SlSocialInstagram className='w-6 h-6' />
            </span>

            <span className='bg-white hover:bg-emerald-400 shadow-lg border border-gray-300 border-opacity-30 rounded-full p-2 cursor-pointer'>
              <SlSocialLinkedin className='w-6 h-6' />
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
