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
  let [disable, setDisable] = useState(false);

  console.log(cardSrc);

  // automatically start game
  useEffect(() => {
    shuffleCard();
  }, []);

  // validate the two choice state and increase Turn
  useEffect(() => {
    if (chooseOne && chooseTwo) {
      setDisable(true);
      if (chooseOne.src === chooseTwo.src) {
        console.log("compare true");
        resetChoice();
        // set the matched card property to true instead of false
        setCardSrc((previous) => {
          return previous.map((card) => {
            if (chooseOne.src === card.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
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
    setDisable(false);
    setTurn((previousTurn) => previousTurn + 1);
  };

  // shuffle cards
  const shuffleCard = () => {
    setChooseOne(null);
    setChooseTwo(null);
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
              disable={disable}
              fliped={chooseOne === card || chooseTwo === card || card.matched}
              chooseCard={chooseCard}
              key={card.id}
              card={card}
            />
          );
        })}
      </div>
      <p>Turns : {turn}</p>
    </div>
  );
}

export default App;
