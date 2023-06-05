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
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          padding: "30px",
                          justifyContent: "space-between",
                          height: "88%",
                          color: "#fff",
                        }}
                      >
                        <div style={{ fontSize: "30px", fontWeight: "700" }}>
                          {info.title}
                        </div>
                        <div>
                          <div>{info.sub1}</div>
                          <div>{info.sub2}</div>
                        </div>
                      </div>
                    </SC.FirstCard>
                  ) : (
                    <SC.Speaker>
                      <SC.SpeakerFront>
                        <SC.SpeakerFrontContent>
                          <SC.SessionTitle>{info.title}</SC.SessionTitle>
                          <SC.SessionSub>
                            {info.speaker} / {info.title}
                          </SC.SessionSub>
                        </SC.SpeakerFrontContent>
                      </SC.SpeakerFront>
                      <SC.SpeakerBack>
                        <SC.SpeakerBackContent>
                          <div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "flex-end",
                                marginBottom: "30px",
                              }}
                            >
                              <div style={{ fontSize: "20px" }}>
                                {info.speaker}
                              </div>
                              <div
                                style={{ fontSize: "16px", marginLeft: "8px" }}
                              >
                                {info.belong}
                              </div>
                            </div>
                            <div>{info.detail}</div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <SC.SessionTrack>
                              Track {info.track}
                            </SC.SessionTrack>
                            <div>{info.time}</div>
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
