import React, { Component } from "react";
import "./App.css";
import Loading from "./Loading";
import telescope from "./telescope.png";

class App extends Component {
  state = {
    name: null,
    description: null,
    mission: null,
    credits: null,
    img_url: null,
    isLoading: null
  };

  componentDidMount() {
    this.callHubbleAPI()
      .then(data =>
        this.setState({
          isLoading: true
        })
      )
      .catch(err => console.log(err));
  }

  callHubbleAPI = async () => {
    const response = await fetch("/hubble");
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
    console.log(results);

    this.setState({
      name: name,
      description: description,
      mission: mission,
      credits: credit_links,
      img_url: img_url
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="header">Hubble Api</h1>
        {!this.state.isLoading && (
          <Loading text="Contacting the Hubble Api" speed={300} />
        )}

        {this.state.isLoading && (
          <div>
            <img className="telescope" src={telescope} alt="" />
            <div className="container">
              <div className="subheader">{this.state.name}</div>
              <div className="description">{this.state.description}</div>
              <div>{this.state.mission}</div>
              <div>
                {this.state.credits.map(link => (
                  <a href={link}>{link}</a>
                ))}
              </div>
              <img className="image" src={this.state.img_url} alt="" />
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default App;
