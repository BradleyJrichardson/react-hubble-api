import React from "react";
import { ThemeConsumer } from "./theme";

export default function HomeCard({ header, about, icon }) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`card bg-${theme}`}>
          <h4 className="header-lg center-text">{header}</h4>
          <p className="link wiki-link">Wikipedia</p>
          <p className="about-text">{about}</p>
          <img className="card-icon" src={icon} alt="" />
        </div>
      )}
    </ThemeConsumer>
  );
}
