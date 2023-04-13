import React from "react";
import PageHeaderComponent from "../../components/PageHeaderComponent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalData = [
  {
    label: "Name",
    value: "Daria Batiuk",
  },
  {
    label: "Location",
    value: "Moncton, NB",
  },
  {
    label: "Email",
    value: "dariabatiuk5@gmail.com",
  },
  {
    label: "Phone",
    value: "+15068983155",
  },
];

const summary =
  "Front end developer with commertial experiance, Bootcamp graduate mFront end developer with commertial experiance, Bootcamp graduate Front end developer with commertial experiance, Bootcamp graduate Front end developer with commertial experiance, Bootcamp graduate Front end developer with commertial experiance, Bootcamp graduate Front end developer with commertial experiance, Bootcamp graduate";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderComponent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content_personalWrapper">
          {" "}
          <Animate
            play
            duration={1.5}
            delay={0}
            start={{
              transform: "translateX(-550px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front end developer</h3>
            <p>{summary}</p>/
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={0}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="about_personalText">Personal Info</h3>
            <ul>
              {personalData.map((item, i) => {
                return (
                  <li key={i}>
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
                );
              })}
            </ul>
            /
          </Animate>
        </div>
        <div className="about__content_serviceWrapper">
				<Animate
            play
            duration={1.5}
            delay={0}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
          <div className="about__content_serviceWrapper_innerContent">
            <div>
              <FaDev color="var(--yellow-theme-main-color)" size={60} />
            </div>
            <div>
              <DiAndroid color="var(--yellow-theme-main-color)" size={60} />
            </div>
            <div>
              <FaDatabase color="var(--yellow-theme-main-color)" size={60} />
            </div>
            <div>
              <DiApple color="var(--yellow-theme-main-color)" size={60} />
            </div>
          </div>
					/</Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
