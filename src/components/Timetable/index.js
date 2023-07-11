import React from "react";
import * as SC from "@/components/styles";

import { TRACK_여의도, TRACK_강남, TRACK_명동, TRACK_가로수길 } from "./track.js";

const SectionTitle = () => {
  return (
    <SC.SectionTitle style={{ top: "-90px" }}>
      <div style={{ fontSize: "30px", fontWeight: 700 }}>Timetable</div>
      <div className="timetable_title">
        시간표는 상황에 따라 변경될 수 있습니다.
      </div>
    </SC.SectionTitle>
  );
};

const Timetable = () => {
  return (
    <SC.Section>
      <SC.SectionTimetable>
        <SC.SectionTimetableContent>
          <SC.SectionTimetableContentWrapper>
            {[TRACK_여의도, TRACK_강남, TRACK_명동, TRACK_가로수길].map((track, trackIndex) => {
              return (
                <SC.TimetableEach key={`TRACK_${trackIndex}`}>
                  {trackIndex === 0 ? <SectionTitle /> : null}
                  <SC.TableTitle>Track {track.name}</SC.TableTitle>
                  {track.contents.map((info, i) => {
                    return (
                      <React.Fragment key={`TABLE_${i}`}>
                        {info.type === "full" ? (
                          <SC.TableFullContent>
                            <span style={{ whiteSpace: "nowrap" }}>{info.time}</span>
                            <div style={{ marginRight: "20px" }}>
                              <b>{info.speaker}</b><br/>
                                {info.content.split('\n').map(line => {
                                  return (
                                    <span>{line}<br /></span>
                                  );
                                })}
                            </div>
                          </SC.TableFullContent>
                        ) : (
                          <SC.TableEmptyContent>
                            <span>{info.time}</span>
                            <div>{info.content}<br/><br/></div>
                          </SC.TableEmptyContent>
                        )}
                      </React.Fragment>
                    );
                  })}
                </SC.TimetableEach>
              );
            })}
          </SC.SectionTimetableContentWrapper>
        </SC.SectionTimetableContent>
      </SC.SectionTimetable>
    </SC.Section>
  );
};

export default Timetable;
