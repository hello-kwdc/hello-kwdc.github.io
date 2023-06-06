import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 500px) {
    /* width: 150vw; */
  }
`;

// Nav
export const Navigator = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: #00000099;
  color: #fff;

  & > *:nth-of-type(1) {
    margin-left: 130px;
  }

  & > *:nth-of-type(2) {
    margin-right: 130px;
  }
  @media screen and (max-width: 768px) {
    & > *:nth-of-type(1) {
      margin-left: 40px;
    }

    & > *:nth-of-type(2) {
      margin-right: 40px;
    }
  }
`;

export const NavLogo = styled.div`
  font-size: 36px;
`;
export const NavButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 180px;
  height: 50px;
  border-radius: 25px;
  color: #000;
  font-weight: 700;
  background-color: #fff;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 130px;
    height: 40px;
  }
`;

export const Section = styled.section`
  /* min-height: 950px; */
`;

export const SectionMain = styled.div`
  position: relative;
  width: 100%;
  height: 1000px;
  background-color: #000;
  background-image: url("./resources/background/main_bg.png");
  object-fit: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const BackgroundBlur = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
  background-image: url("./resources/background/background_blur.png");
  object-fit: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SectionMainContent = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 3;
  color: #fff;
  margin-left: 130px;
  & > p {
    font-size: 22px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    margin: 0;
    & > p {
      text-align: center;
      font-size: 15px;
    }
  }
`;

export const SectionMainContentTitle = styled.span`
  font-size: 120px;
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 80px;
  }
  @media screen and (max-width: 500px) {
    text-align: center;
    font-size: 60px;
  }
`;
export const SectionMainContentSubTitle = styled.span`
  font-size: 39px;
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 26px;
  }
  @media screen and (max-width: 500px) {
    text-align: center;
    font-size: 20px;
  }
`;
export const SectionMainButton = styled(NavButton)`
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  & > svg path {
    fill: #fff;
  }
`;

export const SectionHome = styled.div`
  position: relative;
  width: 100%;
  height: 1000px;
  background-color: #000;
  background-image: url("./resources/background/main_bg_blur.png");
  object-fit: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SectionHomeContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  & > p {
    font-size: 15px;
  }
`;

export const ContentBackground = styled.div`
  position: absolute;
  background-image: url("./resources/background/KWDC23.png");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 100%;
  background-size: contain;
`;

export const SectionHomeContentTitle = styled.span`
  font-size: 55px;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export const SectionHomeContentSubTitle = styled.span`
  font-size: 22px;
  margin: 18px 0 12px 0;
`;

export const SectionCommitees = styled.div`
  width: 100%;
  background-color: #000;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  & > div:nth-of-type(3n-2) {
    background-color: #343434;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    & > div:nth-of-type(2n-1) {
      background-color: #343434;
    }
    & > div:nth-of-type(2n) {
      background-color: #000000;
    }
  }
`;

export const SectionCommiteesEach = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

export const SectionCommiteesEachContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;
export const SectionCommiteesEachTitle = styled.span`
  font-size: 34px;
`;
export const SectionCommiteesEachBody = styled.span`
  margin-top: 20px;
  font-size: 17px;
  font-weight: 300;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
export const SectionCommiteesEachContentFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  & > img {
    padding: 30px;
  }
`;

export const SectionSponsors = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  background-image: url("./resources/background/sponsor_bg.png");
  object-fit: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 100px;
`;

export const SectionSponsorsContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1920px;
  & img {
    width: 80%;
  }
  @media screen and (max-width: 1000px) {
    padding: 130px 20px;

    & img {
      width: 80%;
    }
  }
`;

export const SectionSponsorsContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const SponsorColumn = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  font-size: 50px;
`;

export const SponsorBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .sponsor_content {
    position: relative;
    background-color: #fff;
    color: #000;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;

    & > span {
      position: absolute;
      top: 0;
      left: 0;
      margin: 14px;
      font-size: 19px;
      font-weight: 700;
    }
    &.soon {
      background-color: rgba(255, 255, 255, 0.3);

      & > div {
        font-size: 19px;
        color: #fff;
      }
    }
  }
`;

export const SponsorEach = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

export const SectionSpeakers = styled.div`
  width: 100%;
  height: auto;
  min-height: 1400px;
  background-color: #000;
  background-image: url("./resources/background/speaker_bg.png");
  object-fit: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SectionSpeakersContents = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SectionSpeakersContentWrapper = styled.div`
  max-width: 1920px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 100px;
  @media screen and (max-width: 767px) {
    & {
      padding: 20px;
    }
  }
`;

export const Speaker = styled.div`
  position: relative;
  width: 308px;
  height: 380px;
  overflow: hidden;
  border-radius: 20px;
  color: #fff;
  @media screen and (max-width: 900px) {
    & {
      width: 250px;
      height: 300px;
    }
  }
  @media screen and (max-width: 767px) {
    & {
      width: 100%;
      height: 300px;
    }
  }
