// Components
import Navigator from "@/components/Navigator";
import Home from "@/components/Home";
import Main from "@/components/Main";
import Commitees from "@/components/Commitees";
import Sponsors from "@/components/Sponsors";
import Speakers from "@/components/Speakers";
import Timetable from "@/components/Timetable";
import Organizer from "@/components/Organizer";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
import { LandingProvider } from "@/components/context/context";
import { prefix } from "@/components/config/config";

// Style
import * as SC from "@/components/styles";

const Landing = () => {
  return (
    <>
      <LandingProvider value={{ prefix }}>
        <SC.Container>
          <Navigator />
          <Main />
          <Home />
          <Commitees />
          <Sponsors />
          <Speakers />
          <Timetable />
          <Organizer />
          <Map />
          <Footer />
        </SC.Container>
      </LandingProvider>
    </>
  );
};

export default Landing;
