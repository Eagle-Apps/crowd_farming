import React from 'react'

const ProjectBanner = () => {
  return (
    <section
    // className=''
    // style={{
    //   backgroundImage: 'url("/assets/project-updates-thumb-1.59d86419.jpg")',
    // }}
    >
      <div className='relative max-h-[500px]'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center'>
            Single <span className='text-emerald-500'>Page</span>
          </h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
            <span className='text-orange-500'>New </span> Oil
          </h1>
        </div>
        <img
          className='w-full max-h-[500px] object-cover'
          src='https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='/'
        />
      </div>
      {/* <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='page-title-content'>
              <h3 className='title'>Single Project</h3>
              <nav aria-label='breadcrumb'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <a href='https://krowd-nextjs.vercel.app/'>Home</a>
                  </li>
                  <li className='breadcrumb-item active' aria-current='page'>
                    Explore
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default ProjectBanner
