import React, { Component } from "react";
import HomeCard from "./HomeCard";

class Home extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className="grid space-around">
        <HomeCard
          header="Hubble"
          about="The Hubble Space Telescope is a space telescope that was launched into low Earth orbit in 1990 and remains in operation. It was not the first space telescope, but it is one of the largest and most versatile and is well known as both a vital research tool and a public relations boon for astronomy"
          ref="https://en.wikipedia.org/wiki/Hubble_Space_Telescope"
        />
        <HomeCard
          header="ISS"
          about="The International Space Station is a space station, or a habitable artificial satellite, in low Earth orbit. Its first component was launched into orbit in 1998, with the first long-term residents arriving in November 2000. It has been inhabited continuously since that date."
          ref="https://en.wikipedia.org/wiki/International_Space_Station"
        />
        <HomeCard
          header="SpaceX"
          about="Space Exploration Technologies Corp., doing business as SpaceX, is a private American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California"
          ref="https://en.wikipedia.org/wiki/SpaceX"
        />
        <HomeCard
          header="Nasa"
          about="The National Aeronautics and Space Administration is an independent agency of the United States Federal Government responsible for the civilian space program, as well as aeronautics and aerospace research. NASA was established in 1958, succeeding the National Advisory Committee for Aeronautics."
          ref="https://en.wikipedia.org/wiki/NASA"
        />
      </div>
    );
  }
}

export default Home;