`;

export const SpeakerIntroCard = styled(Speaker)``;

export const FirstCard = styled(Speaker)``;

export const SpeakerFront = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  background-image: url("./resources/background/speaker_each.png");
  object-fit: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const SpeakerFrontContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #fff;
  & > * {
    margin-top: 20px;
  }
`;

export const SessionTitle = styled.span`
  font-size: 20px;
`;

export const SessionSub = styled.span`
  font-size: 12px;
`;

export const SpeakerBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: 0.3s;
  opacity: 0;
  background-color: #343434;
  /* cursor: pointer; */
  &:hover {
    opacity: 1;
  }
`;
export const SpeakerBackContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  padding: 20px;
  color: #fff;
`;

export const SessionTrack = styled.div`
  padding: 5px 20px;
  border-radius: 20px;
  background-color: #5d5d5d;
`;

export const SectionTimetable = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SectionTimetableContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SectionTimetableContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 1920px;
  width: 100%;
  padding: 130px;
  @media screen and (max-width: 767px) {
    padding: 130px 20px;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const TimetableEach = styled.div`
  position: relative;
  width: 100%;
`;
export const TableTitle = styled.div`
  color: #f6ab1e;
  font-size: 35px;
  font-weight: 700;
`;

const TableContent = styled.div`
  width: 100%;
  height: 90px;
  border-radius: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  & > span {
    color: #f6ab1e;
  }
  & > * {
    margin-left: 20px;
  }
`;
export const TableFullContent = styled(TableContent)`
  background-color: #343434;
`;
export const TableEmptyContent = styled(TableContent)`
  background-color: transparent;
  border: 1px dashed #fff;
  box-sizing: border-box;
`;

export const SectionOrganizer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  background-image: url("./resources/background/speaker_bg.png");
  object-fit: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SectionTitle = styled.div`
  position: absolute;
  font-size: 35px;
  color: #fff;
  font-weight: 700;
  top: -70px;
  white-space: nowrap;
`;

export const SectionOrganizerContents = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SectionOrganizerContentWrapper = styled.div`
  max-width: 1920px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  /* padding: 100px; */
  @media screen and (max-width: 850px) {
    & {
      padding: 20px;
    }
  }
`;

export const Organizer = styled.div`
  position: relative;
  width: 310px;
  height: 380px;
  cursor: ${(props) => (props.link ? "pointer" : "")};
  @media screen and (max-width: 700px) {
    & {
      width: 250px;
      height: 350px;
    }
  }
`;
export const OrganizerImage = styled.div`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-color: ${(props) => (props.image ? "#d9d9d9" : "#d9d9d9")};
  background-image: url(${(props) => props.image});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 700px) {
    & {
      height: 150px;
    }
  }
`;
export const OrganizerBody = styled.div`
  color: #fff;
`;

export const SectionMap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #000;
`;

export const SectionMapContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1920px;
  /* padding: 100px; */
  @media screen and (max-width: 1000px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const Map = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  z-index: 1;
  height: 100%;
  @media screen and (max-width: 1000px) {
    & {
      height: 400px;
    }
  }
`;

export const MapInfo = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 30px;
  font-size: 15px;
  font-weight: 600;
  padding: 13px 35px;
  opacity: 0.8;
  border-radius: 30px;
  background-color: #494a4a;
  z-index: 2;
  color: #fff;
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

export const TicketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85%;
  padding: 30px 50px;
  @media screen and (max-width: 1000px) {
    padding: 20px;
  }
`;

export const TicketBody = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 30px;
  width: 100%;
`;
export const NormalTicket = styled.div`
  width: 100%;
  height: 400px;
  background-color: #1a3f85;
`;
export const ScholarshipTicket = styled.div`
  width: 100%;
  height: 400px;
  background-color: #efefef;
`;

export const TicketHeader = styled.div`
  color: ${(props) => props.color};
`;
export const TicketFooter = styled.div`
  color: ${(props) => props.color};
  > div {
    margin-top: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const TicketButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 180px;
  height: 50px;
  border-radius: 25px;
  color: ${(props) => props.color};
  font-weight: 400;
  border: 1px solid ${(props) => props.color};
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 130px;
    height: 40px;
  }
  & path {
    fill: ${(props) => props.color};
  }
`;

// Footer
// Footer
export const Footer = styled.div`
  display: flex;
  height: 300px;
  justify-content: space-around;
  align-items: center;
  background-color: #000;
  color: #fff;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const FooterMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin: 20px 0;
  & a {
    text-decoration: none;
    color: #fff;
    margin: 10px 10px 10px 0;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
