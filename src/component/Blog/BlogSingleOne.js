import React from 'react'

const BlogSingleOne = props => {
  return (
    <>
      <section id="blog_single_area" className="ptb-100">
        <div className="container">
          <div className="row">
            {props.children}
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogSingleOne
