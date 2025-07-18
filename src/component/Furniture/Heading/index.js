import React from 'react'

const Heading = (props) => {
    
    return (
        <>
             <div className="row">
                <div className="col-lg-12">
                    <div className="center_heading_two">
                        <h2>{props.heading}</h2>
                        <span className="heading_border"></span>
                        <p style={{ marginTop: "15px" }}>{props.para}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Heading
