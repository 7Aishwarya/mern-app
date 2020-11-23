import React from "react";
import "./employeesStyles.css";
import img from "./empicon.jpg";

var status;
var color;

function Card(props) {
  status = props.status;
  if(status === 'Working From Home')
    color = '#bdb76b';
  if(status === 'At Office')
    color = '#3cb371';
  if(status === 'On Leave')
    color = '#cd5c5c';
  if(status === 'On Sick Leave')
    color = '#ffd700';
  if(status === 'Business Trip')
    color = '#4682b4';
  
  return (
    <div style={{background: color}} className="cardemployee">
      <div style={{background: color}} className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.status}</p>
      </div>
    </div>
  );
}

export default Card;
