import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProjectDetails2 from '../components/singlepage/project-details2'
import ProjectDetailsContent from '../components/singlepage/project-details-content'
import ProjectCard from '../components/singlepage/project-card';


const SingleInvestmentLandOwner = () => {
  let [mainUrl] = useState("https://ndembele.onrender.com");
  const [investment, setInvestment] = useState(null);
  const [user, setUser] = useState({});
  const id = useParams();
  let [hide, setHide] = useState("none");

  useEffect(() => {
    loadProject();
    loadUser();
  }, [user]);


  let loadProject = () => {
    let url = mainUrl + '/investment/' + id.id;
    fetch(url)
      .then((e) => e.json())
      .then((res) => {
        if (res.ownerId === user._id) {
          setHide("flex")
        } else {
          setHide("none")
        }
        setInvestment(res)
      });
  };

  let loadUser = () => {
    let url = mainUrl + '/user';
    fetch(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("ndembeleAccess")}`
      }
    })
      .then((e) => e.json())
      .then((res) => {
        if (res.msg === "Unauthorized User" || res.msg === "Invalid Authentication." || res.status === 400) {
          updateAccessToken()
        } else {
          setUser(res)
        }
      });
  };

  let updateAccessToken = () => {
    let token = localStorage.getItem("ndembeleRefresh")
    let url = mainUrl + "/refresh";
    fetch(url, {
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ token })
    })
      .then(e => e.json())
      .then(result => {
        if (result.msg === "Access token created successfully") {
          localStorage.setItem('ndembeleAccess', result.accessToken)
          loadUser()
        }
      })
  };

  return (
    <>
      <div>
        <ProjectDetails2
          images={investment?.images[0]}
          title={investment?.title}
          budget={investment?.budget}
          roi={investment?.roi}
          days={investment?.duration}
          progress={investment?.progress}
          left={investment?.available}
        />
        <ProjectDetailsContent
          hide={hide}
        />
        <ProjectCard />
      </div>
    </>
  )
};

export default SingleInvestmentLandOwner;
