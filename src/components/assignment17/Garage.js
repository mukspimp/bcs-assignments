import React from "react";
import Car from "./Car";

class Garage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: ["Jaguar Land Rover (Tata)", "Ford", "Toyato", "Mahindra"],
    };
  }
  render() {
    return (
      <div className="box">
        <h4>This is my Garage cars </h4>
        {this.state.cars?.map((brand) => {
          return <Car brand={brand} />;
        })}
      </div>
    );
  }
}

export default Garage;
