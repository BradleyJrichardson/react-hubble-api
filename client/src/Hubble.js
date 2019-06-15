import React, { Component } from "react";
import Loading from "./Loading";
import hubbleicon from "./hubbleicon.png";
import { FaAngleRight } from "react-icons/fa";
import _ from "lodash";

class Hubble extends Component {
  state = {
    name: null,
    description: null,
    mission: null,
    credits: null,
    img_url: null,
    isLoading: null,
    counter: 1
  };

  componentDidMount() {
    this.callHubbleAPI()
      .then(() =>
        this.setState({
          isLoading: true
        })
      )
      .catch(err => console.log(err));
  }

  callHubbleAPI = async () => {
    const response = await fetch(`/hubble/${this.state.counter}`);
    const hubbleReponse = await response.json();

    if (response.status !== 200) {
      throw Error(hubbleReponse.message);
    }
    const { name, description, credits, mission, image_files } = hubbleReponse;
    const img_url = image_files[5].file_url;

    const credit_links = credits.split(">");
    const results = credit_links.map(array => {
      return array.match(/\bhttps?:\/\/\S+/gi);
    });
    const resultstwo = results.filter(function(val) {
      return val !== null;
    });
    const resultsthree = resultstwo.flat();
    const testres = [];
    const resultsfour = resultsthree.forEach(string => {
      testres.push(string.replace('"', ""));
    });
    console.log(resultsfour);
    const splitDescription = description.match(/[^\.!\?]+[\.!\?]+|[^\.!\?]+/g);

    // lodash way
    const test = _.chunk(splitDescription, 3);
    console.log(test);

    this.setState({
      name: name,
      description: test,
      mission: mission,
      credits: testres,
      img_url: img_url,
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="header">
          Hubble Api
          <img className="telescope" src={hubbleicon} alt="" />
        </h1>
        {!this.state.isLoading && (
          <Loading text="Contacting the Hubble Api" speed={300} />
        )}

        {this.state.isLoading && (
          <div>
            <button onClick={this.callHubbleAPI}>
              <FaAngleRight className="next-icon" />
            </button>

            <div className="hubble-container">
              <div className="subheader">{this.state.name}</div>
              {this.state.description.map(para => (
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
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Hubble;
