import React from "react";
import Card from "../Card/Card";
import SignForm from '../SignForm/SignForm';
import './MainApp.css';
import PropTypes from "prop-types";
const MainApp=(props)=>{
  return <div className="flexContainer">
    <Card className={{width: "100%"}}>
        <div> Main Component </div>
    </Card>
	  <SignForm/>
  </div>
};
export default MainApp;
