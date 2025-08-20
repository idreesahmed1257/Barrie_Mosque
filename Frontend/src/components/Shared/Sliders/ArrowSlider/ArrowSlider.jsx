"use client";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState, useEffect } from 'react';
import styles from './arrowSlider.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ArrowSlider = ({ perView, spacing, children }) => {
    const [currentPerView, setCurrentPerView] = useState(perView);
    const [sliderReady, setSliderReady] = useState(false);

    useEffect(() => {
        const updatePerView = () => {
            if (window.innerWidth < 600) {
                setCurrentPerView(1);
            } else {
                setCurrentPerView(perView);
            }
        };

        updatePerView();
        window.addEventListener('resize', updatePerView);

        return () => {
            window.removeEventListener('resize', updatePerView);
        };
    }, [perView]);

    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slides: {
            perView: currentPerView,
            spacing: spacing
        }
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
                {children.map((child, idx) => (
                    <div className="keen-slider__slide" key={idx}>
                        {child}
                    </div>
                ))}
            </div>
            <button className={styles.arrowRight} onClick={handleNext}>
                <ArrowForwardIcon />
            </button>
        </div>
    );
}

export default ArrowSlider;
