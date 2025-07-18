import React from 'react'
import logo from '../../../assets/img/logo.png'
import img from '../../../assets/img/common/modal.png'
import Modal from 'react-bootstrap/Modal';

const NewsletterModal = (props) => {
    
    return (
        <>
            <Modal
                show={props.show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter" 
                centered 
            >
                <Modal.Body className="newsleetre_modal">
                    <div className="modal-content">
                        <div className="modal-body modal1 modal-bg">
                            <div className="row">
                                <div className="col-12">
                                    <button 
                                      type="button" 
                                      className="close" 
                                      data-dismiss="modal" 
                                      aria-label="Close"
                                      onClick={props.start}
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>

                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-7 col-md-6">
                                            <div className="offer_modal_left text-center">
                                                <img src={logo} alt="FashionHive Logo"  style={{ width: '120px', height: 'auto', marginBottom: '15px' }} />
                                                <h3>SUBSCRIBE TO NEWSLETTER</h3>
                                                <p>Subscribe to the <strong>FashionHive</strong> mailing list to
                                                receive updates on new arrivals, special offers, and promotions.</p>
                                                <form 
                                                  onSubmit={(e) => { 
                                                    e.preventDefault();
                                                    props.stop();
                                                    props.start();
                                                 }}
                                                >
                                                    <div className="input-group mb-3">
                                                        <input type="email" className="form-control" placeholder="Your Email address" required />
                                                        <div className="input-group-append">
                                                            <button className="theme-btn-one btn-black-overlay btn_sm" type="submit" >Subscribe</button>
                                                        </div>
                                                    </div>
                                                    <div className="check_boxed_modal">
                                                        
                                                       <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            id="noShow"
                                                            onClick={props.stop}
                                                        />
                                                        <label htmlFor="noShow">Don't show this popup again</label>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-6">
                                            <div className="offer_modal_img d-none d-md-block">
                                                <img src={img} alt="Offer" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NewsletterModal