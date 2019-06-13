import React from "react";
import { ThemeConsumer } from "./theme";

export default function HomeCard({ header, about, wikilink }) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`card bg-${theme}`}>
          <h4 className="header-lg center-text">{header}</h4>
          <p className="about-text">{about}</p>
          <a className="link wiki-link" href={wikilink}>
            Wikipedia
          </a>
        </div>
      )}
    </ThemeConsumer>
  );
}
