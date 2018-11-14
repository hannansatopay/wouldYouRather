import React from "react";
import PropTypes from 'prop-types';
//import Card from "../Card/Card";
import 'antd/dist/antd.css';
import './SignForm.css'
import { Select, Spin,Card } from 'antd';
const SignForm = ()=>{
	return(
		<div className="container">
			<Card>
			  <Select
				  style={{width: "100%"}}
			  />
			</Card>
		</div>
	);
};

SignForm.prototype={

};
export default SignForm;

