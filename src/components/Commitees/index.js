import * as SC from "@/components/styles";
const Commitees = () => {
  const handleLinkClick = (type) => {
    switch (type) {
      case "adiOS":
        window.open(`https://www.instagram.com/adios_korea/`, "_blank");
        break;
      case "AsyncSwift":
        window.open(`http://www.asyncswift.org/`, "_blank");
        break;
      case "LetSwift":
        window.open(`http://letswift.kr`, "_blank");
        break;
    }
  };
  return (
    <SC.Section>
      <SC.SectionCommitees>
        <SC.SectionCommiteesEach onClick={() => handleLinkClick("adiOS")}>
          <SC.SectionCommiteesEachContent>
            <SC.SectionCommiteesEachTitle>adiOS</SC.SectionCommiteesEachTitle>
            <SC.SectionCommiteesEachBody>
              세상에서 가장 라이트하고
              <br />
              캐쥬얼한 iOS 컨퍼런스
            </SC.SectionCommiteesEachBody>
          </SC.SectionCommiteesEachContent>
          <SC.SectionCommiteesEachContentFooter>
            <img src="./resources/logo/adiOS_logo.png" />
          </SC.SectionCommiteesEachContentFooter>
        </SC.SectionCommiteesEach>
        <SC.SectionCommiteesEach onClick={() => handleLinkClick("AsyncSwift")}>
          <SC.SectionCommiteesEachContent>
            <SC.SectionCommiteesEachTitle>
              AsyncSwift
            </SC.SectionCommiteesEachTitle>
            <SC.SectionCommiteesEachBody>
              AsyncSwift는 Apple 생태계 속에서 헤엄치는 사람들의 커뮤니티입니다.
              <br />
              우리는 Swift라는 공용어를 매개로 기획자, 디자이너, 개발자들이
              어우러져
              <br />
              지식과 경험, 기회를 공유함으로써 함께 성장하기를 꿈꿉니다.
              <br />
            </SC.SectionCommiteesEachBody>
          </SC.SectionCommiteesEachContent>
          <SC.SectionCommiteesEachContentFooter>
            <img src="./resources/logo/AsyncSwift_logo.png" />
          </SC.SectionCommiteesEachContentFooter>
        </SC.SectionCommiteesEach>
        <SC.SectionCommiteesEach onClick={() => handleLinkClick("LetSwift")}>
          <SC.SectionCommiteesEachContent>
            <SC.SectionCommiteesEachTitle>
              Let'Swift
            </SC.SectionCommiteesEachTitle>
            <SC.SectionCommiteesEachBody>
              Let’Swift는 개발자 커뮤니티가 주관하고 대한민국의 Apple 개발자들이{" "}
              <br />
              자발적으로 만들어나가는 커뮤니티입니다. <br />
              누구나 참여할 수 있는 네트워크를 통해 보다 다양한 이야기를 나누는{" "}
              <br />
              대화의 장을 마련합니다. <br />
            </SC.SectionCommiteesEachBody>
          </SC.SectionCommiteesEachContent>
          <SC.SectionCommiteesEachContentFooter>
            <img src="./resources/logo/LetSwift_logo.png" />
          </SC.SectionCommiteesEachContentFooter>
        </SC.SectionCommiteesEach>
        <SC.SectionCommiteesEach>
          <SC.SectionCommiteesEachContent>
            <SC.SectionCommiteesEachTitle>
              {/* Title */}
            </SC.SectionCommiteesEachTitle>
            <SC.SectionCommiteesEachBody>
              {/* Comment */}
            </SC.SectionCommiteesEachBody>
          </SC.SectionCommiteesEachContent>
          <SC.SectionCommiteesEachContentFooter>
            {/* Logo */}
          </SC.SectionCommiteesEachContentFooter>
        </SC.SectionCommiteesEach>
      </SC.SectionCommitees>
    </SC.Section>
  );
};

export default Commitees;
