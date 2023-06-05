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
                  <span>Key Stone</span>
                  <img src="./resources/logo/SP_Key_logo.png" />
                </SC.SponsorEach>
              </SC.SponsorBody>
            </SC.SponsorColumn>
            <SC.SponsorColumn>
              <SC.SponsorBody>
                <SC.SponsorEach className="sponsor_content">
                  <span>Platinum</span>
                  <img src="./resources/logo/SP_platium_logo.png" />
                </SC.SponsorEach>
                <SC.SponsorEach className="sponsor_content">
                  <span>Platinum</span>
                  <img src="./resources/logo/SP_platium_logo.png" />
                </SC.SponsorEach>
              </SC.SponsorBody>
            </SC.SponsorColumn>
            <SC.SponsorColumn>
              <SC.SponsorBody>
                <SC.SponsorEach style={{ gap: "20px" }}>
                  <div className="sponsor_content">
                    <span>Sliver</span>
                    <img src="./resources/logo/SP_other_logo.png" />
                  </div>
                  <div className="sponsor_content">
                    <span>Sliver</span>
                    <img src="./resources/logo/SP_other_logo.png" />
                  </div>
                </SC.SponsorEach>
                <SC.SponsorEach style={{ gap: "20px" }}>
                  <div className="sponsor_content">
                    <span>Sliver</span>
                    <img src="./resources/logo/SP_other_logo.png" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <div className="sponsor_content" style={{ height: "46%" }}>
                      <span>Bronze</span>
                      <img src="./resources/logo/SP_other_logo.png" />
                    </div>
                    <div className="sponsor_content" style={{ height: "46%" }}>
                      <span>Special</span>
                      <img src="./resources/logo/SP_other_logo.png" />
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
