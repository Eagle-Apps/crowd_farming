import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup'

import { Container } from '../components/utils'
import Banner from '../layouts/Banner'
// import Nav from '../layouts/Nav'

// import Footer from './Footer'

const Home = () => {
  const [investments, setInvestments] = useState([])

  useEffect(() => {
    fetch('https://ndembele.onrender.com/investment-4')
      .then((response) => response.json())
      .then((data) => setInvestments(data))
  }, [])

  return (
    <div className='overflow-y-scroll'>
      {/* <Nav /> */}

      <Banner />

      <Container className='wow fadeInUp relative -mt-[110px]'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 bg-white border border-gray-200 border-opacity-50 shadow-2xl rounded-xl'>
          <div className='text-center py-10 lg:py-16 space-y-3 text-emerald-900 font-medium'>
            <h1 className='text-5xl lg:text-6xl font-semibold text-emerald-600'>
              <CountUp end={50} />+
            </h1>
            <p className='text-2xl lg:text-base'>Projects</p>
          </div>

          <div className='text-center py-10 lg:py-16 space-y-3 text-emerald-900 font-medium'>
            <h1 className='text-5xl lg:text-6xl font-semibold text-emerald-600'>
              <CountUp end={25} />%
            </h1>
            <p className='text-2xl lg:text-base'>ROI</p>
          </div>

          <div className='text-center py-10 lg:py-16 space-y-3 text-emerald-900 font-medium'>
            <h1 className='text-5xl lg:text-6xl font-semibold text-emerald-600'>
              <CountUp end={70} />+
            </h1>
            <p className='text-2xl lg:text-base'>Investments</p>
          </div>

          <div className='text-center py-10 lg:py-16 space-y-3 text-emerald-900 font-medium'>
            <h1 className='text-5xl lg:text-6xl font-semibold text-emerald-600'>
              <CountUp end={24} />/<CountUp end={24} />
            </h1>
            <p className='text-2xl lg:text-base'>Payouts</p>
          </div>
        </div>
      </Container>

      {/* Start of banner for latest Investment */}
      <div
        className='mt-28 pt-10 md:pt-28 pb-52 space-y-8 text-center text-white bg-no-repeat bg-cover bg-center'
        style={{ backgroundImage: "url('/images/our-solutions-bg.png')" }}
      >
        <h3 className='wow fadeInUp text-xl md:text-2xl text-green-400 font-bold'>
          Trust, safety and reliance
        </h3>
        <h1 className='wow fadeInUp text-2xl text-emerald-600 md:text-4xl xl:text-6xl font-bold'>
          Bring Your projects forth
          <br className='hidden lg:block' /> for funding
        </h1>
        <p className='wow fadeInUp text-white font-medium text-opacity-80 text-sm md:text-xl'>
          Have an agricultural project? Bring just your idea and one more thing
          {/* <br /> investment and guarantee slots for next investment */}
        </p>
      </div>
      {/* Start of banner for latest Investment */}

      {/* Start of Card for latest investment */}
      <Container className='-mt-[6rem] wow fadeInUp'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
          {investments.map((investment) => (
            <div key= {investment._id}className='w-2/3 mx-auto md:w-full bg-white transition-all duration-300 cursor-pointer border border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 shadow-xl'>
              <div className='flex items-center justify-center'>
                {/* <img src='/images/our-solutions-icon-1.png' alt='' /> */}
                <img
                  src={investment.images}
                  alt={investment.title}
                  className='w-full h-[200px] object-cover rounded-t-lg'
                />
              </div>
              <h3 className='text-xl lg:text-2xl font-bold text-emerald-900'>
                {investment.title}
              </h3>
              <p className='max-w-lg text-lg text-emerald-900'>
                {investment.descp}
              </p>
              <div className='flex justify-between px-2 py-4'>
                <p className='font-bold text-emerald-900'>
                  Farm
                  {/* {investment.category.map((item) => item.title)} */}
                </p>
              </div>
            </div>
          ))}

          {/* <div className='w-2/3 mx-auto md:w-full bg-white transition-all duration-300 cursor-pointer border border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 shadow-xl'>
            <div className='flex items-center justify-center'>
              <img src='/images/our-solutions-icon-2.png' alt='' />
            </div>
            <h3 className='text-xl lg:text-2xl font-bold text-emerald-900'>
              Investment 1
            </h3>
            <p className='max-w-lg text-lg text-emerald-900'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold text-emerald-900'>Farm</p>
            </div>
          </div>

          <div className='w-2/3 mx-auto md:w-full bg-white transition-all duration-300 cursor-pointer border border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 shadow-xl'>
            <div className='flex items-center justify-center'>
              <img src='/images/our-solutions-icon-3.png' alt='' />
            </div>
            <h3 className='text-xl lg:text-2xl font-bold text-emerald-900'>
              Investment 2
            </h3>
            <p className='max-w-lg text-lg text-emerald-900'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold text-emerald-900'>Investment</p>
            </div>
          </div>

          <div className='w-2/3 mx-auto md:w-full bg-white transition-all duration-300 cursor-pointer border border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 shadow-xl'>
            <div className='flex items-center justify-center'>
              <img src='/images/our-solutions-icon-4.png' alt='' />
            </div>
            <h3 className='text-xl lg:text-2xl font-bold text-emerald-900'>
              Investment 3
            </h3>
            <p className='max-w-lg text-lg text-emerald-900'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold text-emerald-900'>Investment</p>
            </div>
          </div> */}
        </div>
      </Container>
      {/* End of Card for latest investment */}

      <Container className='wow fadeInUp flex items-center flex-col-reverse mt-[8rem] xl:flex-row xl:space-y-0 xl:space-x-5'>
        <div className='w-full xl:w-1/2'>
          <img
            src='/images/global-payment-img.png'
            className='h-auto object-contain object-center align-middle mt-16 xl:mt-0'
            alt=''
          />
        </div>

        <div className='w-full xl:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 text-emerald-900'>
          <div className='transition-all duration-300 border border-emerald-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl'>
            <div className='flex items-center justify-center'>
              <img src='/images/global-payment-icon-1.png' alt='' />
            </div>
            <h3 className='text-xl lg:text-2xl font-bold text-emerald-900'>
              Peace of Mind
            </h3>
            <p className='max-w-lg'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
              venenatis, eu sit massa. Volutpat massa rhoncus odio.
            </p>
          </div>

          <div className='transition-all duration-300 border border-emerald-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl'>
            <div className='flex items-center justify-center'>
              <img src='/images/global-payment-icon-2.png' alt='' />
            </div>
            <h3 className='text-xl lg:text-2xl font-bold text-emerald-900'>
              Earn at Ease
            </h3>
            <p className='max-w-lg'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
              venenatis, eu sit massa. Volutpat massa rhoncus odio.
            </p>
          </div>

          <div className='transition-all duration-300 border border-emerald-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl'>
            <div className='flex items-center justify-center'>
              <img src='/images/global-payment-icon-3.png' alt='' />
            </div>
            <h3 className='text-xl lg:text-2xl font-bold text-emerald-900'>
              100% Transparent
            </h3>
            <p className='max-w-lg'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
              venenatis, eu sit massa. Volutpat massa rhoncus odio.
            </p>
          </div>

          <div className='transition-all duration-300 border border-emerald-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl'>
            <div className='flex items-center justify-center'>
              <img src='/images/global-payment-icon-4.png' alt='' />
            </div>
            <h3 className='text-xl lg:text-2xl font-bold text-emerald-900'>
              International Network
            </h3>
            <p className='max-w-lg'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
              venenatis, eu sit massa. Volutpat massa rhoncus odio.
            </p>
          </div>
        </div>
      </Container>

      <div
        className='mt-28 pt-10 md:pt-28 pb-52 space-y-8 text-center text-white bg-no-repeat bg-cover bg-center'
        style={{ backgroundImage: "url('/images/our-solutions-bg.png')" }}
      >
        <h3 className='wow fadeInUp text-xl md:text-2xl text-green-400 font-bold'>
          Verified Projects. High returns. No hassle.
        </h3>
        <h1 className='wow fadeInUp text-2xl text-emerald-500 md:text-4xl xl:text-6xl font-bold'>
          Legally followed and insurance cover
          <br className='hidden lg:block' /> all year round
        </h1>
        <p className='wow fadeInUp text-white font-medium text-opacity-80 text-sm md:text-base'>
          Purchase units of different projects to increase your returns on{' '}
          <br /> investment and guarantee slots for next investment
        </p>
      </div>

      <Container className='-mt-[6rem] wow fadeInUp'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
          <div className='w-2/3 mx-auto md:w-full bg-white transition-all duration-300 border border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 shadow-xl'>
            <div className='flex items-center justify-center'>
              <img src='/images/our-solutions-icon-1.png' alt='' />
            </div>
            <h3 className='text-xl lg:text-2xl font-bold text-emerald-900'>
              Investment
            </h3>
            <p className='max-w-lg text-lg text-emerald-900'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className='w-2/3 mx-auto md:w-full bg-white transition-all duration-300 border border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 shadow-xl'>
            <div className='flex items-center justify-center'>
              <img src='/images/our-solutions-icon-2.png' alt='' />
            </div>
            <h3 className='text-xl lg:text-2xl font-bold text-emerald-900'>
              Payouts
            </h3>
            <p className='max-w-lg text-lg text-emerald-900'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className='w-2/3 mx-auto md:w-full bg-white transition-all duration-300 border border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 shadow-xl'>
            <div className='flex items-center justify-center'>
              <img src='/images/our-solutions-icon-3.png' alt='' />
            </div>
            <h3 className='text-xl lg:text-2xl font-bold text-emerald-900'>
              Project Maturity
            </h3>
            <p className='max-w-lg text-lg text-emerald-900'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className='w-2/3 mx-auto md:w-full bg-white transition-all duration-300 border border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 shadow-xl'>
            <div className='flex items-center justify-center'>
              <img src='/images/our-solutions-icon-4.png' alt='' />
            </div>
            <h3 className='text-xl lg:text-2xl font-bold text-emerald-900'>
              Withdrawal
            </h3>
            <p className='max-w-lg text-lg text-emerald-900'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>

        <div className='flex items-center flex-col-reverse  lg:flex-row space-x-16 mt-24'>
          <img
            src='/images/app-download-img.png'
            className='w-full lg:w-1/2 mt-8 lg:mt-0 object-cover object-center'
            alt=''
          />

          <div className='w-full lg:w-1/2 space-y-8'>
            <div className='text-emerald-900 space-y-8 mt-28'>
              <h4 className='text-xl text-emerald-600 lg:text-2xl font-bold'>
                App Download
              </h4>

              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>
                Fast, Secure projects <br className='hidden lg:block' /> and
                farms
              </h1>

              <p className='text-sm sm:text-base'>
                Withdrawal from your investment before maturity, attracts <br />{' '}
                2.5% breaking fee
              </p>
            </div>

            <div className='space-y-5 text-emerald-900'>
              <div className='flex items-center space-x-3 lg:space-x-5'>
                <img src='/images/check.png' alt='' />
                <p>
                  Raise funds for your projects when you have the idea and
                  knowledge
                </p>
              </div>

              <div className='flex items-center space-x-3 lg:space-x-5'>
                <img src='/images/check.png' alt='' />
                <p>Simple few Taps to start your business</p>
              </div>

              <div className='flex items-center space-x-3 lg:space-x-5'>
                <img src='/images/check.png' alt='' />
                <p>View transaction history.</p>
              </div>

              <div className='flex items-center space-x-3 lg:space-x-5'>
                <img src='/images/check.png' alt='' />
                <p>Get instant notifications.</p>
              </div>
            </div>

            <div className='flex items-center space-x-3'>
              <button className='transition-all duration-300 hover:shadow-xl'>
                <img src='/images/GooglePlay-btn.png' alt='' />
              </button>

              <button className='transition-all duration-300 hover:shadow-xl'>
                <img src='/images/apple-btn.png' alt='' />
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* <Footer /> */}
    </div>
  )
}

export default Home
