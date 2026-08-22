"use client";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import styles from './events.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EventCard from './EventCard';

const Events = ({ events }) => {
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slides: {
            perView: 3.3,
            spacing: 25
        },
    });

    const handlePrev = () => {
        instanceRef.current?.prev();
    };

    const handleNext = () => {
        instanceRef.current?.next();
    };

    return (
        <div className={styles.sliderContainer}>
            <button className={styles.arrowLeft} onClick={handlePrev}>
                <ArrowBackIcon />
            </button>
            <div ref={sliderRef} className="keen-slider">
                {events.map((com, idx) => (
                    <div className="keen-slider__slide" key={idx}>
                        <EventCard
                            title={com?.title}
                            date={com?.date}
                            image={com?.image}
                            location={com?.location}
                            key={idx}
                        />
                    </div>
                ))}
            </div>
            <button className={styles.arrowRight} onClick={handleNext}>
                <ArrowForwardIcon />
            </button>
        </div>
    );
}

export default Events;
