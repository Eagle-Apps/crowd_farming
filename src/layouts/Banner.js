import { Link } from 'react-router-dom'

import TransferForm from '../components/TransferForm'
import { Container } from '../utils/utils'
// import { checkUser } from '../helpers'

const Banner = () => {
  return (
    <section className='w-full overflow-hidden bg-[#f2f3f9] wow fadeInUp'>
      <div
        className='relative bg-cover bg-no-repeat bg-white/5 bg-[top_95px_right] md:bg-[top_45px_right] lg:bg-[top_75px_right]'
        style={{ backgroundImage: "url('/images/Homebanner.jpg')" }}
      >
        <div>
          <img
            className='w-[25%] lg:w-[20%] xl:max-w-full h-auto align-middle absolute left-0 bottom-[5%] animate-ripple2'
            src='/images/banner-box.png'
            alt=''
          />
          <img
            className='hidden md:block w-[25%] lg:w-[15%] xl:w-[19%] h-auto align-middle absolute top-0 left-0'
            src='/images/banner-clock.png'
            alt=''
          />
          <img
            className='w-[10%] xl:w-[13%] h-auto align-middle absolute left-[calc(48%)] bottom-[12%] animate-ripple2'
            src='/images/banner-rocket.png'
            alt=''
          />
          <img
            className='block w-[10%] xl:w-[15.5%] h-auto align-middle absolute right-0 bottom-[calc(5%)] animate-ripple'
            src='/images/banner-human.png'
            alt=''
          />
        </div>
        

        <div className='pt-[150px] pb-[250px] xl:pb-[200px]'>
          <Container className='pt-5 flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-4 lg:space-x-0 lg:justify-between relative z-10'>
            <img
              src='/images/banner-wallet.png'
              className='hidden lg:block lg:w-[11%] absolute top-[3%] left-[47%] xl:left-[54%] animate-ripple'
              alt=''
            />
            <div>
              <h5 className='font-bold lg:text-xl xl:text-2xl text-[#0f7508] mb-3'>
                Join over 1million investors
              </h5>
              <h1 className='text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0f7508]'>
                Invest,
                <br /> Wait, Cashout.
              </h1>
              <p className='lg:text-2xl xl:text-2xl text-emerald-900 my-8'>
                Agriculture is fundamental to every Countries
                <br className='hidden md:block xl:hidden' /> prosperity
                <br className='hidden md:block xl:block' /> Security and
                sovereignty. <br className='hidden md:block xl:hidden' /> Be a
                part of this liberation <br className='hidden xl:block' /> by
                investing in an agricultural
                <br className='hidden md:block xl:hidden' /> project near you.
              </p>

              <div className='flex items-center space-x-4'>
                {/* {!checkUser() && ( */}
                <Link
                  to='/register'
                  className='lg:text-lg truncate transition-all duration-300 px-3 lg:px-4 xl:px-8 font-bold py-3 bg-[#0f7508] text-white rounded-md focus:outline-none hover:bg-[#bf9000] focus:ring focus:border-emerald-500 focus:ring-emerald-500/50'
                >
                  Open a Free Account
                </Link>
                {/* )} */}

                <Link
                  to='/about'
                  className='lg:text-lg truncate transition-all duration-300 px-3 lg:px-4 xl:px-8 font-bold py-3 text-[#0f7508] border border-emerald-900 rounded-md focus:outline-none hover:text-white hover:bg-[#bf9000] focus:ring focus:border-emerald-500 focus:ring-emerald-500/50'
                >
                  See How it Works
                </Link>
              </div>
            </div>

            <div className=' bg-white border border-gray-100 rounded-lg shadow-xl p-4 md:p-5 w-full md:w-1/2 lg:w-[40%] xl:w-[33%]'>
              <div className='space-y-8 lg:space-y-10'>
                <TransferForm />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  )
}

export default Banner
