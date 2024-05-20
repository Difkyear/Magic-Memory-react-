import React from "react";
import "./SingleCard.css";
export default function SingleCard(props) {
  let { card, chooseCard, fliped, disable } = props;
  const choose = () => {
    !disable && chooseCard(card);
  };
  return (
    <div>
      <div className="card">
        <div className={fliped ? "fliped" : ""}>
          <img className="font" alt="card-font" src={card.src} />
          <img onClick={choose} className="back" src="/img/cover.png" alt="" />
        </div>
      </div>
    </div>
  );
}
