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
        <h3>My BMW Z4 Car Specifications</h3>
        <table>
          <tbody>
            <tr>
              <th>
                <span>Fuel Type</span>
              </th>
              <td>Petrol</td>
            </tr>
            <tr>
              <th>
                <span>Engine</span>
              </th>
              <td>2998 cc</td>
            </tr>
            <tr>
              <th>
                <span>Power and Torque</span>
              </th>
              <td>335 bhp & 500 Nm</td>
            </tr>
            <tr>
              <th>
                <span>DriveTrain</span>
              </th>
              <td>RWD</td>
            </tr>
            <tr>
              <th>
                <span>Acceleration</span>
              </th>
              <td>4.5 seconds</td>
            </tr>
            <tr>
              <th>
                <span>Top Speed</span>
              </th>
              <td>250 kmph</td>
            </tr>
            <tr>
              <th>
                <span>Colour</span>
              </th>
              <td>Alpine White</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default Car;
