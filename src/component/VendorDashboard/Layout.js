import React from 'react'
import SideBar from './SideBar'

const Layout = (props) => {
    return (
        <>
        <section id="vendor_area" className="ptb-100">
        <div className="container">
            <div className="row">
                <SideBar/>
                <div className="col-sm-12 col-md-12 col-lg-9">
                    <div className="tab-content dashboard_content">
                        <div className="tab-pane fade show active" >
                          {props.children}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Layout
