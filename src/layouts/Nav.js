import React, { useContext, useState } from 'react'

import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
// import { AiOutlineDashboard } from 'react-icons/ai'
import { HiMenu } from 'react-icons/hi'
import { GiBlackcurrant } from 'react-icons/gi'
import { Link, useNavigate } from 'react-router-dom'
import { Container } from '../utils/utils'

import { AuthContext } from '../context/AuthContext'

const Nav = () => {
  const navigate = useNavigate()
  const { isSignedIn, setIsSignedIn } = useContext(AuthContext)

  const [activeLink, setActiveLink] = useState('Home')

  const handleFieldClick = (field) => {
    setActiveLink(field)
  }

  // console.log(isSignedIn)

  const links = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Investments',
      path: '/investment',
    },
    {
      name: 'Farm',
      path: '/farm',
    },
    {
      name: 'Contact Us',
      path: '/contact',
    },
    {
      name: 'About Us',
      path: '/about',
    },
  ]

  // console.log(localStorage.getItem('ndembeleUserId'))

  const handleSignOut = () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?')
    if (confirmLogout) {
      localStorage.removeItem('ndembeleAccess')
      setIsSignedIn(false)
    }

    navigate('/')
  }

  return (
    <nav className='text-gray-600 sm:p-0 text-base xl:text-lg font-medium bg-white py-4 lg:py-[1.1rem] xl:py-8 border-b shadow-sm fixed w-full z-50'>
      <Container className='flex items-center justify-between py-2 xl:py-0'>
        <div className='flex items-center space-x-12'>
          <Link to='/' className='flex items-center space-x-3'>
            <img
              src='./images/logo.png'
              alt=''
              className='w-[6rem] h-[6rem] md:w-[7rem] md:h-[7rem] '
            />
          </Link>

          <div className='space-x-4 xl:space-x-8 hidden md:block'>
            {links.map((link) => (
              <Link
                onClick={() => handleFieldClick(link.name)}
                to={link.path}
                key={link.name}
                className={`transition-all duration-300 text-xl font-medium py-2 xl:py-3 hover:text-emerald-400 ${
                  activeLink === link.name
                    ? 'text-emerald-600 border-b-2 border-yellow-400'
                    : 'hover:text-emerald-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className='md:flex hidden items-center space-x-3'>
          {isSignedIn ? (
            <>
              <Link
                to='/profile'
                className='transition-all duration-300 px-3 lg:px-4 xl:px-8 font-medium py-2 xl:py-3 text-emerald-600 hover:text-gray-500'
              >
                Profile
              </Link>

              <button
                onClick={handleSignOut}
                className='transition-all duration-300 px-3 lg:px-4 xl:px-8 font-medium py-2 xl:py-3 text-emerald-600 hover:text-emerald-500 bg-emerald-600 text-white rounded-md focus:outline-none hover:bg-emerald-700 focus:ring focus:border-emerald-500 focus:ring-emerald-500/50'
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to='/login'
                className='transition-all duration-300 px-3 lg:px-4 xl:px-8 font-medium py-2 xl:py-3 text-emerald-600 hover:text-gray-500'
              >
                Login
              </Link>

              <Link
                to='/register'
                className='transition-all duration-300 px-3 lg:px-4 xl:px-8 font-medium py-2 xl:py-3 bg-emerald-600 text-white rounded-md focus:outline-none hover:bg-emerald-700 focus:ring focus:border-emerald-500 focus:ring-emerald-500/50'
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
        {/* )} */}
        {/* {!checkUser() && ( */}
        <div className='md:hidden relative'>
          <Menu as='div' className='relative inline-block text-left'>
            <Menu.Button className='inline-flex w-full justify-center rounded-md bg-emerald-600 p-2 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
              <HiMenu className='h-7 w-7' />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute right-0 mt-2 p-3 w-96 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div className=''>
                  <Menu.Item>
                    <Link
                      to='/'
                      className='block transition-all duration-300 font-medium py-2 hover:text-emerald-600'
                    >
                      Home
                    </Link>
                  </Menu.Item>

                  <Menu.Item>
                    <Link
                      to='/investment'
                      className='block transition-all duration-300 font-medium py-2 hover:text-emerald-600'
                    >
                      Investments
                    </Link>
                  </Menu.Item>

                  <Menu.Item>
                    <Link
                      to='/farm'
                      className='block transition-all duration-300 font-medium py-2 hover:text-emerald-600'
                    >
                      Farm
                    </Link>
                  </Menu.Item>

                  <Menu.Item>
                    <Link
                      to='/about'
                      className='block transition-all duration-300 font-medium py-2 hover:text-emerald-600'
                    >
                      About Us
                    </Link>
                  </Menu.Item>

                  <Menu.Item>
                    <Link
                      to='/contact'
                      className='block transition-all duration-300 font-medium py-2 hover:text-emerald-600'
                    >
                      Contact Us
                    </Link>
                  </Menu.Item>

                  <div className='flex items-center space-x-3'>
                    {isSignedIn ? (
                      <button
                        onClick={handleSignOut}
                        className='w-1/2 text-center transition-all duration-300 px-3 font-medium py-1.5 text-emerald-900 border border-emerald-900 rounded-md focus:outline-none hover:text-white hover:bg-emerald-700 focus:ring focus:border-emerald-500 focus:ring-emerald-500/50'
                      >
                        Logout
                      </button>
                    ) : (
                      <>
                        <Menu.Item>
                          <Link
                            to='/login'
                            className='w-1/2 text-center transition-all duration-300 px-3 font-medium py-1.5 text-emerald-900 border border-emerald-900 rounded-md focus:outline-none hover:text-white hover:bg-emerald-700 focus:ring focus:border-emerald-500 focus:ring-emerald-500/50'
                          >
                            Login
                          </Link>
                        </Menu.Item>

                        <Menu.Item>
                          <Link
                            to='/register'
                            className='transition-all block text-center w-1/2 duration-300 px-3 lg:px-4 xl:px-8 font-medium py-2 xl:py-3 border border-emerald-600 bg-emerald-600 text-white rounded-md focus:outline-none hover:bg-emerald-700 focus:ring focus:border-emerald-500 focus:ring-emerald-500/50'
                          >
                            Sign Up
                          </Link>
                        </Menu.Item>
                      </>
                    )}
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        {/* )} */}
      </Container>
    </nav>
  )
}

export default Nav
