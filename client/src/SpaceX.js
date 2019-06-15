import React, { Component } from "react";
import Loading from "./Loading";
import spaceXicon from "./spaceXicon.png";
import _ from "lodash";

class SpaceX extends Component {
  state = {
    missionName: null,
    details: null,
    flightNumber: null,
    launchDateLocal: null,
    rocketType: null,
    rocketName: null,
    image: null,
    isLoading: null
  };

  componentDidMount() {
    this.callSpaceXApi()
      .then(() =>
        this.setState({
          isLoading: true
        })
      )
      .catch(err => console.log(err));
  }

  callSpaceXApi = async () => {
    const response = await fetch("/spaceX");
    const spaceXreponse = await response.json();
    const {
      mission_name,
      details,
      flight_number,
      launch_date_local
    } = spaceXreponse;
    const { rocket_name, rocket_type } = spaceXreponse.rocket;
    let image = spaceXreponse.links.flickr_images[1];

    image = this.setState({
      missionName: mission_name,
      details: details,
      flightNumber: flight_number,
      launchDateLocal: launch_date_local,
      rocketType: rocket_name,
      rocketName: rocket_type,
      image: image
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="header">
          SpaceX Api
          <img className="telescope" src={spaceXicon} alt="" />
        </h1>
        {!this.state.isLoading && (
          <Loading text="Contacting the SpaceX Api" speed={300} />
        )}

        {this.state.isLoading && (
          <div>
            <div className="hubble-container">
              <div className="subheader">{this.state.missionName}</div>
              {/* {this.state.description.map(para => (
                <div key={para} className="description">
                  {para}
                </div>
              ))}
              <img className="image" src={this.state.img_url} alt="" />
              <div className="credits">Credits</div>
              <div className="credit-container">
                {this.state.credits.map(link => (
                  <a key={link} className="credit-links" href={link}>
                    {link}
                  </a>
                ))}
              </div> */}
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default SpaceX;
