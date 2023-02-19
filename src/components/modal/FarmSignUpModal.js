import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Link, Loader } from '../../components/utils'
import { PrimaryButton } from '../buttons'

// const categories = ['Farm', 'Crops', 'Cashew', 'Burger']
const categories = [
  {
    categoryId: '63e3c2e0f0fea8fb1ab0farm',
    name: 'Farm',
  },
  {
    categoryId: '63e3c2e0f0fea8fb1ab0crop',
    name: 'Crop',
  },
  {
    categoryId: '63e3c2e0f0fea8fb1acashew',
    name: 'Cashew',
  },
  {
    categoryId: '63e3c2e0f0fea8fb1aburger',
    name: 'Burger',
  },
]

const FarmSignUpModal = () => {
  const [loading, setLoading] = useState(false)

  const [showModal, setShowModal] = useState(false)

  const getItemLocalStorage = localStorage.getItem('ndembeleUserId')
  const userId = JSON.parse(getItemLocalStorage)

  const [investmentData, setInvestmentData] = useState({
    name: '',
    address: '',
    phone: '',
    ownerCommitment: '',
    images: '',
    category: categories[0].categoryId,
  })

  const { name, address, phone, images, category } = investmentData

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setInvestmentData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleImageChange = (event) => {
    const images = event.target.files
    setInvestmentData((prevState) => ({
      ...prevState,
      images,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    // console.log(formData)

    const formData = new FormData()
    formData.append('userId', userId)
    formData.append('name', name)
    formData.append('address', address)
    formData.append('phone', phone)
    formData.append('category', category)

    console.log(typeof category)

    // images.forEach((image) => {
    //   formData.append('images[]', image)
    // })

    if (images) {
      for (let i = 0; i < images.length; i++) {
        formData.append('images', images[0].name)
        // console.log('images', images[0].name)
      }
    }

    console.log('Form data:', {
      name,
      userId,
      address,
      phone,
      category,
      images,
    })

    // try {
    //   const res = await fetch('https://ndembele.onrender.com/investment', {
    //     method: 'POST',
    //     body: formData,
    //   })

    //   // const responseData = await res.json()
    //   console.log(res)
    //   if (res.ok) {
    //     console.log('Registration Successful')
    //   } else {
    //     console.error('Not Successfully Register')
    //   }
    //   setTimeout(() => {
    //     setLoading(false)
    //   }, 3000)

    //   // console.log(responseData); // this will log the response data from the server
    // } catch (err) {
    //   console.error('An error occurred during registration', err)
    // }

    fetch('https://ndembele.onrender.com/farm', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        console.log('Form data submitted successfully:', data)
      })
      .catch((error) => {
        console.error('There was a problem submitting the form:', error)
      })

    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }
  return (
    <div>
      <button
        className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
        onClick={() => setShowModal(true)}
      >
        Create Farm
      </button>
      {showModal ? (
        <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>
      ) : (
        ''
      )}

      {showModal && (
        <section className='fixed top-[20%] left-[25%] bg-slate-600 z-10 overflow-y-auto w-[50vw] h-[40rem] md:h-[50rem]'>
          <div className=' lg:min-h-screen'>
            {/* <aside className='relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6'>
              <img
                alt='Pattern'
                src='https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                class='absolute inset-0 w-full object-cover'
              />
            </aside> */}

            <main
              aria-label='Main'
              className='flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6'
            >
              <div className='max-w-xl lg:max-w-3xl'>
                <a className='block text-blue-600' href='/'>
                  <span className='sr-only'>Home</span>
                  <svg
                    className='h-8 sm:h-10'
                    viewBox='0 0 28 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z'
                      fill='currentColor'
                    />
                  </svg>
                </a>

                <h1 className='mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl'>
                  Welcome to Ndembele Farm 🦑
                </h1>

                <p className='mt-4 leading-relaxed text-white'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
                </p>

                {/* <ToastContainer /> */}

                <form
                  className='mt-8 grid grid-cols-6 gap-6'
                  onSubmit={handleSubmit}
                >
                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='name'
                      className='block text-2xl font-bold text-white'
                    >
                      Name
                    </label>

                    <input
                      type='text'
                      id='name'
                      name='name'
                      className='mt-1 w-full rounded-md border-gray-200 bg-white text-gray-700 shadow-sm py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                      value={name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='phone'
                      className='block text-2xl font-bold text-white'
                    >
                      Phone Number
                    </label>

                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      className='mt-1 w-full rounded-md border-gray-200 bg-white text-gray-700 shadow-sm py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                      value={phone}
                      onChange={handleInputChange}
                      // onChange={(event) => setPhone(event.target.value)}
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='address'
                      className='block text-2xl font-bold text-white'
                    >
                      Address
                    </label>

                    <textarea
                      id='address'
                      name='address'
                      className='mt-1 w-full rounded-md border-gray-200 bg-white text-gray-700 shadow-sm py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                      value={address}
                      onChange={handleInputChange}
                      // onChange={(event) => setDescription(event.target.value)}
                    />
                  </div>

                  <div className='col-span-6 sm:col-span-3'>
                    <label
                      htmlFor='category'
                      className='block text-2xl font-bold text-white'
                    >
                      Category
                    </label>

                    <select
                      id='category'
                      name='category'
                      className='mt-1 w-full rounded-md border-gray-200 bg-white text-gray-700 shadow-sm py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                      value={category.categoryId}
                      onChange={handleInputChange}
                      // onChange={(event) => setCategory(event.target.value)}
                    >
                      {categories.map((category) => (
                        <option
                          key={category.categoryId}
                          value={category.categoryId}
                        >
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className='col-span-6 '>
                    <label
                      htmlFor='images'
                      className='block text-2xl font-bold text-white'
                    >
                      Image
                    </label>

                    <input
                      type='file'
                      id='images'
                      name='images'
                      accept='images/*'
                      className='mt-1 w-full rounded-md border-gray-200 bg-white text-gray-700 shadow-sm py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                      onChange={handleImageChange}
                      // onChange={(event) =>
                      //   setImages(Array.from(event.target.files))
                      // }
                    />
                  </div>

                  <div className='col-span-6'>
                    <p className='text-xl text-white'>
                      By creating an Investment, you agree to our &nbsp;
                      <a href='#' className='text-blue-500 underline'>
                        terms and conditions &nbsp;
                      </a>
                      and &nbsp;
                      <a href='#' className='text-blue-500 underline'>
                        privacy policy
                      </a>
                      .
                    </p>
                  </div>

                  <div className='flex justify-between col-span-6 sm:flex sm:items-center sm:gap-4 gap-3'>
                    {/* <button
                      type='submit'
                      className='w-full rounded-md border border-emerald-500 bg-emerald-600 px-12 py-3 text-2xl text-white transition hover:bg-transparent  hover:bg-emerald-700 focus:ring focus:border-emerald-500 focus:ring-emerald-500/50` '
                    >
                      {loading && <Loader color={'white'} />}
                      <span>Submit</span>
                    </button> */}
                    <PrimaryButton type='submit'>
                      {loading && <Loader color={'white'} />}{' '}
                      <span>Submit</span>
                    </PrimaryButton>

                    <button
                      onClick={() => setShowModal(false)}
                      className='w-full rounded-md border border-emerald-500 bg-emerald-600 px-12 py-3 text-2xl text-white transition hover:bg-transparent  hover:bg-emerald-700 focus:ring focus:border-emerald-500 focus:ring-emerald-500/50'
                    >
                      <span>Cancel</span>
                    </button>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </section>
      )}
    </div>
  )
}

export default FarmSignUpModal
