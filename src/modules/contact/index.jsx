import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderComponent from "../../components/PageHeaderComponent";
import { Animate } from "react-simple-animate";
import "./style.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderComponent
        headerText="My Contacts"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content_header">Contact me</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content_form">
            <div className="contact__content_form_wrapper">
              <div>
                <input required name="name" type={"text"} />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input required name="email" type={"text"} />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
							<textarea required name="descr" type={"text"} rows="5" />
                <label htmlFor="descr" className="descrLabel">
                  Descr
                </label>
							</div>
            </div>
            <button>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
