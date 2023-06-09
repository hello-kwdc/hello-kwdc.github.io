import * as SC from "@/components/styles";

const Sponsors = () => {
  return (
    <SC.Section>
      <SC.SectionSponsors>
        <SC.SectionSponsorsContent>
          <SC.SectionSponsorsContentWrapper>
            <SC.SponsorColumn>
              <SC.SectionTitle>Sponsors</SC.SectionTitle>
              <SC.SponsorBody>
                <SC.SponsorEach className="sponsor_content">
                  <span>Keystone</span>
                  <img
                    src="./resources/logo/SP_Key_logo.png"
                    style={{ width: "250px !important" }}
                  />
                </SC.SponsorEach>
              </SC.SponsorBody>
              <a href="mailto:lingostar.joker@gmail.com" target="_blank">
                후원문의: lingostar.joker@gmail.com
              </a>
            </SC.SponsorColumn>
            <SC.SponsorColumn>
              <SC.SponsorBody>
                <SC.SponsorEach className="sponsor_content">
                  <span>Platinum</span>
                  <img
                    src="./resources/logo/SP_kakaobank.png"
                    style={{ width: "230px !important" }}
                  />
                </SC.SponsorEach>
                <SC.SponsorEach className="sponsor_content">
                  <span>Platinum</span>
                  <img
                    src="./resources/logo/SP_kia_logo.png"
                    style={{ width: "230px !important" }}
                  />
                </SC.SponsorEach>
              </SC.SponsorBody>
            </SC.SponsorColumn>
            <SC.SponsorColumn>
              <SC.SponsorBody>
                <SC.SponsorEach style={{ gap: "20px" }}>
                  <div className="sponsor_content">
                    <span>Sliver</span>
                    <img
                      src="./resources/logo/SP_jumpit.png"
                      style={{ width: "126px !important" }}
                    />
                  </div>
                  <div className="sponsor_content">
                    <span>Sliver</span>
                    <img
                      src="./resources/logo/SP_yogiyo.png"
                      style={{ width: "126px !important" }}
                    />
                  </div>
                </SC.SponsorEach>
                <SC.SponsorEach style={{ gap: "20px" }}>
                  <div className="sponsor_content soon">
                    <span>Sliver</span>
                    <div>추후 공개됩니다.</div>
                    {/* <img src="./resources/logo/SP_other_logo.png" /> */}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <div className="sponsor_content" style={{ height: "46%" }}>
                      <span className="sponsor_small">Bronze</span>
                      <img
                        src="./resources/logo/SP_wooa.png"
                        style={{ width: "126px !important" }}
                      />
                    </div>
                    <div
                      className="sponsor_content soon"
                      style={{ height: "46%" }}
                    >
                      <span className="sponsor_small">Special</span>
                      <div>추후 공개됩니다.</div>
                      {/* <img src="./resources/logo/SP_other_logo.png" /> */}
                    </div>
                  </div>
                </SC.SponsorEach>
              </SC.SponsorBody>
            </SC.SponsorColumn>
          </SC.SectionSponsorsContentWrapper>
        </SC.SectionSponsorsContent>
      </SC.SectionSponsors>
    </SC.Section>
  );
};

export default Sponsors;
