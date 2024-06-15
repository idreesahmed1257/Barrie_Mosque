import CommunityCard from "@/components/Home/Community/CommunityCard";
import EventCard from "@/components/Home/Events/EventCard";
import Events from "@/components/Home/Events/Events";
import HomeSlider from "@/components/Home/HomeSlider";
import HomeTitle from "@/components/Home/HomeTitle";
import NamazTimings from "@/components/Home/NamazTimings";
import Welcome from "@/components/Home/Welcome";
import { communities, events, slides, timings } from "@/components/Home/helper";
import ArrowSlider from "@/components/Shared/Sliders/ArrowSlider/ArrowSlider";
import "@fontsource/quicksand";

export default function Home() {

  const dt = '5 Dhul-Hijjah 1445 | June 12'

  return (
    <main>
      <HomeSlider slides={slides} />
      <Welcome />
      <NamazTimings timings={timings} currentDate={dt} />
      <HomeTitle text={'Community News'} />
      {/* <CommunityNews communities={comunities} /> */}
      <ArrowSlider spacing={0} perView={1.3}>
        {communities.map((com, idx) => (
          <CommunityCard
            key={idx}
            title={com.title}
            name={com.name}
            description={com.description}
            image={com.image}
          />
        ))}
      </ArrowSlider>
      <HomeTitle text={'Events'} />
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
      </ArrowSlider>
      {/* <Events events={events} /> */}
      <br />
    </main>
  );
}
