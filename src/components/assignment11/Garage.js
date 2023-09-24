import React from "react";
import Car from "./Car";

class Garage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Jaguar Land Rover (Tata)",
    };
  }
  render() {
    return (
      <div className="box">
        <h4>This is my Garage </h4>
        <Car brand={this.state.brand} />
      </div>
    );
  }
}

export default Garage;
