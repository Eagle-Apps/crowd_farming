import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
} from 'react-icons/sl'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-[#0f7508] text-emerald-50'>
      <div className='container mx-auto px-4 py-8 md:py-12 lg:py-16 xl:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='flex flex-col space-y-4'>
            <h3 className='text-lg font-semibold'>Let Us Help You</h3>
            <ul>
              <li>
                <Link to='/contact' className='hover:text-emerald-400'>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to='/about' className='hover:text-emerald-400'>
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className='flex flex-col space-y-4'>
            <h3 className='text-lg font-semibold'>About Ndembele</h3>
            <ul>
              <li>
                <Link to='/terms' className='hover:text-emerald-400'>
                  Terms
                </Link>
              </li>
              <li>
                <Link to='#' className='hover:text-emerald-400'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to='/privacy-settings' className='hover:text-emerald-400'>
                  Privacy Settings
                </Link>
              </li>
            </ul>
          </div>

          <div className='flex flex-col space-y-4'>
            <h3 className='text-lg font-semibold'>Join Us On</h3>
            <div className='flex items-center space-x-4 text-emerald-800'>
              <Link
                to='#'
                className='bg-white hover:bg-emerald-400 shadow-lg border border-gray-300 border-opacity-30 rounded-full p-2'
              >
                <SlSocialFacebook className='w-6 h-6' />
              </Link>
              <Link
                to='#'
                className='bg-white hover:bg-emerald-400 shadow-lg border border-gray-300 border-opacity-30 rounded-full p-2'
              >
                <SlSocialTwitter className='w-6 h-6' />
              </Link>
              <Link
                to='#'
                className='bg-white hover:bg-emerald-400 shadow-lg border border-gray-300 border-opacity-30 rounded-full p-2'
              >
                <SlSocialInstagram className='w-6 h-6' />
              </Link>
              <Link
                to='#'
                className='bg-white hover:bg-emerald-400 shadow-lg border border-gray-300 border-opacity-30 rounded-full p-2'
              >
                <SlSocialLinkedin className='w-6 h-6' />
              </Link>
            </div>
          </div>
        </div>

        <div className='mt-8 md:mt-12 lg:mt-16'>
          <p className='text-center text-emerald-50 uppercase text-sm md:text-base lg:text-lg'>
            &copy; 2023 Ndembele. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
