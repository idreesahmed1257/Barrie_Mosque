"use client";
import React, { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Slide from './HomeSlide';
import styles from './home.module.scss';
import axios from 'axios';

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

    const [verse, setVerse] = useState({
        aayah: "",
        translation: "",
        surah: "",
        aayahNum: "",
        surahNum: ""
    })

    const getData = async () => {
        try {
            const randomNo = Math.floor(Math.random() * 6236) + 1;
            // const randomNo = 262;
            const aayah = await axios.get(`https://api.alquran.cloud/v1/ayah/${randomNo}/ar.alafasy`);
            console.log("aayah", aayah)
            const currentSurah = aayah?.data?.data?.surah?.number;
            const numberInSurah = aayah?.data?.data?.numberInSurah;
            const transl = await axios.get(`https://api.alquran.cloud/v1/ayah/${currentSurah}:${numberInSurah}/en.asad`);
            console.log("aayah surah", aayah?.data?.data?.surah?.name);
            console.log("transl surah", transl?.data?.data?.surah?.name)
            setVerse({
                aayah: aayah?.data?.data?.text,
                translation: transl?.data?.data?.text,
                surah: aayah?.data?.data?.surah?.name,
                surahNum: currentSurah,
                aayahNum: numberInSurah
            })
        } catch (err) {
            console.log("Err", err)
        }

    }

    useEffect(() => {
        getData()
    }, []);

    useEffect(() => {
        if (sliderReady) {
            document.querySelector(`.${styles.sliderContainer}`).style.visibility = 'visible';
        }
    }, [sliderReady]);

    return (
        <div className={styles.sliderContainer}>
            {console.log("todayTarjumah", verse)}
            <div ref={sliderRef} className="keen-slider">
                {slides.map((slide, index) => (
                    <div className="keen-slider__slide" key={index}>
                        <Slide src={slide.src} heading={verse?.aayah} subheading={verse?.translation} surahName={`[${verse?.surahNum}:${verse?.aayahNum}] ${verse?.surah}`} btnText={""} />
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
