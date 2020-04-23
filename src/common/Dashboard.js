import React, { useState } from "react";
import ButtonCounter from "../reactgettingstarted/basics/Button";
import Display from "../reactgettingstarted/basics/Display";

const Dashboard = () => {
  const [course, setCourse] = useState(0);
  const handleClick = () => {
    setCourse(course + 1);
  };

  return (
    <>
      <h1>React getting started</h1>
      <ButtonCounter onClickFunction={handleClick} increment={10} />
      <ButtonCounter onClickFunction={handleClick} increment={100} />
      <Display message={course} />
    </>
  );
};

export default Dashboard;
