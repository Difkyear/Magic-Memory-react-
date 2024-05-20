import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const card = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];
function App() {
  let [cardSrc, setCardSrc] = useState([]);
  let [turn, setTurn] = useState(0);
  let [chooseOne, setChooseOne] = useState(null);
  let [chooseTwo, setChooseTwo] = useState(null);

  console.log(cardSrc);
  // validate the two choice state and increase Turn
  useEffect(() => {
    if (chooseOne && chooseTwo) {
      if (chooseOne.src === chooseTwo.src) {
        console.log("compare true");
        resetChoice();
        setCardSrc((previous) => {
          return previous.map((card) => {
            if (chooseOne.src === card.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        setTurn((previousTurn) => previousTurn + 1);
      } else {
        console.log("compare false");
        setTimeout(() => {
          resetChoice();
        }, 1000);
      }
    }
  }, [chooseOne, chooseTwo]);

  // handle choice
  const chooseCard = (card) => {
    // console.log(card);
    chooseOne ? setChooseTwo(card) : setChooseOne(card);
  };

  // reset Choice
  const resetChoice = () => {
    setChooseOne(null);
    setChooseTwo(null);
  };

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
  // console.log(cardSrc);

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
          return (
            <SingleCard
              fliped={chooseOne === card || chooseTwo === card || card.matched}
              chooseCard={chooseCard}
              key={card.id}
              card={card}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
