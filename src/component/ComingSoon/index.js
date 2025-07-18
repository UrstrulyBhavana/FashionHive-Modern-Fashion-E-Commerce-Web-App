import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import logo from '../../assets/img/logo-white.png'
import comingSoonBG from '../../assets/img/common/coming-soon.jpg';

const ComingSoonArea = () => {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')
    const [email, setEmail] = useState('');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('October 19 2025 00:00:00').getTime();

        interval.current = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            if (distance < 0) {
                clearInterval(interval.current);
            } else {

                const days = Math.floor(distance / (1000 * 60 * 60 * 24))
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    }

       useEffect(() => {
        startTimer();
        return () => clearInterval(interval.current);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire('Success', 'Thank you for your subscription', 'success');
        setEmail('');
    };

    return (
        <>
            <section id="coming_soon_area" className="ptb-100" style={{
                backgroundImage: `url(${comingSoonBG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="coming_soon_content">
                                <Link to="/"><img src={logo} alt="FashionHive Logo" style={{ borderRadius: "12px", boxShadow: "0px 0px 6px 1px #0000001c" }} /></Link>
                                <div className="coming_soon_title">
                                    <h2>We Are Coming Soon</h2>
                                    <p>Our new website is launching soon! Stay tuned for updates and exclusive offers from FashionHive.</p>
                                </div>
                                <div className="coming_soon_time">
                                    <div id="countdown_soon">
                                        <ul>
                                            <li><span>{timerDays}</span>Days</li>
                                            <li><span>{timerHours}</span>Hours</li>
                                            <li><span>{timerMinutes}</span>Minutes</li>
                                            <li><span>{timerSeconds}</span>Seconds</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="coming_soon_newsletter" style={{ marginBottom: "80px" }}>
                                    <h3>Subscribe for our next update</h3>
                                    <form onSubmit={handleSubmit}>
                                        <div className="input-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Your Email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <button className="theme-btn-one btn-black-overlay btn_md">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ComingSoonArea