import React, { useState } from "react";

const Football = () => {
  const [goles, setGoles] = useState(0);

  const shoot = () => {
    setGoles(goles + 1);
  };

  return (
    <>
      <h3>My Goals {goles}</h3>
      <br />
      <button onClick={shoot}>Kick</button>
    </>
  );
};

export default Football;
