import React from "react";
import './Main.css'
import Players from './Players';
import Competitions from "./Competitions";
// NEED TO FIGURE OUT HOW TO REUSE THE CLASS
import Programs from "./Programs";
import GetInvolved from "./GetInvolved";
import Partners from "./Partners";

const Main = () => {

  const blogText = `This is a web app to provide information about the local community for locals and tourists.`; 
  
  return (
    <div className="Main">
      <Players />
      <Competitions /> 
      <Programs />
      <GetInvolved />
      <Partners />
    </div>
  );
};

export default Main;

/*
<LetsPlay />
*/