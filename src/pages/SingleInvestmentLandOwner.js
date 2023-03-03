import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProjectDetails2 from '../components/singlepage/project-details2'
// import ProjectBanner from '../components/singlepage/project-banner'
import ProjectDetailsContent from '../components/singlepage/project-details-content'
import ProjectCard from '../components/singlepage/project-card';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useNavigate } from "react-router-dom";


const SingleInvestmentLandOwner = () => {
  let [mainUrl] = useState("https://ndembele.onrender.com");
  const [investment, setInvestment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [amnt, setAmt] = useState(50000);
  const id = useParams();

  useEffect(() => {
    loadProject();
  }, []);

  let navigate = useNavigate();
  let routing = () => {
    // navigate(`http://localhost:3000/investment/${investment._id}`)
    // window.location.reload();
    // localStorage.removeItem("ndemAmt")
    if(loading){
      console.log("payment successful!!!!");
      setLoading(false)
    }else{
      setLoading(false)
      console.log("hererere!!!!");
    }     
  };
  // console.log(amnt)

  const config = {
    public_key: 'FLWPUBK_TEST-21cc0116b2bd6553bc6a06119aa2c3c2-X',
    tx_ref: Date.now(),
    amount: Number(localStorage.getItem("ndemAmt")),
    // amount: Number(amnt),
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'nuhuahmed365@gmail.com',
      phone_number: '08066981697',
      name: 'nuhu ahmed',
    },
    customizations: {
      title: `Payment for Investment on Ndembele (${investment?.title})`,
      description: `Payment for Investment ${investment?.title}`,
      logo: 'https://ndembele-admin.vercel.app/static/media/NDEMBELE1.dcd65b71.png',
    },
    redirect_url: `http://localhost:3000/investment/${investment?._id}`
  };

  let handleFlutterPayment = useFlutterwave(config);
  // console.log(config)

  let loadProject = () => {
    let url = mainUrl + '/investment/' + id.id;
    fetch(url)
      .then((e) => e.json())
      .then((res) => {
        setInvestment(res)
      });
  };

  let subscribe = (e) => {
    let startPayment = window.confirm("Are you sure?")
    if (startPayment) {
      handleFlutterPayment({
        callback: (response) => {
          console.log(response);
          console.log("payment successful");
          setLoading(true)
          closePaymentModal() // this will close the modal programmatically
        },
        onClose: () => { routing() }
      });
      // handleFlutterPayment()
    }
  };

  return (
    <>
      <div>
        {/* <ProjectBanner /> */}

        <ProjectDetails2
          images={investment?.images[0]}
          title={investment?.title}
          budget={investment?.budget}
          roi={investment?.roi}
          days={investment?.day}
          // modal={showModals}
          pay={() => { setAmt(Number(localStorage.getItem("ndemAmt"))); subscribe() }}
        />
        <ProjectDetailsContent />
        <ProjectCard />
      </div>

      {/* {investments && (
        <div>
          <ProjectBanner />
          <ProjectDetails />
        </div>
      )} */}

      {/* {investments !== {} ? (
        <div>
          <ProjectBanner investments={investments} />
        </div>
      ) : (
        <div>Loading...</div>
      )} */}
      {/* <div className=''> */}
      {/* <p className='text-red-500'>Hello</p>
      <h1>Details About User {_id}</h1> */}
      {/* <ProjectBanner />
      <ProjectDetails /> */}
      {/* <ProjectDetails />
      <ProjectDetailsContent />
      <ProjectCard /> */}
      {/* </div> */}
    </>
  )
};

export default SingleInvestmentLandOwner;
