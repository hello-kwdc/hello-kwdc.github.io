import React from "react";

import { ORGANIZER } from "./organizer.js";
import * as SC from "@/components/styles";

const Organizer = () => {
  const handleLinkClick = (info) => {
    if (info?.link) window.open(`${info.link}`, "_blank");
  };

  return (
    <SC.Section>
      <SC.SectionOrganizer>
        <SC.SectionOrganizerContents>
          <SC.SectionOrganizerContentWrapper>
            {ORGANIZER.map((info, i) => {
              return (
                <SC.Organizer
                  key={`ORGANIZER_${i}`}
                  link={info.link}
                  onClick={() => handleLinkClick(info)}
                >
                  {i === 0 ? (
                    <SC.SectionTitle>Organizer</SC.SectionTitle>
                  ) : null}
                  <SC.OrganizerImage image={info.image}></SC.OrganizerImage>
                  <SC.OrganizerBody>
                    <div
                      style={{
                        fontSize: "22px",
                        fontWeight: 700,
                        margin: "10px 0",
                      }}
                    >
                      {info.name}
                    </div>
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: 500,
                      }}
                    >
                      {info.comment}
                    </div>
                  </SC.OrganizerBody>
                </SC.Organizer>
              );
            })}
          </SC.SectionOrganizerContentWrapper>
        </SC.SectionOrganizerContents>
      </SC.SectionOrganizer>
    </SC.Section>
  );
};

export default Organizer;
