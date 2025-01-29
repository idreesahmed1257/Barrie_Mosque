"use client";
import CommunityNews from "@/components/Home/Community/CommunityNews";
import HomePosts from "@/components/Home/HomePosts";
import Slide from "@/components/Home/HomeSlide";
import HomeTitle from "@/components/Home/HomeTitle";
import NamazTimings from "@/components/Home/NamazTimings";
import Welcome from "@/components/Home/Welcome";
import { slides, timings } from "@/components/Home/helper";
import DonationsFrame from "@/components/Shared/DonationsFrame";
import "@fontsource/quicksand";
import hero3 from '@/assets/images/shared/hero8.jpg';
import { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";

export default function Home() {


  const [verse, setVerse] = useState({
    aayah: "",
    translation: "",
    surah: "",
    aayahNum: "",
    surahNum: ""
  });

  const getRandomAyah = async () => {
    try {
      let aayah;
      let textLength = 0;

      // Keep calling the first API until the text length is less than or equal to 100
      while (textLength === 0 || textLength > 100) {
        const randomNo = Math.floor(Math.random() * 6236) + 1;
        aayah = await axios.get(`https://api.alquran.cloud/v1/ayah/${randomNo}/ar.alafasy`);
        textLength = aayah?.data?.data?.text?.length;
        console.log("aayah?.data?.data?.text", textLength);
      }

      const currentSurah = aayah?.data?.data?.surah?.number;
      const numberInSurah = aayah?.data?.data?.numberInSurah;
      const transl = await axios.get(`https://api.alquran.cloud/v1/ayah/${currentSurah}:${numberInSurah}/en.asad`);
      console.log("aayah surah", aayah?.data?.data?.surah?.name);
      console.log("transl surah", transl?.data?.data?.surah?.name);

      const newVerse = {
        aayah: aayah?.data?.data?.text,
        translation: transl?.data?.data?.text,
        surah: aayah?.data?.data?.surah?.name,
        surahNum: currentSurah,
        aayahNum: numberInSurah,
        date: new Date().toDateString()
      };

      localStorage.setItem('dailyVerse', JSON.stringify(newVerse));
      setVerse(newVerse);
    } catch (err) {
      console.log("Err", err);
    }
  };

  useEffect(() => {
    const storedVerse = JSON.parse(localStorage.getItem('dailyVerse'));
    const today = new Date().toDateString();

    if (storedVerse && storedVerse.date === today) {
      setVerse(storedVerse);
    } else {
      getRandomAyah();
    }
  }, []);
  return (
    <main>
      <Slide src={hero3} heading={verse?.aayah} subheading={verse?.translation} surahName={`${verse?.aayahNum} : ${verse?.surah}`} />
      <Welcome />
      <HomeTitle text={'Prayer Timings'} />
      <NamazTimings />
      <HomeTitle text={'Events'} />
      <CommunityNews />
      <HomeTitle text={'Community News'} />
      <HomePosts />
      {/* <ArrowSlider spacing={0} perView={1.3}>
        {communities.map((com, idx) => (
          <CommunityCard
            key={idx}
            title={com.title}
            name={com.name}
            description={com.description}
            image={com.image}
          />
        ))}
      </ArrowSlider> */}
      {/* <HomeTitle text={'Events'} />
      <ArrowSlider spacing={0} perView={3.3}>
        {events.map((com, idx) => (
          <EventCard
            title={com?.title}
            date={com?.date}
            image={com?.image}
            location={com?.location}
            key={idx}
          />
        ))}
      </ArrowSlider> */}
      <br />
      <HomeTitle text={'Donations'} />
      <Grid container display={'flex'} justifyContent={'center'}>
        <DonationsFrame />
      </Grid>
      <br />
    </main>
  );
}
