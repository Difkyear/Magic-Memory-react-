import React from "react";
import "./SingleCard.css";
export default function SingleCard(props) {
  let { card, chooseCard } = props;
  const choose = () => {
    chooseCard(card);
  };
  return (
    <div>
      <div className="card">
        <img className="font" alt="card-font" src={card.src} />
        <img onClick={choose} className="back" src="/img/cover.png" alt="" />
      </div>
    </div>
  );
}
