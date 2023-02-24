import React from 'react'

const StartProject = () => {
  return (
    <section
      className='together-area bg_cover together-3-area'
      style={{
        // backgroundImage: 'url("/_next/static/media/together-bg.283a502c.jpg")',
        backgroundImage: 'url("./assets/work.jpg")',
      }}
    >
      <div className='container'>
        <div className='justify-content-center row'>
          <div className='col-lg-10'>
            <div className='together-content text-center'>
              <span>World is Full with Creativity</span>
              <h3 className='title'>
                Together We can Bring More Creativity into the World
              </h3>
              <a
                href='https://krowd-nextjs.vercel.app/single-project'
                className='main-btn'
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StartProject
