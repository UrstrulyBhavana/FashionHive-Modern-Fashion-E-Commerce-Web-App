import React from 'react'
import Heading from '../Fashion/Heading'
import img1 from '../../assets/img/team/team1.png'
import img2 from '../../assets/img/team/team2.png'
import img3 from '../../assets/img/team/team3.png'
import img4 from '../../assets/img/team/team4.png'

const TeamData = [
    {
        img: img1,
        name: "Ms. Sandela",
        posation: "Founder & Creative Director",
    },
    {
        img: img2,
        name: "Ms. Natasha Jain	",
        posation: "Fashion Strategist",
    },
    {
        img: img3,
        name: "Ms. Tanya Mehra",
        posation: "Visual Merchandising Lead",
    },
    {
        img: img4,
        name: "Mr. Rohan Desai",
        posation: "Operations & Fulfillment Lead",
    }
]


const Team = (props) => {
    return (
        <>
        <section id="team_area" className={`ptb-100 ${props.class}`} >
        <div className="container">
            <Heading heading="Expert Team" para="Meet the creative minds behind FashionHive" />
            <div className="row">
                {TeamData.map((data, index)=>(
                    <div className="col-lg-3" key={index}>
                    <div className="team_slider">
                        <div className="team-single">
                            <div className="team-img">
                                <img src={data.img} alt={data.name} />
                            </div>
                            <div className="team-content">
                                <h4 className="team-name font-bold">{data.name}</h4>
                                <span className="team-title">{data.posation}</span>
                               <ul className="team-social pos-absolute">
                                        <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fa fa-facebook-f"></i></a></li>
                                        <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a></li>
                                        <li><a href="https://plus.google.com" target="_blank" rel="noreferrer"><i className="fa fa-google-plus-g"></i></a></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>  
        </>
    )
}

export default Team

