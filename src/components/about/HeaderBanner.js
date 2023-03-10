import React from 'react'
import { Container } from '../../utils/utils'

const HeaderBanner = () => {
  return (
    <section className='h-[40rem] w-full overflow-hidden bg-[#f2f3f9] wow fadeInUp'>
    <div
      className='relative bg-cover bg-no-repeat bg-white/5 bg-[top_95px_right] md:bg-[top_45px_right] lg:bg-[top_75px_right]'
      style={{ backgroundImage: "url('/images/aboutbanner.jpg')" }}
    >
      <div className='pt-[150px] pb-[250px] xl:pb-[200px]'>
        <Container className='pt-5 flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-4 lg:space-x-0 lg:justify-between relative z-10'>
          <div className='mt-[8rem]'>
           
            <h1 className='text-5xl lg:text-6xl xl:text-7xl font-bold text-emerald-100'>
              About Us
            </h1>
          </div>
        </Container>
      </div>
    </div>
  </section>
  )
}

export default HeaderBanner
