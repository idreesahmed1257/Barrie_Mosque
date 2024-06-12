"use client";
import React, { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Slide from './HomeSlide';
import styles from './home.module.scss';

const HomeSlider = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderReady, setSliderReady] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        mode: "snap",
        slides: {
            perView: 1,
        },
        slideChanged(s) {
            setCurrentSlide(s.track.details.rel);
        },
        created() {
            setSliderReady(true); // Slider is ready
        },
    });

    useEffect(() => {
        if (sliderReady) {
            document.querySelector(`.${styles.sliderContainer}`).style.visibility = 'visible';
        }
    }, [sliderReady]);

    return (
        <div className={styles.sliderContainer}>
            <div ref={sliderRef} className="keen-slider">
                {slides.map((slide, index) => (
                    <div className="keen-slider__slide" key={index}>
                        <Slide src={slide.src} heading={slide.heading} subheading={slide.subheading} btnText={slide?.btnText} />
                    </div>
                ))}
            </div>
            <div className={styles.dots}>
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            instanceRef.current?.moveToIdx(idx);
                        }}
                        className={`${styles.dot} ${currentSlide === idx ? styles.active : ''}`}
                    ></button>
                ))}
            </div>
        </div>
    );
}

export default HomeSlider;
