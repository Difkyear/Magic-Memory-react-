import { useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

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
          return <SingleCard key={card.id} src={card.src} />;
        })}
      </div>
    </div>
  );
}

export default App;
