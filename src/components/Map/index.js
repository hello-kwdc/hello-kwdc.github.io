import React from "react";
import * as SC from "@/components/styles";
import IconArrowRight from "@/resources/icons/arrowRight.svg";
import GoogleMapReact from "google-map-react";

const Marker = ({ text }) => <div style={{ fontSize: "30px" }}>{text}</div>;
const Map = () => {
  const defaultProps = {
    center: {
      lat: 37.5113,
      lng: 127.0596,
    },
    zoom: 15,
  };

  const handleTicketBuy = () => {
    window.open(
      "https://smartstore.naver.com/asyncswift/products/8597073830",
      "_blank"
    );
  };
  return (
    <SC.Section>
      <SC.SectionMap>
        <SC.SectionMapContentWrapper>
          <SC.Map>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: `${process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}`,
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              yesIWantToUseGoogleMapApiInternals
            >
              <Marker lat={37.5113} lng={127.0596} text="📍" />
            </GoogleMapReact>
            <SC.MapInfo>Coex Grandballroom, Seoul</SC.MapInfo>
          </SC.Map>
          <SC.TicketBody>
            <SC.NormalTicket>
              <SC.TicketWrapper>
                <SC.TicketHeader color="#fff">
                  <div style={{ fontSize: "50px" }}>Ticket</div>
                  <div style={{ marginBottom: "20px" }}>₩68,000</div>
                  <SC.TicketButton color="#fff" onClick={handleTicketBuy}>
                    티켓 구매
                    <IconArrowRight />
                  </SC.TicketButton>
                </SC.TicketHeader>
                <SC.TicketFooter color="#fff">
                  <div>· 티켓은 총 1,100매 입니다.</div>
                  <div>
                    · 티켓 종류에 상관없이 참가자들은 행사에서 제공되는 세션,
                    이벤트 참가, 굿즈를 수령할 수 있습니다.
                  </div>
                  <div>
                    · 티켓은 한정된 수량으로 판매됩니다. 판매 일정보다 빠르게
                    매진될 수 있습니다.
                  </div>
                </SC.TicketFooter>
              </SC.TicketWrapper>
            </SC.NormalTicket>
            <SC.ScholarshipTicket>
              <SC.TicketWrapper>
                <SC.TicketHeader color="#000">
                  <div style={{ fontSize: "50px" }}>Scholarship Ticket</div>
                  <div style={{ marginBottom: "20px" }}>₩45,000</div>
                  <SC.TicketButton color="#000" onClick={handleTicketBuy}>
                    티켓 구매
                    <IconArrowRight />
                  </SC.TicketButton>
                </SC.TicketHeader>
                <SC.TicketFooter color="#000">
                  <div>· 티켓은 총 150매 입니다.</div>
                  <div>
                    · 티켓 종류에 상관없이 참가자들은 행사에서 제공되는 세션,
                    이벤트 참가, 굿즈를 수령할 수 있습니다.
                  </div>
                  <div>
                    · 티켓은 한정된 수량으로 판매됩니다. 판매 일정보다 빠르게
                    매진될 수 있습니다.
                  </div>
                </SC.TicketFooter>
              </SC.TicketWrapper>
            </SC.ScholarshipTicket>
          </SC.TicketBody>
        </SC.SectionMapContentWrapper>
      </SC.SectionMap>
    </SC.Section>
  );
};

export default Map;
