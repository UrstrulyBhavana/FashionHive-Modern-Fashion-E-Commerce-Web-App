import React, { useState } from 'react';
import Swal from 'sweetalert2';

const CommentForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire('Success', 'Thank you for your Comment', 'success');

    setFormData({
      name: '',
      email: '',
      website: '',
      message: ''
    });
  };

  return (
    <>
      <div className="comment_replay_box">
        <div className="content_title">
          <h3>Write a comment</h3>
        </div>
        <form className="field_form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-md-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Your Name"
                required
                type="text"
              />
            </div>
            <div className="form-group col-md-4">
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Your Email"
                required
                type="email"
              />
            </div>
            <div className="form-group col-md-4">
              <input
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="form-control"
                placeholder="Your Website"
                required
                type="text"
              />
            </div>
            <div className="form-group col-md-12">
              <textarea
                rows="3"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                placeholder="Your Comment"
                required
              ></textarea>
            </div>

            <div className="form-group col-md-12">
              <button
                value="Submit"
                name="submit"
                className="theme-btn-one btn_md btn-black-overlay"
                title="Submit Your Message!"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default CommentForm
