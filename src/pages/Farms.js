/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../layouts/Hero'
import FarmSignUpModal from '../components/modal/FarmSignUpModal'
import CardSkeleton from '../utils/card-Skeleton'
import { Container } from '../utils/utils'

const Farms = () => {
  const [farms, setFarms] = useState([])
  const [farmPager, setFarmPager] = useState({})
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    fetch('https://ndembele.onrender.com/farms')
      .then((response) => response.json())
      .then((data) => {
        setFarms(data.pageOfItems)
        setFarmPager(data.pager)
        setLoading(false)
      })
  }, [])

  const res = Array.from(farms)

  const filteredData = selectedCategory
    ? res.filter((item) => item.category?.title === selectedCategory)
    : res

  console.log('Filtered data', filteredData)

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  console.log('Selected', selectedCategory)

  return (
    <div className='max-w-[1640px]'>
      <Hero />

      <div className='max-w-[1740px] m-auto px-[4rem] py-12 '>
        <h1 className='text-[#0f7508] font-bold text-4xl text-center mt-[2rem]'>
          Current Farms ({farmPager.totalItems})
        </h1>

        {/* Filter Row */}
        <div className='flex flex-col justify-between lg:flex-row'>
          
          {/* Filter Type */}

          <div className='ml-10'>
            <p className='font-bold text-[#bf9000]'>Filter Type</p>
            <div className='flex justify-between flex-wrap'>
              {/* <button
                className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                // onClick={() => setInvestments(data)}
              >
                All
              </button> */}

              <div>
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value=''>All Categories</option>
                  <option value='horticulture'>Horticulture</option>
                  <option value='fishery'>Fishery</option>
                  <option value='crop farming'>Crop Farming</option>
                  <option value='animal rearing'>Animal Rearing</option>
                  <option value='poultry'>Poultry</option>
                </select>
              </div>
            </div>
          </div>

          <div className='flex justify-between max-w-[390px] w-full'>
            <FarmSignUpModal />
          </div>
        </div>

        {/* Display foods */}
        <Container className='mt-[2rem] '>
          <div className='pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
            {loading ? (
              <div>
                <CardSkeleton />
              </div>
            ) : filteredData.length > 0 ? (
              filteredData.map((farm) => (
                <Link to={`/farm/${farm._id}`} key={farm._id}>
                  {/*  <Link key={farm._id}> */}
                  <div
                    // key={farm._id}
                    className='w-2/3 mx-auto md:w-full bg-white transition-all hover:scale-105 duration-300 cursor-pointer border border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 shadow-xl'
                  >
                    <div className='flex items-center justify-center'>
                      <img
                        src={farm.images[0]}
                        alt={farm.name}
                        className='w-full h-[200px] object-cover rounded-t-lg'
                      />
                    </div>

                    <div className='flex justify-between px-2 py-4'>
                      <p className='font-bold text-[#0f7508]'>{farm.name}</p>
                      <p>
                        <span className='text-xl lg:text-2xl font-bold text-[#0f7508] '>
                          {/* {farm.category.map((item) => item.title)} */}
                          {farm.category?.title}
                        </span>
                      </p>
                    </div>
                    <p className='max-w-lg text-lg text-[#bf9000]'>
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
        </Container>
      </div>
    </div>
  )
}

export default Farms
