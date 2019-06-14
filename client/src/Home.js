import React, { Component } from "react";
import HomeCard from "./HomeCard";
import { Link } from "react-router-dom";
import hubbleicon from "./hubbleicon.png";
import nasaicon from "./nasaicon.png";
import ISSicon from "./ISSicon.png";
import spaceXicon from "./spaceXicon.png";

class Home extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className="grid space-around">
        <Link to="/hubble">
          <HomeCard
            header="Hubble"
            wikilink="https://en.wikipedia.org/wiki/Hubble_Space_Telescope"
            about="The Hubble Space Telescope is a space telescope that was launched into low Earth orbit in 1990 and remains in operation. It was not the first space telescope, but it is one of the largest and most versatile and is well known as both a vital research tool and a public relations boon for astronomy"
            icon={hubbleicon}
          />
        </Link>
        <Link to="/ISS">
          <HomeCard
            header="ISS"
            about="The International Space Station is a space station, or a habitable artificial satellite, in low Earth orbit. Its first component was launched into orbit in 1998, with the first long-term residents arriving in November 2000. It has been inhabited continuously since that date."
            wikilink="https://en.wikipedia.org/wiki/International_Space_Station"
            icon={ISSicon}
          />
        </Link>
        <Link to="/spaceX">
          <HomeCard
            header="SpaceX"
            about="Space Exploration Technologies Corp., doing business as SpaceX, is a private American aerospace manufacturer and space transportation services company headquartered in Hawthorne, California"
            wikilink="https://en.wikipedia.org/wiki/SpaceX"
            icon={spaceXicon}
          />
        </Link>
        <Link to="/nasa">
          <HomeCard
            header="Nasa"
            about="The National Aeronautics and Space Administration is an independent agency of the United States Federal Government responsible for the civilian space program, as well as aeronautics and aerospace research. NASA was established in 1958, succeeding the National Advisory Committee for Aeronautics."
            wikilink="https://en.wikipedia.org/wiki/NASA"
            icon={nasaicon}
          />
        </Link>
      </div>
    );
  }
}

export default Home;
