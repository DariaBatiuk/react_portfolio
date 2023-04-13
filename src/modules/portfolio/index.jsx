import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderComponent from "../../components/PageHeaderComponent";
import Calculator from "../../images/Calculator.jpg";
import CloudBudget from "../../images/CloudBudget.jpg";
import Mobile from "../../images/Mobile.jpg";
import NB_Project_Tracker from "../../images/NB_Project_Tracker.jpg";
import pulse from "../../images/pulse.jpg";
import Wikitube from "../../images/Wikitube.jpg";
import "./style.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Calculator",
    image: Calculator,
    link: "",
  },
  {
    id: 3,
    name: "CloudBudget Project",
    image: CloudBudget,
    link: "",
  },
  {
    id: 4,
    name: "Profile Card ",
    image: Mobile,
    link: "",
  },
  {
    id: 5,
    name:  "Project Tracker",
    image: NB_Project_Tracker,
    link: "",
  },
  {
    id: 6,
    name: "Pulse Project",
    image: pulse,
    link: "",
  },
  {
    id: 7,
    name: "Wikitube Project",
    image: Wikitube,
    link: "https://dariabatiuk.github.io/Wikitube-Project/",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredValue, setFiltereedValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFiltereedValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log(hoveredValue);

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderComponent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content_filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content_cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content_cards_item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content_cards_item_img-wrapper">
                <a href="#">
                  <img src={item.image} alt="blank" />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
