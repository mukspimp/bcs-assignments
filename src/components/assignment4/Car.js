import React from "react";

class Car extends React.Component {
  constructor() {
    super();
    this.color = "Alpine White";
  }
  render() {
    return (
      <>
        <h3>BMW Z4 Car Specifications</h3>
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
              <td>{this.color}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default Car;
