import React from "react";
import { ThemeConsumer } from "./theme";

export default function HomeCard({ header, about, ref }) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`card bg-${theme}`}>
          <h4 className="header-lg center-text">{header}</h4>
          <p className="about-text">{about}</p>
          <a href={ref}>{ref}</a>
        </div>
      )}
    </ThemeConsumer>
  );
}
