"use client";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import CommunityCard from './CommunityCard';
import styles from './community.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CommunityNews = ({ communities }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slides: {
            perView: 1.6,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
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
                {communities.map((com, idx) => (
                    <div className="keen-slider__slide" key={idx}>
                        <CommunityCard
                            title={com?.title}
                            name={com?.name}
                            description={com?.description}
                            image={com?.image}
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

export default CommunityNews;
