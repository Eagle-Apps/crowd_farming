/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

// import './profile.css'

const Profile = () => {
  return (
    <div className='bg-gray-100 w-full h-screen pt-[5rem]'>
      <div className='flex rounded-lg shadow p-8 bg-white'>
        <div className='col-md-3 border-r-2 h-screen'>
          <div className='flex flex-col items-center text-center p-3 py-5'>
            <img
              className='rounded-full mt-5 w-[150px]'
              src='https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'
              alt=''
            />
            <span className='font-weight-bold'>Edogaru</span>
            <span className='text-black-50'>edogaru@mail.com.my</span>
            {/* <span> </span> */}
          </div>
        </div>
        <div className='col-md-5 border-r-2'>
          <div className='p-3 py-5'>
            <div className='flex justify-between items-center mb-3'>
              <h4 className='text-right'>Profile Settings</h4>
            </div>
            <div className='flex flex-col mt-2'>
              <div className='col-span-12'>
                <label className='labels'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='name'
                  defaultValue
                />
              </div>
              {/* <div className='col-md-6'>
                <label className='labels'>Surname</label>
                <input
                  type='text'
                  className='form-control'
                  defaultValue
                  placeholder='surname'
                />
              </div> */}
            </div>
            <div className='flex flex-col mt-3'>
              <div className='col-span-12'>
                <label className='labels'>Mobile Number</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='enter phone number'
                  defaultValue
                />
              </div>
              <div className='col-span-12'>
                <label className='labels'>Address</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='enter address'
                  defaultValue
                />
              </div>

              <div className='col-span-12'>
                <label className='labels'>Email</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='enter email '
                  defaultValue
                />
              </div>
              <div className='col-span-12'>
                <label className='labels'>User Name</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='user name'
                  defaultValue
                />
              </div>
            </div>
            <div className='flex flex-col mt-3'>
              <div className='col-span-6'>
                <label className='labels'>Country</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='country'
                  defaultValue
                />
              </div>
              <div className='col-span-6'>
                <label className='labels'>Status</label>
                <input
                  type='text'
                  className='form-control'
                  defaultValue
                  placeholder='status'
                />
              </div>
            </div>
            <div className='mt-5 text-center'>
              <button className='' type='button'>
                Save Profile
              </button>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='p-3 py-5'>
            <div className='d-flex justify-content-between align-items-center experience'>
              <span>Edit Experience</span>
              <span className='border px-3 p-1 add-experience'>
                <i className='fa fa-plus' />
                &nbsp;Experience
              </span>
            </div>
            <br />
            <div className='col-md-12'>
              <label className='labels'>Experience in Designing</label>
              <input
                type='text'
                className='form-control'
                placeholder='experience'
                defaultValue
              />
            </div>{' '}
            <br />
            <div className='col-md-12'>
              <label className='labels'>Additional Details</label>
              <input
                type='text'
                className='form-control'
                placeholder='additional details'
                defaultValue
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
