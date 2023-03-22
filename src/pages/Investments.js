/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../layouts/Hero'
import InvestmentSignUpModal from '../components/modal/InvestmentSignUpModal'
import CardSkeleton from '../utils/card-Skeleton'
import { Container } from '../utils/utils'
// import { AuthContext } from '../context/AuthContext'

// import { data } from '../data/data'

const Investment = () => {
  const [investments, setInvestments] = useState([])
  const [investPager, setInvestPager] = useState({})
  const [selectedCategory, setSelectedCategory] = useState('')
  // const [data, setData] = useState({ pager: {}, pageOfItems: [] });
  const [loading, setLoading] = useState(true)
  // const { setIsSignedIn } = useContext(AuthContext)

  // console.log('Investment', investments)

  // console.log('Category', filteredData)

  useEffect(() => {
    fetch('https://ndembele.onrender.com/investments')
      .then((response) => response.json())
      .then((data) => {
        setInvestments(data.pageOfItems)
        setInvestPager(data.pager)
        // setFilteredData(data.pageOfItems)
        setLoading(false)
      })
  }, [])

  const res = Array.from(investments)

  // console.log(res, 'coming from')
  // const filteredData = res.filter((item) => {
  //   const filteredItem = item.category[0].title
  //   console.log('filter items oppo', item.category[0].title)

  // })

  const filteredData = selectedCategory
    ? res.filter((item) => item.category[0]?.title === selectedCategory)
    : res

  console.log('Filtered data', filteredData)

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  console.log('Selected', selectedCategory)
  // Filter Type burger/pizza/etc
  // const filterType = (category) => {
  //   setInvestments(data.filter((item) => item.category === category))
  // }

  return (
    <div className='max-w-[1640px]'>
      <Hero />

      <div className='max-w-[1740px] m-auto px-[4rem] py-12 '>
        <h1 className='text-emerald-600 font-bold text-4xl text-center mt-[2rem]'>
          Current Investments ( {investPager.totalItems} )
        </h1>
        {/* Filter Row */}
        <div className='flex flex-col justify-between lg:flex-row'>
          {/* Filter Type */}
          <div>
            <p className='font-bold text-gray-700'>Filter Type</p>
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

                  {/* <option value=''>All Category</option>
                  {investments?.map((item) => (
                    <option key={item._id} value={item.category.title}>
                      {item.category?.title}
                    </option>
                  ))} */}
                </select>

                {/* <ul>
                  {filteredData.map((item) => (
                    <li key={item.id}>{item.title}</li>
                  ))}
                </ul> */}
              </div>

              {/* <button
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
              </button> */}
            </div>
          </div>

          <div className='flex justify-between max-w-[390px] w-full'>
            <InvestmentSignUpModal />
          </div>
        </div>
        {/* Display foods */}
        <Container className='mt-[2rem] '>
          <div className='pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
            {loading ? (
              <>
                <CardSkeleton />
              </>
            ) : filteredData.length > 0 ? (
              filteredData.map((investment) => (
                <Link to={`/investment/${investment._id}`} key={investment._id}>
                  <div
                    // key={investment._id}
                    // className='border shadow-sm rounded-lg hover:scale-105 duration-300 cursor-pointer'
                    className='w-2/3 mx-auto md:w-full bg-white transition-all hover:scale-105 duration-300 cursor-pointer border border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 shadow-xl'
                  >
                    <div className='flex items-center justify-center'>
                      <img
                        src={investment.images[0]}
                        alt={investment.title}
                        className='w-full h-[200px] object-cover rounded-t-lg'
                      />
                    </div>

                    <h3 className='text-xl lg:text-2xl font-bold text-emerald-900'>
                      {investment.title}
                    </h3>
                    <p className='max-w-lg text-lg text-emerald-900'>
                      {investment?.descp?.substring(0, 40)}...
                    </p>
                    <div className='flex justify-between px-2 py-4'>
                      <p className='font-bold text-emerald-900'>
                        {investment.category.map((item) => item.title)}
                      </p>
                      {/* <p className='px-5 font-normal text-gray-700'>
                        {investment.budget}
                      </p> */}
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>No Investment</p>
            )}
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Investment
