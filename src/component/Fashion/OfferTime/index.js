import React, { useEffect ,useRef ,useState} from 'react'

    const OfferTime = () => {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    const interval = useRef();

    const startTimer = () => {
        
        const countdownDate = new Date('2025-10-19T00:00:00').getTime(); 

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
       <section id="offer_timer_one">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-4 col-md-7 offset-md-4 col-sm-12 col-12">
                    <div className="offer_time_flex">
                        <div className="count_down">
                            <div id="countdown">
                                <ul>
                                    <li><span>{timerDays}</span>days</li>
                                    <li><span>{timerHours}</span>Hours</li>
                                    <li><span>{timerMinutes}</span>Minutes</li>
                                    <li><span>{timerSeconds}</span>Seconds</li>
                                </ul>
                            </div>
                        </div>
                        <div className="offer_timer_text">
                            <h2>20% OFF FOR ALL T-SHIRT COLLECTION</h2>
                                    <p>
                                      Fashion meets flair in our T-shirt collection — now at 20% off! From chill streetwear vibes to everyday essentials, find your perfect fit before the clock runs out. Your wardrobe refresh starts here!
                                    </p>
                            <a href="#!" className="theme-btn-one bg-black btn_md">View More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default OfferTime
