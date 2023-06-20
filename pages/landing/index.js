import { useRef } from "react";
// Components
import Navigator from "@/components/Navigator";
import Home from "@/components/Home";
import Main from "@/components/Main";
import Sponsors from "@/components/Sponsors";
import Speakers from "@/components/Speakers";
import Timetable from "@/components/Timetable";
import Organizer from "@/components/Organizer";
import Indivisual from "@/components/Indivisual";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
import { LandingProvider } from "@/components/context/context";
import { prefix } from "@/components/config/config";

// Style
import * as SC from "@/components/styles";

const Landing = () => {
  const scrollRef = useRef(null);

  const handleButtonClick = () => {
    // 스크롤 위치로 이동하기
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <LandingProvider value={{ prefix }}>
        <SC.Container>
          <Navigator handleButtonClick={handleButtonClick} />
          <Main handleButtonClick={handleButtonClick} />
          <Home />
          <Sponsors />
          {/* <Speakers /> */}
          <Timetable />
          <Organizer />
          <Indivisual />
          <section ref={scrollRef}>
            <Map />
          </section>
          <Footer />
        </SC.Container>
      </LandingProvider>
    </>
  );
};

export default Landing;
