import CommunityNews from "@/components/Home/Community/CommunityNews";
import HomeSlider from "@/components/Home/HomeSlider";
import HomeTitle from "@/components/Home/HomeTitle";
import NamazTimings from "@/components/Home/NamazTimings";
import Welcome from "@/components/Home/Welcome";
import { comunities, slides, timings } from "@/components/Home/helper";
import "@fontsource/quicksand";

export default function Home() {

  const dt = '5 Dhul-Hijjah 1445 | June 12'

  return (
    <main>
      <HomeSlider slides={slides} />
      <Welcome />
      <NamazTimings timings={timings} currentDate={dt} />
      <HomeTitle text={'Community News'} />
      <CommunityNews communities={comunities} />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}
