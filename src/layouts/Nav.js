import React, { useState, useEffect } from 'react'

import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
// import { AiOutlineDashboard } from 'react-icons/ai'
import { HiMenu } from 'react-icons/hi'
import { GiBlackcurrant } from 'react-icons/gi'
import { Link, useNavigate } from 'react-router-dom'

import { Container } from '../components/utils'
// import { checkUser, logout } from '../helpers'

const Nav = () => {
  const navigate = useNavigate()

  const [isSignedIn, setIsSignedIn] = useState(
    localStorage.getItem('ndembeleUserId')
  )

  console.log('isSignedIn', isSignedIn)

  useEffect(() => {
    const storedUserId = localStorage.getItem('ndembeleUserId')
    // if (storedUserId) {
    //   setIsSignedIn(storedUserId)
    //   // setUserId(storedUserId)
    // }
    setIsSignedIn(storedUserId)
  }, [isSignedIn])

  // const links = [
  //   {
  //     name: 'Home',
  //     to: '/',
  //   },
  //   {
  //     name: 'Investments',
  //     to: '/investment',
  //   },
  //   {
  //     name: 'Return',
  //     to: '#how-it-work',
  //   },
  //   {
  //     name: 'Contact Us',
  //     to: '/contact',
  //   },
  //   {
  //     name: 'About Us',
  //     to: '/about',
  //   },
  // ]

  console.log(localStorage.getItem('ndembeleUserId'))

  const handleSignOut = () => {
    // localStorage.removeItem('ndembeleUserId')
    setIsSignedIn(localStorage.removeItem('ndembeleUserId'))
    navigate('/login')
  }

  return (
    <nav className='text-gray-600 sm:p-0 text-base xl:text-lg font-medium bg-white py-4 lg:py-[1.1rem] xl:py-8 border-b shadow-sm fixed w-full z-50'>
      <Container className='flex items-center justify-between py-2 xl:py-0'>
        <div className='flex items-center space-x-12'>
          <Link to='/' className='flex items-center space-x-3'>
            <GiBlackcurrant className='w-9 h-9 md:w-12 md:h-12 text-emerald-600' />
            <div>
              <p className='inline text-xl md:text-2xl uppercase font-bold leading-[0.5rem]'>
                Ndem<span className='font-[300]'>bele</span>
              </p>
              <div className='flex items-center space-x-0.5 leading-[0.5rem]'>
                <span className='text-[0.62rem] font-bold text-emerald-600 uppercase leading-[0.5rem]'>
                  Invest in the new oil
                </span>
                <hr className='w-5 border-emerald-600' />
              </div>
            </div>
          </Link>

          {/* <div className='space-x-4 xl:space-x-8 hidden md:block'>
            {links.map((link, ind) => (
              <Link
                to={link.to}
                key={ind}
                className='transition-all duration-300 font-medium py-2 xl:py-3 hover:text-emerald-600'
              >
                {link.name}
              </Link>
            ))} */}

          <div className='space-x-4 xl:space-x-8 hidden md:block'>
            <Link
              to='/'
              className='transition-all duration-300 font-medium py-2 xl:py-3 hover:text-emerald-600'
            >
              Home
            </Link>
            {!isSignedIn && (
              <Link
                to='/investment'
                className='transition-all duration-300 font-medium py-2 xl:py-3 hover:text-emerald-600'
              >
                Investments
              </Link>
            )}
            <Link
              to='#how-it-work'
              className='transition-all duration-300 font-medium py-2 xl:py-3 hover:text-emerald-600'
            >
              Returns
            </Link>
            <Link
              to='/about'
              className='transition-all duration-300 font-medium py-2 xl:py-3 hover:text-emerald-600'
            >
              About us
            </Link>
            <Link
              to='/contact'
              className='transition-all duration-300 font-medium py-2 xl:py-3 hover:text-emerald-600'
            >
              Contact us
            </Link>
          </div>
        </div>
        {/* {checkUser() ? (
          <Menu>
            <div className='relative'>
              <Menu.Button className='focus:outline-none'>
                <img
                  className='w-8 h-8 rounded-md'
                  src='/images/avatar.jpeg'
                  alt=''
                />
              </Menu.Button>

              <Transition
                enter='transition duration-100 ease-out'
                enterFrom='transform scale-95 opacity-0'
                enterTo='transform scale-100 opacity-100'
                leave='transition duration-75 ease-out'
                leaveFrom='transform scale-100 opacity-100'
                leaveTo='transform scale-95 opacity-0'
              >
                <Menu.Items>
                  <div className='absolute right-0 z-10 w-48 px-2 py-1 mt-1 text-gray-600 bg-white border rounded-md shadow'>
                    <Menu.Item>
                      <Link
                        to={'/dashboard'}
                        className='flex items-center space-x-3 px-3 py-2.5 text-sm hover:text-purple-500'
                      >
                        <AiOutlineDashboard className='h-5 w-5' />
                        <span>Dashboard</span>
                      </Link>
                    </Menu.Item>
                    <hr />

                    <Menu.Item>
                      <Link
                        to={'#profile'}
                        className='flex items-center space-x-3 px-3 py-2.5 text-sm hover:text-purple-500'
                      >
                        <svg
                          className='w-5 h-5'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                          />
                        </svg>
                        <span>Profile</span>
                      </Link>
                    </Menu.Item>
                    <hr />

                    <Menu.Item>
                      <a
                        href={'/logout'}
                        className='flex items-center space-x-3 px-3 py-2.5 text-sm hover:text-purple-500'
                        onClick={handleClick}
                      >
                        <svg
                          className='w-5 h-5'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                          />
                        </svg>
                        <span>Logout</span>
                      </a>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </div>
          </Menu>
        ) : ( */}
        <div className='md:flex hidden items-center space-x-3'>
          {isSignedIn !== null ? (
            <>
              <button
                onClick={handleSignOut}
                className='transition-all duration-300 px-3 lg:px-4 xl:px-8 font-medium py-2 xl:py-3 text-emerald-600 hover:text-emerald-500'
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
                      to='/#personal'
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
                      to='/#how-it-work'
                      className='block transition-all duration-300 font-medium py-2 hover:text-emerald-600'
                    >
                      Returns
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
