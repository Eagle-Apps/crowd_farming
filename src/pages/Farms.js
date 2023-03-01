/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import FarmSignUpModal from '../components/modal/FarmSignUpModal'
import CardSkeleton from '../utils/card-Skeleton'

const Farms = () => {
  const [farms, setFarms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://ndembele.onrender.com/farms')
      .then((response) => response.json())
      .then((data) => {
        setFarms(data.pageOfItems)
        setLoading(false)
      })
  }, [])

  const res = Array.from(farms)

  console.log(res)

  return (
    <div className='max-w-[1640px] bg-slate-300'>
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
            <FarmSignUpModal />
          </div>
        </div>

        {/* Display foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 shadow bg-slate-300 border-gray-500 overflow-hidden'>
          {loading ? (
            <div>
              <CardSkeleton />
            </div>
          ) : res.length > 0 ? (
            res.map((farm) => (
              // <Link to={`/farm/${farm._id}`} key={farm._id}>
              <Link key={farm._id}>
                <div
                  // key={farm._id}
                  className='border shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer'
                >
                  <img
                    src={farm.images[0]}
                    alt={farm.name}
                    className='w-full h-[200px] object-cover rounded-t-lg'
                  />
                  <div className='flex justify-between px-2 py-4'>
                    <p className='font-bold'>{farm.name}</p>
                    <p>
                      <span className='text-white p-1 '>
                        {/* {farm.category.map((item) => item.title)} */}
                        {farm.category?.title}
                      </span>
                    </p>
                  </div>
                  <p className='px-5 font-normal text-gray-700'>
                    {farm.address}...
                  </p>
                  {/* <p className='px-5 font-normal text-gray-700 dark:text-gray-400'>
                        {farm.budget}
                      </p> */}
                </div>
              </Link>
            ))
          ) : (
            <p>No Farm</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Farms
