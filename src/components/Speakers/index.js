import React from "react";

import { SPEAKERS } from "./speaker.js";
import * as SC from "@/components/styles";

const Speakers = () => {
  return (
    <SC.Section>
      <SC.SectionSpeakers>
        <SC.SectionSpeakersContents>
          <SC.SectionSpeakersContentWrapper>
            {SPEAKERS.map((info, i) => {
              return (
                <React.Fragment key={`speaker_${i}`}>
                  {i === 0 ? (
                    <SC.FirstCard>
                      <SC.FirstCardContents>
                        <SC.FirstCardTitle>
                          {info.title}
                        </SC.FirstCardTitle>
                        <div>
                          <div>{info.sub1}</div>
                          <div>{info.sub2}</div>
                        </div>
                      </SC.FirstCardContents>
                    </SC.FirstCard>
                  ) : (
                    <SC.Speaker>
                      <SC.SpeakerFront>
                        <SC.SpeakerFrontContent>
                          <SC.SpeakerImage image={info.image}></SC.SpeakerImage>
                          <SC.SpeakerInfo>
                            <SC.SessionCategory>{info.category}</SC.SessionCategory>
                            <SC.SessionTitle>{info.title}</SC.SessionTitle>
                            <SC.SessionSub>
                              {info.speaker} / {info.belong}
                            </SC.SessionSub>
                          </SC.SpeakerInfo>
                        </SC.SpeakerFrontContent>
                      </SC.SpeakerFront>
                      <SC.SpeakerBack>
                        <SC.SpeakerBackContent>
                          <div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "flex-end",
                                flexWrap: "wrap"
                              }}
                            >
                              <div style={{ fontSize: "20px", fontWeight: 500, paddingTop: "7px", marginRight: "8px" }}>
                                {info.speaker}
                              </div>
                              <div
                                style={{ fontSize: "13px", fontWeight: 350 }}
                              >
                                {info.belong}
                              </div>
                            </div>
                            <SC.SpeakerBackIntroduce>{info.introduce}</SC.SpeakerBackIntroduce>
                            <SC.SpeakerBackDetail>{info.detail}</SC.SpeakerBackDetail>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >

                          </div>
                        </SC.SpeakerBackContent>
                      </SC.SpeakerBack>
                    </SC.Speaker>
                  )}
                </React.Fragment>
              );
            })}
          </SC.SectionSpeakersContentWrapper>
        </SC.SectionSpeakersContents>
      </SC.SectionSpeakers>
    </SC.Section>
  );
};

export default Speakers;
