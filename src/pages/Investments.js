import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import FarmSignUpModal from '../components/modal/FarmSignUpModal'
import InvestmentSignUpModal from '../components/modal/InvestmentSignUpModal'
// import axios from 'axios'

import { data } from '../data/data'
import Nav from '../layouts/Nav'
import Footer from './Footer'

const Investment = () => {
  //   const [projects, setProjects] = useState([])
  //   useEffect(() => {
  //     axios
  //       .get('https://dummyjson.com/products')
  //       .then((res) => {
  //         setProjects(res.data)
  //         console.log(res.data.products)
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   }, [])

  const [foods, setFoods] = useState(data)

  // Filter Type burger/pizza/etc
  const filterType = (category) => {
    setFoods(data.filter((item) => item.category === category))
  }

  // Filter by price
  const filterPrice = (price) => {
    setFoods(data.filter((item) => item.price === price))
  }
  return (
    <div className='max-w-[1640px] bg-slate-300'>
      <Nav />
      <Hero />

      <div className='max-w-[1640px] m-auto px-[4rem] py-12 '>
        <h1 className='text-orange-600 font-bold text-4xl text-center mt-[2rem]'>
          All Investments
        </h1>

        {/* Filter Row */}
        <div className='flex flex-col  justify-between lg:flex-row'>
          {/* Filter Type */}
          <div>
            <p className='font-bold text-gray-700'>Filter Type</p>
            <div className='flex justify-between flex-wrap'>
              <button
                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                onClick={() => setFoods(data)}
              >
                All
              </button>
              <button
                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                onClick={() => filterType('burger')}
              >
                Burgers
              </button>
              <button
                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                onClick={() => filterType('pizza')}
              >
                Pizza
              </button>
              <button
                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                onClick={() => filterType('salad')}
              >
                Salads
              </button>
              <button
                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                onClick={() => filterType('chicken')}
              >
                Chicken
              </button>
            </div>
          </div>

          <div className='flex justify-between max-w-[390px] w-full'>
            {/* <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
              Create Investment
            </button> */}
            <InvestmentSignUpModal />
          </div>
        </div>

        {/* Display foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
          {foods.map((item, index) => (
            <div
              key={item.id}
              className='border shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer'
            >
              <img
                src={item.image}
                alt={item.name}
                className='w-full h-[200px] object-cover rounded-t-lg'
              />
              <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{item.name}</p>
                <p>
                  <span className='bg-orange-500 text-white p-1 rounded-full'>
                    {item.price}
                  </span>
                </p>
              </div>
              <p className='text-white'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <FarmSignUpModal />
      <Footer />
    </div>
  )
}

export default Investment
