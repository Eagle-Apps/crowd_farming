import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
} from 'react-icons/sl'
import { Link } from 'react-router-dom'

// import { Container } from '../utils/utils'

const Footer = () => {
  return (
    <footer className='bg-emerald-600 text-emerald-50 w-full '>
      {/* <img
          src='/images/footer-bg.png'
          className='w-full object-center object-cover border-b'
          alt=''
        /> */}
      <div className='container mx-auto px-4 py-8'>
        <div className='flex justify-between mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          <div>
            <ul className='flex gap-4 '>
              <Link to='/contact'>
                <li className=' cursor-pointer hover:text-emerald-400 active:text-emerald-500 focus:outline-none focus:ring focus:ring-text-emerald-100  '>
                  <span className='mb-2'>Contact Us</span>
                </li>
              </Link>

              <Link to='/about'>
                <li className=' cursor-pointer hover:text-emerald-400 active:text-emerald-500 focus:outline-none focus:ring focus:ring-text-emerald-100  '>
                  <span className='mb-2'>About Us</span>
                </li>
              </Link>

              <Link to='/terms'>
                <li className='cursor-pointer hover:text-emerald-400 active:text-emerald-500 focus:outline-none focus:ring focus:ring-text-emerald-100  '>
                  <span className='mb-2'>Terms</span>
                </li>
              </Link>

              <Link to='#'>
                <li className=' cursor-pointer hover:text-emerald-400 active:text-emerald-500 focus:outline-none focus:ring focus:ring-text-emerald-100  '>
                  <span className='mb-2'>Privacy Policy</span>
                </li>
              </Link>

              <Link to='/privacy-settings'>
                <li className='cursor-pointer hover:text-emerald-400 active:text-emerald-500 focus:outline-none focus:ring focus:ring-text-emerald-100  '>
                  <span className='mb-2'>Privacy Settings</span>
                </li>
              </Link>
            </ul>
          </div>

          <div className='flex items-center space-x-4 text-emerald-800 '>
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

       
        <div className='mt-[3rem]'>
          <p className='text-center text-emerald-50 uppercase text-[1rem] md:text-base'>
            &copy; 2023 Your Ndembele. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
