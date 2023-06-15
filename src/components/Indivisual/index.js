import * as SC from "@/components/styles";
const Indivisual = () => {
  const handleIndivisualTicketBuy = () => {
    window.open(
      "https://smartstore.naver.com/asyncswift/products/8694264593",
      "_blank"
    );
  };

  return (
    <SC.Section>
      <SC.SectionIndivisual>
        <SC.SectionIndivisualContent>
          <SC.SectionIndivisualContentSubTitle style={{ padding: "0 30px" }}>
            Indivisual Sponsor
          </SC.SectionIndivisualContentSubTitle>
          <SC.SectionIndivisualContentTitle>
            커뮤니티를 함께 만들어갈 기회!
          </SC.SectionIndivisualContentTitle>
          <p style={{ padding: "15px 0 40px 0", lineHeight: "24px", width: "90%" }}>
            자그마한 이벤트도 열지 못했던 커뮤니티가 1,000명이 넘는 사람을 모을 수 있을 만큼 성장했습니다.
            <br /><br />
            하지만 KWDC23은 여기서 멈추지 않고, 우리가 사랑하는 커뮤니티를 더욱 성장시키고자하는 꿈을 갖고 있습니다.
            <br />
            이 꿈을 실현시키기 위해서는 많은 분들의 도움이 필요합니다!
            <br /><br />
            여러분의 후원금은 오직 성숙한 커뮤니티를 만들어가는 과정에만 사용될 것을 약속드리며, 많은 분들의 기여를 기다립니다.
            <br />
            후원자 분들을 위해 소소한 혜택과 KWDC23의 진심을 담은 감사 표현이 준비되어 있습니다.
          </p>
          <SC.SectionIndivisualContentReward onClick={handleIndivisualTicketBuy}>
            <SC.SectionIndivisualContentRewardSection style={{ textAlign: "left", flexGrow: "1" }}>
              <SC.SectionIndivisualContentRewardTitle>
                개인 후원 혜택
              </SC.SectionIndivisualContentRewardTitle>
              <SC.SectionIndivisualContentRewardDescription>
              · 웹페이지와 SNS에 후원자분들이 함께 명시됩니다.<br />
              · 개인 후원자들간의 네트워크 시간이 제공됩니다.<br />
              · 단체 사진 촬영이 포함되어 있습니다.<br />
              · 특별 뱃지와 우선 질문권이 제공됩니다.
              </SC.SectionIndivisualContentRewardDescription>
            </SC.SectionIndivisualContentRewardSection>
            <SC.SectionIndivisualContentRewardSection style={{ textAlign: "right" }}>
              <SC.SectionIndivisualContentRewardCount>
                총 수량 <strong>50</strong>개
              </SC.SectionIndivisualContentRewardCount>
              <SC.SectionIndivisualContentRewardPrice>
                ₩300,000
              </SC.SectionIndivisualContentRewardPrice>
            </SC.SectionIndivisualContentRewardSection>
          </SC.SectionIndivisualContentReward>
        </SC.SectionIndivisualContent>
      </SC.SectionIndivisual>
    </SC.Section>
  );
};

export default Indivisual;
