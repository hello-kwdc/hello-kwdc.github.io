import React from "react";
import * as SC from "@/components/styles";

import { TRACK_1, TRACK_2, TRACK_3 } from "./track.js";

const SectionTitle = () => {
  return (
    <SC.SectionTitle style={{ top: "-90px" }}>
      <div style={{ fontSize: "30px", fontWeight: 700 }}>Timetable</div>
      <div className="timetable_title">
        자세한 시간표와 프로그램은 6월 말 공개되며, 발표자 정보와 함께 확인하실
        수 있습니다.
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
            {[TRACK_1, TRACK_2, TRACK_3].map((track, trackIndex) => {
              return (
                <SC.TimetableEach key={`TRACK_${trackIndex}`}>
                  {trackIndex === 0 ? <SectionTitle /> : null}
                  <SC.TableTitle>Track {trackIndex + 1}</SC.TableTitle>
                  {track.map((info, i) => {
                    return (
                      <React.Fragment key={`TABLE_${i}`}>
                        {info.type === "full" ? (
                          <SC.TableFullContent>
                            <span>{info.time}</span>
                            <div>{info.content}</div>
                          </SC.TableFullContent>
                        ) : (
                          <SC.TableEmptyContent>
                            <span>{info.time}</span>
                            <div>{info.content}</div>
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