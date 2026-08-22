"use client";
import CommunityNews from "@/components/Home/Community/CommunityNews";
import HomePosts from "@/components/Home/HomePosts";
import Slide from "@/components/Home/HomeSlide";
import HomeTitle from "@/components/Home/HomeTitle";
import NamazTimings from "@/components/Home/NamazTimings";
import Welcome from "@/components/Home/Welcome";
import DonationsFrame from "@/components/Shared/DonationsFrame";
import "@fontsource/quicksand";
import { Grid } from "@mui/material";
import axios from "axios";
import hero3 from '@/assets/images/shared/DSC_6516.jpg';
import { useEffect, useState } from "react";

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

  useEffect(() => {
    document.title = "Best Mosque in Barrie | Barrie Mosque (Noor-Ul-Islam) | Zakat, Sadaqah, Donations, Janazah, Marriage, Islamic School Near Me| Serving Barrie, Newmarket, Orillia, Midland, Muskoka & Simcoe County";
  }, []);
  return (
    <main>
      <Slide src={hero3} heading={verse?.aayah} subheading={verse?.translation} surahName={`${verse?.aayahNum} : ${verse?.surah}`} />
      <Welcome />
      <HomeTitle text={'Daily Prayer Timings & Jummah Schedule'} as="h2" />
      <NamazTimings />
      <HomeTitle text={'Upcoming Events & Community Programs'} as="h2" />
      <CommunityNews />
      <HomeTitle text={'Latest News from Barrie Mosque'} as="h2" />
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
      <HomeTitle text={'Support Our Mosque - Donate Zakat & Sadaqah'} as="h2" />
      <Grid container display={'flex'} justifyContent={'center'}>
        <DonationsFrame />
      </Grid>
      <br />
    </main>
  );
}
