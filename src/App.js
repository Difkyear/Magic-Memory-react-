import { useState } from "react";
import "./App.css";

const card = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];
function App() {
  let [cardSrc, setCardSrc] = useState([]);
  let [turn, setTurn] = useState(0);

  // shuffle cards
  const shuffleCard = () => {
    let shuffledCard = [...card, ...card];
    shuffledCard.sort(() => {
      return Math.random() - 0.5;
    });
    shuffledCard = shuffledCard.map((item) => {
      return { ...item, id: Math.random() };
    });
    setCardSrc(shuffledCard);
    setTurn(0);
  };
  console.log(cardSrc);
  return (
    <div className="App">
      <h1>Magic Memory</h1>
      <button
        onClick={() => {
          shuffleCard();
        }}
      >
        New Game
      </button>
      <div className="card-grid">
        {cardSrc.map((card) => {
          console.log(card.src);
          return (
            <div key={card.id} className="card">
              <img className="font" alt="card-font" src={card.src} />
              <img className="back" src="/img/cover.png" alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
