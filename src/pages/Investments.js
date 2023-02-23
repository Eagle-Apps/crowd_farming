/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import FarmSignUpModal from '../components/modal/FarmSignUpModal'
import InvestmentSignUpModal from '../components/modal/InvestmentSignUpModal'
// import axios from 'axios'

// import { data } from '../data/data'
import Nav from '../layouts/Nav'
import Footer from './Footer'

const Investment = () => {
  // const [foods, setFoods] = useState(data)
  const [investments, setInvestments] = useState([])

  useEffect(() => {
    fetch('https://ndembele.onrender.com/investments')
      .then((response) => response.json())
      .then((data) => setInvestments(data.pageOfItems))
  }, [])

  const res = Array.from(investments)

  // useEffect(() => {
  //   async function fetchInvestments() {
  //     const response = await fetch('https://ndembele.onrender.com/investments')
  //     const data = await response.json()
  //     setInvestments(data)
  //   }
  //   fetchInvestments()
  // }, [])

  // Filter Type burger/pizza/etc
  // const filterType = (category) => {
  //   setInvestments(data.filter((item) => item.category === category))
  // }

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
          {/* <div>
            <p className='font-bold text-gray-700'>Filter Type</p>
            <div className='flex justify-between flex-wrap'>
              <button
                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                onClick={() => setInvestments(data)}
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
          </div> */}

          <div className='flex justify-between max-w-[390px] w-full'>
            {/* <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>
              Create Investment
            </button> */}
            <InvestmentSignUpModal />
          </div>
        </div>

        {/* Display foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 shadow dark:bg-gray-800 dark:border-gray-700'>
          {res.map((investment) => (
             <Link to={`/investment/${investment._id}`} key={investment._id}>
            <div
              // key={investment._id}
              className='border shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer'
            >
              <img
                src={investment.images[0]}
                alt={investment.title}
                className='w-full h-[200px] object-cover rounded-t-lg'
              />
              <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{investment.title}</p>
                <p>
                  <span className='text-white p-1 '>
                    {investment.category.map(item => item.title)}
                  </span>
                </p>
              </div>
              <p className='px-5 font-normal text-gray-700 dark:text-gray-400'>
                {investment.descp.substring(0, 60)}...
              </p>
              <p className='px-5 font-normal text-gray-700 dark:text-gray-400'>
              {investment.budget}
              </p>
            </div>
            </Link>
          ))}
        </div>
      </div>

      <FarmSignUpModal />
      <Footer />
    </div>
  )
}

export default Investment
