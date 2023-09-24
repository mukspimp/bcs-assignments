import React from "react";
import Car from "./Car";

class Garage extends React.Component {
  render() {
    return (
      <div className="box">
        <h4>This is my Garage </h4>
        <Car color={"Alpine White"} />
      </div>
    );
  }
}

export default Garage;
