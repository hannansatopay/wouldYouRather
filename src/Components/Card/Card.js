import React from "react";
import PropTypes from "prop-types";
import "./card.css"
const Card =(props)=>{
    return <div className="card" style={props.className}>
        {props.children}
    </div>
};

Card.proptypes={
    className:PropTypes.object

};
export default Card;
