import React, { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Comments from './tabs/Comments'
import Faq from './tabs/Faq'
import StoryContent from './tabs/StoryContent'
import Updates from './tabs/Updates'
import { useParams } from 'react-router-dom'

const ProjectDetailsContent = () => {
  const id = useParams();
  let [msg, setMsg] = useState("");
  let [message, setMessage] = useState("");
  let [progress, setProgress] = useState("");
  let [err, setErr] = useState("");
  let [forum, setForum] = useState([]);
  let [report, setReport] = useState([]);
  let [baseUrl] = useState("https://ndembele.onrender.com");

  useEffect(() => {
    loadForum();
    loadReport();
  }, [message, msg, progress]);

  let postToForum = () => {
    let data = { message, investment_id: id.id, userId: "63eb7225897661c94b852976" }
    let url = baseUrl + "/forum";
    fetch(url, {
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(e => e.json())
      .then(result => {
        setErr(result.msg)
      })
    setMessage("")
  };

  let postReport = () => {
    let data = { message: msg, progress, investment_id: id.id, userId: "63eb7225897661c94b852976" }
    let url = baseUrl + "/report";
    fetch(url, {
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(e => e.json())
      .then(result => {
        setErr(result.msg)
      })
    setMsg("")
    setProgress("")
  };

  let loadForum = () => {
    let url = baseUrl + '/forums/' + id.id;
    fetch(url)
      .then((e) => e.json())
      .then((res) => {
        setForum(res)
      });
  };

  let loadReport = () => {
    let url = baseUrl + '/reports/' + id.id;
    fetch(url)
      .then((e) => e.json())
      .then((res) => {
        setReport(res)
      });
  };


  return (
    <section className='project-details-content-area pb-110 '>
      <div className='container'>
        <div className='justify-content-center row'>

          <div className='col-lg-8'>
            <Tabs
              defaultActiveKey='story'
              id='pills-tab '
              className='tab-content'
            >
              {/* <ul className='nav nav-pills' id='pills-tab' role='tablist'> */}
              <Tab
                eventKey='story'
                title='Story'
                className='nav-item'
                role='tab'
              >
                <StoryContent />
              </Tab>
              <Tab eventKey='faqs' title='FAQS' role='tab'>
                <Faq />
              </Tab>
              <Tab eventKey='updates' title='UPDATES'>
                <Updates />
              </Tab>
              <Tab eventKey='comments' title='COMMENTS' role='tab'>
                <Comments />
              </Tab>
            </Tabs>
            <div className='tab-content' id='pills-tabContent'></div>
          </div>


          <div className='col-lg-4 col-md-7 col-sm-9'>
            {/* forum */}
            <div className='my-4 p-4' style={{ background: "whitesmoke" }}>
              <h6 id="project-review-ah">Forum</h6>
              <p>{err}</p>
              <div className="post-forum-ah">
                <input required type="text" placeholder="Type here to post to forum" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button onClick={() => postToForum()}>
                  Send
                </button>
              </div>

              <div className="forum-msgs-ah mt-4 me-2 px-2 py-2" style={{ minHeight: "300px", maxHeight: "300px", overflowY: "scroll" }}>
                {forum.length >> 0 ? forum.map((e, i) => {
                  return <>
                    <section className='px-3 mb-2' style={{ background: "whitesmoke" }}>
                      <div className="forum-msgs-header-ah">
                        <div className="flex" style={{ alignItems: "center" }}>
                          <h6>{e.userId.userName}</h6>
                        </div>
                        <p>{new Date(e.createdAt).toDateString()}</p>
                      </div>
                      <div className="forum-msgs-body-ah">
                        <p>{e.message}</p>
                      </div>
                    </section></>
                }) : <div>No Comment Yet</div>}
              </div>
            </div>

            {/* report */}
            <div className='my-4 p-4' style={{ background: "whitesmoke" }}>
              <h6 id="project-review-ah" style={{ textAlign: "center" }}>Report</h6>
              <p>{err}</p>
              <div className="post-forum-ah" id='reportBtn' style={{ height: "fit-content" }}>
                <div>
                  <input required style={{ height: "40px", marginBottom: "10px" }} type="text" placeholder="Type Report Message Here" value={msg} onChange={(e) => setMsg(e.target.value)} />
                  <input required style={{ height: "40px" }} type="text" placeholder="Enter Progress" value={progress} onChange={(e) => setProgress(e.target.value)} />
                  <button style={{ height: "40px", marginTop: "10px" }} onClick={() => postReport()}>
                    Send
                  </button>
                </div>

              </div>

              <div className="forum-msgs-ah mt-4 me-2 px-2 py-2" style={{ minHeight: "300px", maxHeight: "300px", overflowY: "scroll" }}>
                {report.length >> 0 ? report.map((e, i) => {
                  return <>
                    <section className='px-3 mb-2' style={{ background: "whitesmoke" }}>
                      <div className="forum-msgs-header-ah">
                        <div className="flex" style={{ alignItems: "center" }}>
                          <h5>Progress: {e.progress}</h5>
                        </div>
                        <p>{new Date(e.createdAt).toDateString()}</p>
                      </div>
                      <div className="forum-msgs-body-ah">
                        <p>{e.message}</p>
                      </div>
                    </section>
                    
                    </>
                }) : <div>No Report Yet</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetailsContent
