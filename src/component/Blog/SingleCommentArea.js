import React from 'react'
import user1 from '../../assets/img/user/user3.png'
import user2 from '../../assets/img/user/user1.png'
import user3 from '../../assets/img/user/user2.png'

const SingleCommentArea = () => {
  return (
    <>
      <div className="single_comment_area">
        <div className="content_title">
          <h3>(03) Comments</h3>
        </div>
        <ul className="list_none comment_list">
          <li className="comment_info">
            <div className="d-flex">
              <div className="comment_user">
                <img src={user1} alt="user1" />
              </div>
              <div className="comment_content">
                <div className="d-flex">
                  <div className="meta_data">
                    <h6><a href="#!">Aarushi Patel</a></h6>
                    <div className="comment-time">
                      MAY 15, 2025, 2:15 PM
                    </div>
                  </div>
                  <div className="ml-auto">
                    <a href="#!" className="comment-reply"><i className="ion-reply-all"></i>Reply</a>
                  </div>
                </div>
                <p>
                  Love this styling breakdown! I'm always unsure how to layer jackets with prints, but this gave me so many ideas!
                </p>
              </div>
            </div>
            <ul className="children">
              <li className="comment_info">
                <div className="d-flex">
                  <div className="comment_user">
                    <img src={user2} alt="user2" />
                  </div>
                  <div className="comment_content">
                    <div className="d-flex align-items-md-center">
                      <div className="meta_data">
                        <h6><a href="#!">Sneha Kapoor</a></h6>
                        <div className="comment-time">
                          MAY 15, 2025, 4:10 PM
                        </div>
                      </div>
                      <div className="ml-auto">
                        <a href="#!" className="comment-reply"><i className="ion-reply-all"></i>Reply</a>
                      </div>
                    </div>
                    <p>
                      Same! I've started combining chunky sneakers with bold jackets because of this blog. Love FashionHive's tips!
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="comment_info">
            <div className="d-flex">
              <div className="comment_user">
                <img src={user3} alt="user3" />
              </div>
              <div className="comment_content">
                <div className="d-flex">
                  <div className="meta_data">
                    <h6><a href="#!">Ishita Rao</a></h6>
                    <div className="comment-time">
                      MAY 16, 2025, 11:45 AM
                    </div>
                  </div>
                  <div className="ml-auto">
                    <a href="#!" className="comment-reply"><i className="ion-reply-all"></i>Reply</a>
                  </div>
                </div>
                <p>
                  This article made me rethink streetwear. The quote from Bill Cunningham really hit home. Brilliant content!
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SingleCommentArea