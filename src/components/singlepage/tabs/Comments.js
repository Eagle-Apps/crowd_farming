import React from 'react'

const Comments = () => {
  return (
   <div className="tab-pane animated" id="pills-4" role="tabpanel">
  <div className="comment-one mt-50">
    <h3 className="comment-one__block-title">2 Comments</h3>
    <div className="comment-one__single">
      <div className="comment-one__image">
        <img src="/assets/comment-2.2.e62f4322.jpg" alt className />
      </div>
      <div className="comment-one__content">
        <h3>
          Kevin Martin
          <span className="comment-one__date">
            3 March, 2020</span>
        </h3>
        <p>
          Lorem Ipsum is simply dummy text of the rinting and
          typesetting been the industry standard dummy text
          ever sincer condimentum purus. In non ex at ligula
          fringilla lobortis.
        </p>
      </div>
      <div className="blog-btn">
        <a href="https://krowd-nextjs.vercel.app/single-project#" className="main-btn">Reply</a>
      </div>
    </div>
    <div className="comment-one__single">
      <div className="comment-one__image">
        <img src="/assets/comment-2.1.e9c6ad7a.jpg" alt className />
      </div>
      <div className="comment-one__content">
        <h3>
          Sarah albert
          <span className="comment-one__date">
            3 March, 2020</span>
        </h3>
        <p>
          Lorem Ipsum is simply dummy text of the rinting and
          typesetting been the industry standard dummy text
          ever sincer condimentum purus. In non ex at ligula
          fringilla lobortis.
        </p>
      </div>
      <div className="blog-btn">
        <a href="https://krowd-nextjs.vercel.app/single-project#" className="main-btn">Reply</a>
      </div>
    </div>
  </div>
  <div className="comment-form me-1">
    <h3 className="comment-one__block-title">Leave a Comment</h3>
    <form className="contact-one__form">
      <div className="row">
        <div className="col-lg-6">
          <div className="input-box">
            <input type="text" placeholder="Name" name="name" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="input-box">
            <input type="text" placeholder="Email" name="email" />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="input-box">
            <textarea placeholder="Write Comment" name="message" data-gramm="false" wt-ignore-input="true" defaultValue={""} />
          </div>
        </div>
        <div className="text-left col-lg-12">
          <div className="input-box">
            <button type="submit" className="main-btn">
              Submit comment
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>

  )
}

export default Comments