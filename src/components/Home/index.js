import * as SC from "@/components/styles";
const Home = () => {
  return (
    <SC.Section>
      <SC.SectionHome>
        <SC.SectionHomeContent>
          <SC.ContentBackground />
          <SC.SectionHomeContentTitle>
            Together, <br />
            we can make great things happen
          </SC.SectionHomeContentTitle>
          <SC.SectionHomeContentSubTitle style={{ padding: "0 30px" }}>
            Korea Wide Developer Conference는 <br />
            한국 Apple 생태계 구성원들을 위한 가장 큰 축제예요.
          </SC.SectionHomeContentSubTitle>
          <p style={{ padding: "0 30px", lineHeight: "25px" }}>
            2009년 아이폰이 한국에서 처음 정식 발매된지 어느새 14년이 흘렀어요.
            <br />
            그동안 한국 Apple 생태계에서 활약해 온 개발자, 기획자, 디자이너 등의
            다양한 구성원들 덕분에 Apple 생태계는 무럭무럭 자랄 수 있었죠.
            <br />
            새로운 개발언어, 디자인, 가이드라인들의 등장은 때때로 우리를 힘들게
            하기도 했지만, 그 경험들 덕분에 우리는 단단한 뿌리와 함께
            성장했어요.
            <br />
            WWDC23에서 발표될 내용들은 우리에게 어떤 변화를 가져다줄까요?
            <br />
            7월 18일 서울에서 함께 모여, 앞으로 만들어나갈 더 다양한 가치들에
            대해서 소통해보아요.
          </p>
        </SC.SectionHomeContent>
      </SC.SectionHome>
    </SC.Section>
  );
};

export default Home;
