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
      colors: [
        {
          image: "car1.png",
          color: "Sunset Gold Metallic",
        },
        {
          image: "car2.png",
          color: "Desire Red Metallic",
        },
        {
          image: "car3.png",
          color: "Sorrento Yellow Metallic",
        },
        {
          image: "car4.png",
          color: "Caldera Red",
        },
      ],
      count: 0,
    };
  }

  render() {
    const changeColor = () => {
      if (this.state.count === 3) {
        this.setState({ ...this.state, count: 0 });
      } else {
        const no = this.state.count + 1;
        this.setState({ ...this.state, count: no });
      }
    };

    return (
      <>
        <h3>My {this.state.name} Car Specifications</h3>
        <table>
          <tbody>
            <tr>
              <th>
                <span>Brand (From Garage state)</span>
              </th>
              <td>
                <b>{this.props.brand}</b>
              </td>
            </tr>
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
              <td>{this.state.colors[this.state.count].color}</td>
            </tr>
            <tr>
              <th>
                <span>Image</span>
              </th>
              <td>
                <img
                  alt={this.state.colors[this.state.count].color}
                  src={"/images/" + this.state.colors[this.state.count].image}
                  height={150}
                  width={300}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <button onClick={changeColor}>Change Color</button>
      </>
    );
  }
}

export default Car;
