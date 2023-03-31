import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School, Work } from "@mui/icons-material";
import Loader from "../components/Loader";

function Experience() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="experience">
          <VerticalTimeline lineColor="#3e497a">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2007 - 2016"
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={<School />}
            >
              <h3 className="vertical-timeline-element-title">
                School N3, Qarshi, Qashqadaryo
              </h3>
              <p>School Diploma</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2016 - 2019"
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={<School />}
            >
              <h3 className="vertical-timeline-element-title">
                College of Computer Technology, Qarshi, Qashqadaryo
              </h3>

              <h4 className="vertical-timeline-element-subtitle">
                Computer Science
              </h4>

              <p> College diploma</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2019 - present"
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={<School />}
            >
              <h3 className="vertical-timeline-element-title">
                Tashkent University of Information Technologies, Tashkent,
                Uzbekistan
              </h3>

              <h4 className="vertical-timeline-element-subtitle">
                Software Engineering
              </h4>

              <p> Bachelor's degree</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022 - 2023"
              iconStyle={{ background: "#e9d35b", color: "#fff" }}
              icon={<Work />}
            >
              <h3 className="vertical-timeline-element-title">
                Front End Developer - IT Tower
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Tashkent, Uzbekistan
              </h4>
              <p>Developed the front infrastructure for 7 projects.</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      )}
    </>
  );
}

export default Experience;
