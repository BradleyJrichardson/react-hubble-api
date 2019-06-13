import React, { Component } from "react";
import HomeCard from "./HomeCard";

class Home extends Component {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className="grid space-around">
        <HomeCard header="Test" avatar="Test" href="Test" name="Test" />
        <HomeCard header="Test" avatar="Test" href="Test" name="Test" />
        <HomeCard header="Test" avatar="Test" href="Test" name="Test" />
        <HomeCard header="Test" avatar="Test" href="Test" name="Test" />
        <HomeCard header="Test" avatar="Test" href="Test" name="Test" />
      </div>
    );
  }
}

export default Home;
