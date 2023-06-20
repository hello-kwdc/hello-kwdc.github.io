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
                <SC.SponsorEach className="sponsor_content">
                  <span>Keystone</span>
                  <img
                    src="./resources/logo/SP_udemy.png"
                    style={{ width: "250px !important" }}
                  />
                </SC.SponsorEach>
              </SC.SponsorBody>
            </SC.SponsorColumn>
            <SC.SponsorColumn>
              <SC.SponsorBody>
                <SC.SponsorEach className="sponsor_content">
                  <span>Platinum</span>
                  <img
                    src="./resources/logo/SP_kakaobank.png"
                    style={{ width: "200px !important" }}
                  />
                </SC.SponsorEach>
                <SC.SponsorEach className="sponsor_content">
                  <span>Platinum</span>
                  <img
                    src="./resources/logo/SP_kia_logo.png"
                    style={{ width: "160px !important" }}
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
                      style={{ width: "100px !important" }}
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
                <div className="sponsor_content">
                  <span>Sliver</span>
                  <img
                    src="./resources/logo/SP_kakaostyle.png"
                    style={{ width: "126px !important" }}
                  />
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
                      style={{ width: "80px !important" }}
                    />
                  </div>
                  <div
                    className="sponsor_content"
                    style={{ height: "46%" }}
                  >
                    <span className="sponsor_small">Special</span>
                    <img
                      src="./resources/logo/SP_smpt.png"
                      style={{ width: "120px !important" }}
                    />
                  </div>
                  </div>
                  </SC.SponsorEach>
              </SC.SponsorBody>
              <div style={{ width: "100%", textAlign: "end" }}>
                <a
                  href="mailto:lingostar.joker@gmail.com"
                  target="_blank"
                  style={{
                    fontSize: "20px",
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  후원문의: lingostar.joker@gmail.com
                </a>
              </div>
            </SC.SponsorColumn>
          </SC.SectionSponsorsContentWrapper>
        </SC.SectionSponsorsContent>
      </SC.SectionSponsors>
    </SC.Section>
  );
};

export default Sponsors;
