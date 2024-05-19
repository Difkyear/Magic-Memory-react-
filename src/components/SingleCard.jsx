import React from "react";
import "./SingleCard.css";
export default function SingleCard(props) {
  let { src } = props;
  return (
    <div>
      <div className="card">
        <img className="font" alt="card-font" src={src} />
        <img className="back" src="/img/cover.png" alt="" />
      </div>
    </div>
  );
}
