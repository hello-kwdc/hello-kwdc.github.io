import * as SC from "@/components/styles";
import IconArrowRight from "@/resources/icons/arrowRight.svg";
const Main = ({ handleButtonClick }) => {
  return (
    <SC.Section>
      <SC.SectionMain>
        <SC.BackgroundBlur />
        <SC.SectionMainContent>
          <SC.SectionMainContentTitle>
            <span style={{ fontWeight: 600 }}>KWDC</span>
            <span style={{ fontWeight: 200 }}>2023</span>
          </SC.SectionMainContentTitle>
          <SC.SectionMainContentSubTitle>
            Koreawide Developer Conference
          </SC.SectionMainContentSubTitle>
          <p>
            2023. 07. 18. 10:30 a.m. <br />
            Coex Grandballroom, Seoul
          </p>
          <p></p>
          <SC.SectionMainButton onClick={handleButtonClick}>
            <span>Get Ticket</span>
            <IconArrowRight />
          </SC.SectionMainButton>
        </SC.SectionMainContent>
      </SC.SectionMain>
    </SC.Section>
  );
};

export default Main;
