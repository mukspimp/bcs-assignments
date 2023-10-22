import React from "react";
import Car from "./Car";

class Garage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [
        { number: "1", brand: "Jaguar Land Rover (Tata)" },
        { number: "2", brand: "Ford" },
        { number: "3", brand: "Toyato" },
        { number: "4", brand: "Mahindra" },
      ],
    };
  }
  render() {
    return (
      <div className="box">
        <h4>This is my Garage cars </h4>
        {this.state.cars?.map((specification) => {
          return <Car specification={specification} />;
        })}
      </div>
    );
  }
}

export default Garage;
