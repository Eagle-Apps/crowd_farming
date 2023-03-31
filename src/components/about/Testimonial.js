/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const Testimonial = () => {
  return (
    <section className='testimonials-area'>
      <div className='container'>
        <div className='justify-content-center row'>
          <div className='col-lg-6'>
            <div className='section-title text-center'>
              <span>Our Testimonials</span>
              <h3 className='title'>What They Say</h3>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='testimonials-slide'>
              <div className='swiper swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events swiper-watch-progress swiper-backface-hidden'>
                <div
                  className='swiper-wrapper'
                  style={{ transitionDuration: '0ms' }}
                >
                  <div
                    className='swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active'
                    data-swiper-slide-index={1}
                    style={{
                      width: 1176,
                      transitionDuration: '0ms',
                      opacity: 1,
                      transform: 'translate3d(0px, 0px, 0px)',
                    }}
                  >
                    <div className='testimonials-box mt-10'>
                      <div className='row'>
                        <div className='col-lg-7'>
                          <div className='testimonials-content'>
                            <h4 className='title'>Sarah Albert</h4>
                            <p>
                              There are many variations of available, but the
                              majority have sufferd in some form by injected or
                              randomised words which don't look even believable.
                              If you are to lorem ipsum is simply going to use a
                              passage.
                            </p>
                          </div>
                        </div>
                        <div className='col-lg-5'>
                          <div className='testimonials-thumb text-right'>
                            <img
                              src='assets/testimonials-thumb-2.570fc479.jpg'
                              alt=''
                            />
                            <div className='quote'>
                              <i className='flaticon-left-quotes-sign' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='swiper-slide swiper-slide-prev swiper-slide-duplicate-next'
                    data-swiper-slide-index={0}
                    style={{
                      width: 1176,
                      transitionDuration: '0ms',
                      opacity: 1,
                      transform: 'translate3d(-1176px, 0px, 0px)',
                    }}
                  >
                    <div className='testimonials-box mt-30'>
                      <div className='row'>
                        <div className='col-lg-7'>
                          <div className='testimonials-content'>
                            <h4 className='title'>Mike Hardson</h4>
                            <p>
                              There are many variations of available, but the
                              majority have sufferd in some form by injected or
                              randomised words which don't look even believable.
                              If you are to lorem ipsum is simply going to use a
                              passage.
                            </p>
                          </div>
                        </div>
                        <div className='col-lg-5'>
                          <div className='testimonials-thumb text-right'>
                            <img
                              src='assets/testimonials-thumb.6b6abca3.jpg'
                              alt=''
                            />
                            <div className='quote'>
                              <i className='flaticon-left-quotes-sign' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='swiper-slide swiper-slide-visible swiper-slide-active'
                    data-swiper-slide-index={1}
                    style={{
                      width: 1176,
                      transitionDuration: '0ms',
                      opacity: 1,
                      transform: 'translate3d(-2352px, 0px, 0px)',
                    }}
                  >
                    <div className='testimonials-box mt-30'>
                      <div className='row'>
                        <div className='col-lg-7'>
                          <div className='testimonials-content'>
                            <h4 className='title'>Sarah Albert</h4>
                            <p>
                              There are many variations of available, but the
                              majority have sufferd in some form by injected or
                              randomised words which don't look even believable.
                              If you are to lorem ipsum is simply going to use a
                              passage.
                            </p>
                          </div>
                        </div>
                        <div className='col-lg-5'>
                          <div className='testimonials-thumb text-right'>
                            <img src='assets/testimonials-thumb-2.570fc479.jpg' />
                            <div className='quote'>
                              <i className='flaticon-left-quotes-sign' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev'
                    data-swiper-slide-index={0}
                    style={{
                      width: 1176,
                      transitionDuration: '0ms',
                      opacity: 0,
                      transform: 'translate3d(-3528px, 0px, 0px)',
                    }}
                  >
                    <div className='testimonials-box mt-30'>
                      <div className='row'>
                        <div className='col-lg-7'>
                          <div className='testimonials-content'>
                            <h4 className='title'>Mike Hardson</h4>
                            <p>
                              There are many variations of available, but the
                              majority have sufferd in some form by injected or
                              randomised words which don't look even believable.
                              If you are to lorem ipsum is simply going to use a
                              passage.
                            </p>
                          </div>
                        </div>
                        <div className='col-lg-5'>
                          <div className='testimonials-thumb text-right'>
                            <img
                              src='assets/testimonials-thumb.6b6abca3.jpg'
                              alt=''
                            />
                            <div className='quote'>
                              <i className='flaticon-left-quotes-sign' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <span
                    className='prev slick-arrow'
                    id='main-slider__swiper-button-prev'
                  >
                    <i className='flaticon-back' />
                  </span>
                  <div
                    className='next slick-arrow'
                    id='main-slider__swiper-button-next'
                  >
                    <i className='flaticon-next' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
