import React, { useState } from "react";
import ButtonCounter from "../reactgettingstarted/basics/Button";
import Display from "../reactgettingstarted/basics/Display";

const Dashboard = () => {
   const [course, setCourse] = useState(0);
   const handleClick=()=> {setCourse(course+1)}

  return (
    <main>
      <section>
      <ButtonCounter onClickFunction={handleClick}/>
      <Display message={course}/>
      </section>
      
    </main>
  );
};

export default Dashboard;
