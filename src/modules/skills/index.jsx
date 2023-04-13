import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import { AnimateKeyframes } from "react-simple-animate";
//import {AnimateKeyframes} from 'react-simple-animate';
import PageHeaderComponent from "../../components/PageHeaderComponent";
import  skillsData from "./utils";
import { Line } from "rc-progress";
import './style.scss'

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderComponent
        headerText="My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="skills__wrapper">
        {skillsData.map((item, i) => {
					return (
          <div className="skills__wrapper_innerContent" key={i}>
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3 className="skills__wrapper_innerContent_category">
                {item.label}
              </h3>
              <div className="skills__wrapper_innerContent_progress">
                {item.data.map((skillItem, j) => {
									return (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity: 1", "opacity: 0"]}
                    iterationCount="1"
										key={j}
                  >
                    <div className="progressBar" key={j}>
                      <p>{skillItem.skill}</p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth={2}
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth={2}
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
									)
                })}
              </div>
            </Animate>
          </div>
					)
        })}
      </div>
    </section>
  );
};

export default Skills;
