import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PageHeaderComponent from "../../components/PageHeaderComponent";
import data from "./utils";
import "./style.scss";
import { MdWork } from "react-icons/md";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderComponent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience_header">Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience_verticalElement"
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-main-color)",
                }}
                date="April 2022 - November 2022"
                icon={<MdWork />}
                iconStyle={{
                  background: "#l8l8l8",
                  color: "var(--yellow-theme-main-color)",
                }}
              >
                <div className="verticalElement_wrapper">
                  <h3 className="verticalElement_wrapper_title">
                    {item.title}
                  </h3>
                  <h3 className="verticalElement_wrapper_subtitle">
                    {item.subtitle}
                  </h3>
                </div>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education_header">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__education_verticalElement"
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-main-color)",
                }}
                date="April 2022 - November 2022"
                icon={<MdWork />}
                iconStyle={{
                  background: "#l8l8l8",
                  color: "var(--yellow-theme-main-color)",
                }}
              >
                <div className="verticalElement_wrapper">
                  <h3 className="verticalElement_wrapper_title">
                    {item.title}
                  </h3>
                  <h3 className="verticalElement_wrapper_subtitle">
                    {item.subtitle}
                  </h3>
                </div>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
