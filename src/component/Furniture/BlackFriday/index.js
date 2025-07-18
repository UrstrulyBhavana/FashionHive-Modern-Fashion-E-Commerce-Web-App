import React, { useEffect ,useRef ,useState} from 'react'
import img from '../../../assets/img/furniture/common/offer-time.png'
import img1 from '../../../assets/img/furniture/common/black.png'

    
const BlackFriday = () => {

    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef();

    const startTimer = () =>{

        const countdownDate = new Date('December 29, 2025 00:00:00').getTime();

           interval.current = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60* 24))
            const hours = Math.floor((distance % (1000 * 60 * 60* 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(distance < 0){
                clearInterval(interval.current);
            } else {
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

    return (
        <>
            <section id="offer_timer_two">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-12">
                            <div className="offer_time_img_two">
                                <img src={img} alt="img" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-12">
                            <div className="offer_time_two_Content">
                                <img src={img1} alt="img" />
                                <div id="countdown_two">
                                    <ul>
                                    <li><span>{timerDays}</span>Days</li>
                                    <li><span>{timerHours}</span>Hours</li>
                                    <li><span>{timerMinutes}</span>Minutes</li>
                                    <li><span>{timerSeconds}</span>Seconds</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlackFriday
