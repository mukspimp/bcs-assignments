import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jaguar F-Type",
      fuelType: "Petrol",
      engine: "5000 cc",
      power: "493 bhp & 700 Nm",
      driveTrain: "RWD",
      acceleration: "2.5 seconds",
      topspeed: "290 kmph",
      color: "Sunset Gold Metallic",
    };
  }

  render() {
    return (
      <>
        <h3>My {this.state.name} Car Specifications</h3>
        <table>
          <tbody>
            <tr>
              <th>
                <span>Fuel Type</span>
              </th>
              <td>{this.state.fuelType}</td>
            </tr>
            <tr>
              <th>
                <span>Engine</span>
              </th>
              <td>{this.state.engine}</td>
            </tr>
            <tr>
              <th>
                <span>Power and Torque</span>
              </th>
              <td>{this.state.power}</td>
            </tr>
            <tr>
              <th>
                <span>DriveTrain</span>
              </th>
              <td>{this.state.driveTrain}</td>
            </tr>
            <tr>
              <th>
                <span>Acceleration</span>
              </th>
              <td>{this.state.acceleration}</td>
            </tr>
            <tr>
              <th>
                <span>Top Speed</span>
              </th>
              <td>{this.state.topspeed}</td>
            </tr>
            <tr>
              <th>
                <span>Colour</span>
              </th>
              <td>{this.state.color}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default Car;
