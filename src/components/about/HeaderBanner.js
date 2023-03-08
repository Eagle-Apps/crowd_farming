import React from 'react'

const HeaderBanner = () => {
  return (
    <section>
      <div className='relative max-h-[500px]'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl text-emerald-100 sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            About <span>Us</span>
          </h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            {/* <span className='text-orange-500'>New </span> Oil */}
          </h1>
        </div>
        <img
          className='w-full max-h-[500px] object-cover'
          // src='https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          src='./images/aboutbanner.jpg'
          alt=''
        />
      </div>
    </section>
  )
}

export default HeaderBanner
