import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h3> Car Specifications</h3>
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
          </tbody>
        </table>
      </>
    );
  }
}

export default Car;
