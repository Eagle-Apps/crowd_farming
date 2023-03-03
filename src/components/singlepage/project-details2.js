import React, { useState } from 'react'
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineWhatsApp,
} from 'react-icons/ai'

const ProjectDetails2 = (props) => {

  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState(50000);
  const icons = [
    { icon: AiFillFacebook, share: "https://www.facebook.com/sharer.php?u=" },
    // { icon: AiFillInstagram, share: "https://instagram.com/sharer.php?u=" },
    { icon: AiFillTwitterCircle, share: "https://twitter.com/intent/tweet/?url=" },
    { icon: AiOutlineWhatsApp, share: "https://wa.me/?text=" }
  ];

  const URL = window.location.href.slice(7);

  return (<>

    <section className='project-details-area pt-120 pb-190'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7'>
            <div className='project-details-thumb'>
              <img
                // src='/assets/single-project-thumb.2959a928.jpg'
                src={props.images}
                alt={props.title}
                className='h-[85vh]'
              />
              <div className='icon'>
                <i className='fa fa-heart' />
              </div>
            </div>
          </div>
          <div className='col-lg-5'>
            <div className='project-details-content'>
              <div className='details-btn'>
                <span style={{ cursor: "pointer" }} onClick={() => setShowModal(true)}>Invest</span>
                <div className='flag'>
                  <img src='/assets/flag.3de87ccd.png' alt='' className='' />
                  <p>Nigeria</p>
                </div>
              </div>
              <h3 className='title'>{props.title}</h3>
              <div className='project-details-item'>
                <div className='item text-center'>
                  <h5 className='title'>${props.budget}</h5>
                  <span>Budget</span>
                </div>
                <div className='item text-center'>
                  <h5 className='title'>{props.roi}</h5>
                  <span>ROI</span>
                </div>
                <div className='item text-center'>
                  <h5 className='title'>{props.days}</h5>
                  <span>Days Left</span>
                </div>
              </div>
              <div className='projects-range'>
                <div className='projects-range-content'>
                  <ul>
                    <li>Progress:</li>
                    <li>50%</li>
                  </ul>
                  <div className='range' />
                </div>
              </div>
              <div className='projects-goal'>
                <span>
                  Goal: <span>3600.00 USD</span>
                </span>
              </div>
              {/* <div className='project-btn mt-25'>
                <a
                  className='main-btn'
                  href='https://krowd-nextjs.vercel.app/single-project#'
                >
                  Back this project
                </a>
              </div> */}
              <div className='project-share d-flex align-items-center'>
                <span>Share this Project</span>
                <ul>
                  {icons.map((Icon, ind) => (
                    <li key={ind}>
                      {/* <a href='https://krowd-nextjs.vercel.app/single-project#'> */}
                      <a href={Icon.share + URL}>
                        <Icon.icon />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    {showModal ? (
      <>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                <h3>
                  Invest in {props.title}
                </h3>
              </div>
              {/*body*/}
              <div className="relative p-3 flex-auto">
                <form className="bg-green-200 p-3">
                  <input min="50000" required value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder='Enter amount to invest' className='w-100 border-black bg-green-200' />
                </form>
                <p className='pt-3 text-xl text-red-600'>Minimum amount to invest is 50,000</p>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => { setShowModal(false); setAmount(50000) }}
                >
                  Cancel
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={async () => { await localStorage.setItem("ndemAmt", amount); props.pay(); }}
                >
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null
    }
  </>
  )
}

export default ProjectDetails2;
