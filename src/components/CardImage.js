import React from 'react';
import '../App.css';

function CardImage(props) {
  return(
    <div className="card-image">
        <img src= {props.image} alt= "pic"/>
    </div>
  );
}

export default CardImage;