import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { RiFacebookCircleFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { PrimaryButton, SecondaryButton } from '../components/buttons'
import { Checkbox, Input } from '../components/field'
import { Link, Loader } from '../utils/utils'
import AuthLayout from '../layouts/AuthLayout'

const Register = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phone: '',
    userName: '',
    address: '',
  })

  const { firstname, lastname, address, phone, userName, email, password } =
    formData

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Checking for password Length
    if (password.length < 8) {
      setLoading(false)
      return toast.error('Password must be at least 8 characters long!', {
        position: toast.POSITION.TOP_CENTER,
      })
    }

    // Checking if phone number length is 11 or numbers
    if (phone.length < 11 || isNaN(phone)) {
      setLoading(false)
      return toast.error('Phone must have at least 11 numbers', {
        position: toast.POSITION.TOP_CENTER,
      })
    }

    if (!email.includes('@')) {
      setLoading(false)
      return toast.error('Invalid email', {
        position: toast.POSITION.TOP_CENTER,
      })
    }

    try {
      const response = await fetch('https://ndembele.onrender.com/register', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-type': 'application/json',
        },
      })

      // const data = await response.json()
      // console.log(data)

      if (response.ok) {
        // if (data.status === 'success') {
        toast.success('Registration Successful !', {
          position: toast.POSITION.TOP_CENTER,
        })
        navigate('/login')

        setFormData({
          firstname: '',
          lastname: '',
          address: '',
          phone: '',
          email: '',
          password: '',
          userName: '',
        })
      } else {
        // throw new Error(data.message)
        toast.error(
          'An error occurred during registration, please try again.',
          {
            position: toast.POSITION.TOP_CENTER,
          }
        )
      }

      setTimeout(() => {
        setLoading(false)
      }, 3000)
    } catch (err) {
      console.error(err)
      // alert('There was an error submitting the form. Please try again later.')
      toast.error('An error occurred during registration, please try again.', {
        position: toast.POSITION.TOP_CENTER,
      })
    }
  }

  return (
    <AuthLayout
      title={
        <>
          <span className='text-gray-300'>
            Welcome to <br /> Crowd Farming
          </span>
        </>
      }
    >
      <h3 className='text-center text-[1.6rem] mt-[6rem] font-semibold text-gray-700'>
        Create New Account
      </h3>
      <p className='text-center text-xl mt-2 mb-10'>
        Create an account to start investing in crowd farming projects
      </p>

      <ToastContainer className='mt-[9rem]' />

      <form className='space-y-5' onSubmit={handleRegister}>
        <div>
          <Input
            label={'First Name'}
            id='firstname'
            name='firstname'
            type='firstname'
            placeholder='Enter firstname'
            value={firstname}
            onChange={handleChange}
          />
        </div>

        <div>
          <Input
            label={'Last Name'}
            id='lasttname'
            name='lastname'
            type='text'
            placeholder='Enter Lastname'
            value={lastname}
            onChange={handleChange}
          />
        </div>

        <div>
          <Input
            label={'Email'}
            id='email'
            type='email'
            name='email'
            placeholder='Enter email'
            value={email}
            onChange={handleChange}
          />
        </div>

        <div>
          <Input
            label={'Password'}
            id='password'
            type='password'
            name='password'
            placeholder='Enter password'
            value={password}
            onChange={handleChange}
          />
        </div>

        <div>
          <Input
            label={'Phone No:'}
            id='number'
            type='number'
            name='phone'
            placeholder='Enter Phone Number'
            value={phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <Input
            label={'User Name'}
            id='user'
            type='text'
            name='userName'
            placeholder='Enter User Name'
            value={userName}
            onChange={handleChange}
          />
        </div>

        <div>
          <Input
            label={'Address'}
            id='address'
            type='textarea'
            name='address'
            placeholder='Enter your Address'
            value={address}
            onChange={handleChange}
          />
        </div>

        <div>
          <Checkbox id='remember' label='I agree to privacy policy & terms' />
        </div>

        <PrimaryButton type='submit'>
          {loading && <Loader color={'white'} />}{' '}
          <span className='text-xl'>Sign up</span>
        </PrimaryButton>

        <div className='flex items-center justify-center space-x-3'>
          <hr className='w-12' />
          <span className='font-bold uppercase text-xs text-gray-400'>Or</span>
          <hr className='w-12' />
        </div>

        <div className='flex items-center space-x-4 lg:space-x-2 xl:space-x-4 text-sm font-semibold'>
          <SecondaryButton as='a' href='#auth-google'>
            <FcGoogle className='h-5 w-5 lg:w-4 lg:h-4 xl:h-5 xl:w-5' />

            <span className='text-[0.7rem] md:text-sm lg:text-[0.7rem] xl:text-sm'>
              Continue with Google
            </span>
          </SecondaryButton>

          <SecondaryButton as='a' href='#auth-facebook'>
            <RiFacebookCircleFill className='h-5 w-5 lg:w-4 lg:h-4 xl:h-5 xl:w-5 text-blue-600' />

            <span className='text-[0.7rem] md:text-sm lg:text-[0.7rem] xl:text-sm'>
              Continue with Facebook
            </span>
          </SecondaryButton>
        </div>

        <p className='text-sm text-center'>
          Already have an account? <Link href='/login'>Login</Link>
        </p>
      </form>
    </AuthLayout>
  )
}

export default Register
