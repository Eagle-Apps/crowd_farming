import React, { useState, useEffect } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { RiFacebookCircleFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { PrimaryButton, SecondaryButton } from '../components/buttons'
import { Checkbox, Input } from '../components/field'
import { Link, Loader } from '../components/utils'
import AuthLayout from '../layouts/AuthLayout'

const Login = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  // const [errorMessage, setErrorMessage] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const [userId, setUserId] = useState(null)

  // useEffect(() => {
  //   const storedUserId = localStorage.getItem('ndembeleUserId')
  //   if (storedUserId) {
  //     setIsLoggedIn(true)
  //     setUserId(storedUserId)
  //   }
  // }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    // setIsLoggedIn(true)

    // Make an HTTP request to submit the data
    const dataUser = {
      email,
      password,
    }

    try {
      // const res = await fetch('https://ndembele.onrender.com/login', {
      const res = await fetch('http://localhost:4400/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataUser),
      })

      const data = await res.json()
      
      if (data) {
        // localStorage.setItem('ndembeleUserId', JSON.stringify(data.userID))
        localStorage.setItem('ndembeleAccess', data.access_token)
        localStorage.setItem('ndembeleRefresh', data.refreshToken)

        toast.success('Login Successful !', {
          position: toast.POSITION.TOP_CENTER,
        })

        navigate('/')
      } else {
        // throw new Error(data.message)
        toast.error('Invalid Email or Password please try again.', {
          position: toast.POSITION.TOP_CENTER,
        })
      }

      setTimeout(() => {
        setLoading(false)
      }, 3000)
    } catch (err) { }
  }

  return (
    <AuthLayout
      title={
        <>
          Welcome back to <br /> Crowd Farming
        </>
      }
    >
      <h3 className='text-center text-2xl font-semibold text-gray-700'>
        Login to Account
      </h3>
      <p className='text-center text-[1.5rem] mt-2 mb-10'>
        Please sign-in to your account and start investing.
      </p>

      {/* {errorMessage && (
        <div className='my-2 text-center text-red-600 bg-red-100 py-2 rounded-md'>
          Invalid email or password
        </div>
      )} */}
      <ToastContainer />

      <form className='space-y-5 text-4xl' onSubmit={handleLogin}>
        <div>
          <Input
            label={'Email'}
            id='email'
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <Input
            label={'Password'}
            id='password'
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='flex items-center justify-between'>
          <Checkbox id='remember' label='Remember Me' />

          <Link href='/forgot-password'>Forgot Password?</Link>
        </div>


        <PrimaryButton type='submit' disabled={loading}>
          {loading && <Loader color={'white'} />}
          <span className='text-[1.5rem]'>Login to account</span>
        </PrimaryButton>

        <div className='flex items-center justify-center space-x-3'>
          <hr className='w-12' />
          <span className='font-bold uppercase text-xs text-gray-400'>Or</span>
          <hr className='w-12' />
        </div>

        <div className='flex items-center space-x-4 lg:space-x-2 xl:space-x-4 text-sm font-semibold'>
          <SecondaryButton as='a' href='#auth-google'>
            <FcGoogle className='h-5 w-5 lg:w-4 lg:h-4 xl:h-5 xl:w-5' />

            <span className='text-[1.2rem] md:text-[1.2rem] lg:text-[1.5rem] xl:text-[1.2rem]'>
              Continue with Google
            </span>
          </SecondaryButton>

          <SecondaryButton as='a' href='#auth-facebook'>
            <RiFacebookCircleFill className='h-5 w-5 lg:w-4 lg:h-4 xl:h-5 xl:w-5 text-blue-600' />

            <span className='text-[1.2rem] md:text-[1.2rem] lg:text-[1.5rem] xl:text-[1.2rem]'>
              Continue with Facebook
            </span>
          </SecondaryButton>
        </div>

        <p className='text-2xl text-center'>
          Don't have an account? <Link href='/register'>Register</Link>
        </p>
      </form>
    </AuthLayout>
  )
}

export default Login
