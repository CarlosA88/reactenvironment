import React, { useState } from "react";
import ButtonCounter from "./Button";
import Display from "./Display";

const Dashboard = () => {
  const [course, setCourse] = useState(0);
  const incrementCounter = (incrementValue) => {
    setCourse(course + incrementValue);
  };

  return (
    <>
      <h1>React getting started</h1>
      <ButtonCounter onClickFunction={incrementCounter} increment={10} />
      <ButtonCounter onClickFunction={incrementCounter} increment={100} />
      <Display message={course} />
    </>
  );
};

export default Dashboard;
