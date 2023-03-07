/* eslint-disable jsx-a11y/alt-text */
// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import myAxios from '../../utils/token'
import CardSkeleton from '../../utils/card-Skeleton'
import { Link } from 'react-router-dom'

// import './profile.css'

const Profile = () => {
  // const [userData, setUserData] = useState()
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState()
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [userName, setUserName] = useState('')
  const [userActive, setUserActive] = useState('')
  const [commitment, setCommitment] = useState('')
  const [project, setProject] = useState('')
  const [invests, setInvests] = useState([])
  const [farms, setFarms] = useState([])
  // const [farmId, setFarmId] = useState([])

  const userData = () => {
    myAxios('/user')
      .then((user) => {
        setName(user.data.name)
        setPhone(user.data.phone)
        setEmail(user.data.email)
        setAddress(user.data.address)
        setUserName(user.data.userName)
        setUserActive(user.data.status)
        // setUserData(user.data)
        // console.log(user.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const subscribeUser = () => {
    myAxios('/subscribe-user')
      .then((userSubs) => {
        setCommitment(userSubs.data.map((user) => user.commitment))
        setProject(userSubs.data.map((user) => user.investmentId.title))
        // console.log(userSubs.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const investmentsUser = () => {
    myAxios('/investments-user')
      .then((investUser) => {
        setInvests(investUser.data.map((user) => user))
        // setInvestId(investUser.data.map((userId) => userId._id))

        console.log(investUser.data.map((user) => user))

        // console.log('InvestUser', investUser.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const farmsUser = () => {
    myAxios('/farms-user')
      .then((farmUser) => {
        setFarms(farmUser.data.map((user) => user))
        // setFarmId(farmUser.data.map((userId) => userId._id))

        // console.log(
        //   'FarmUser',
        //   farmUser.data.map((user) => user)
        // )

        // console.log('farmUser', farmUser.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    setLoading(true)
    userData()
    subscribeUser()
    investmentsUser()
    farmsUser()
  }, [])

  // console.log(userData)

  // myAxios('/user').then((user) => {
  //   setUserData((user.data);
  //   console.log(user.data);
  // })
  //   .catch(error => {
  //     console.log(error);
  //   })

  return (
    <div className='bg-gray-100 w-full h-screen pt-[5rem]'>
      {loading ? (
        <CardSkeleton />
      ) : (
        <div className='flex rounded-lg shadow p-8 bg-white'>
          <div className='col-md-3 border-r-2 h-screen'>
            <div className='flex flex-col items-center text-center p-3 py-5'>
              <img
                className='rounded-full mt-5 w-[150px]'
                src='https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'
                alt=''
              />
              <span className='font-weight-bold'>{name}</span>
              <span className='text-black-50'>{email}</span>
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
                    onChange={(e) => setName(e.target.value)}
                    type='text'
                    className='form-control'
                    value={name}
                    disabled
                  />
                </div>
              </div>
              <div className='flex flex-col mt-3'>
                <div className='col-span-12'>
                  <label className='labels'>Mobile Number</label>
                  <input
                    type='text'
                    className='form-control'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled
                  />
                </div>
                <div className='col-span-12'>
                  <label className='labels'>Address</label>
                  <input
                    type='text'
                    className='form-control'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    disabled
                  />
                </div>

                <div className='col-span-12'>
                  <label className='labels'>Email</label>
                  <input
                    type='text'
                    className='form-control'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled
                  />
                </div>
                <div className='col-span-12'>
                  <label className='labels'>User Name</label>
                  <input
                    type='text'
                    className='form-control'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    disabled
                  />
                </div>
              </div>
              <div className='flex flex-col mt-3'>
                {/* <div className='col-span-6'>
                  <label className='labels'>Country</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='country'
                    defaultValue
                  />
                </div> */}

                <div className='col-span-6'>
                  <label className='labels'>Status</label>
                  <input
                    type='text'
                    className='form-control'
                    value={userActive}
                    onChange={(e) => setUserActive(e.target.value)}
                    disabled
                  />
                </div>
              </div>
              {/* <div className='mt-5 text-center'>
                <button className='' type='button'>
                  Save Profile
                </button>
              </div> */}
            </div>
          </div>
          <div className='col-md-4'>
            <div className='p-3 py-5'>
              <div className='d-flex justify-content-between align-items-center experience'>
                {/* <span>Edit Experience</span> */}
                <span className='border px-3 p-1 add-experience'>
                  <i className='fa fa-plus' />
                  &nbsp; Subscribe Project
                </span>
              </div>
              <br />
              <div className='col-md-12'>
                <label className='labels'>Commitment</label>
                <input
                  type='text'
                  className='form-control'
                  value={commitment}
                  onChange={(e) => setCommitment(e.target.value)}
                  disabled
                />
              </div>
              <br />
              <div className='col-md-12'>
                <label className='labels'>Name Of Project</label>
                <input
                  type='text'
                  className='form-control'
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  disabled
                />
              </div>
            </div>

            <div className='p-3 py-5'>
              <div className='d-flex justify-content-between align-items-center experience'>
                {/* <span>Edit Experience</span> */}
                {/* <Link to={`/investment/${investId}`} key={investId}> */}
                  <span className='border px-3 p-1 add-experience cursor-pointer'>
                    <i className='fa fa-plus' />
                    &nbsp; View Investment
                  </span>
                {/* </Link> */}
              </div>
              <br />
              <div className='col-md-12'>
                <label className='labels'>Investment Name</label>
                {/* <input
                  type='text'
                  className='form-control'
                  value={invests}
                  onChange={(e) => setInvests(e.target.value)}
                  disabled
                /> */}
                <ul value={invests}>
                  {invests?.map((invest) => (
                    <Link to={`/investment/${invest._id}`} key={invest._id}>
                      <li className='cursor-pointer'>{invest.title}</li>
                    </Link>
                  ))}
                </ul>
              </div>
              <br />
            </div>

            <div className='p-3 py-5'>
              <div className='d-flex justify-content-between align-items-center experience'>
                <span className='border px-3 p-1 add-experience cursor-pointer'>
                  <i className='fa fa-plus' />
                  &nbsp; View Fram
                </span>
              </div>
              <br />
              <div className='col-md-12'>
                <label className='labels'>Farm Name</label>
                {/* <input
                  type='text'
                  className='form-control'
                  value={farms}
                  onChange={(e) => setFarms(e.target.value)}
                  disabled
                /> */}
                <ul value={farms}>
                  {farms?.map((farm) => (
                    <Link to={`/farm/${farm._id}`} key={farm._id}>
                      <li className='cursor-pointer'>{farm.name}</li>
                    </Link>
                  ))}
                </ul>
              </div>
              <br />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
