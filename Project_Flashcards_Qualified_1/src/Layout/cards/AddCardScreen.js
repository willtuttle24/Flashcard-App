import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck, createCard } from "../../utils/api/index";

import AddCardNavBar from "./AddCardNavBar";
import CardForm from "./CardForm";

function AddCardScreen() {
  const [deck, setDeck] = useState({});
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");
  const deckId = useParams().deckId;

  // Loading the deck from the API
  useEffect(() => {
    async function loadDeck() {
      const response = readDeck(deckId);
      const deckFromAPI = await response;
      setDeck(deckFromAPI);
    }
    loadDeck();
  }, [deckId]);

  const handleCardFrontChange = (event) => setCardFront(event.target.value);
  const handleCardBackChange = (event) => setCardBack(event.target.value);

  const handleAddCardSave = (event) => {
    event.preventDefault();
    createCard(deckId, { front: cardFront, back: cardBack });
    setCardFront("");
    setCardBack("");
  };
  if (deck.name) {
    return (
      <div>
        <AddCardNavBar deckName={deck.name} deckId={deckId} />
        <h2>{deck.name}: Add Card</h2>
        <form onSubmit={handleAddCardSave}>
          <CardForm
            cardFront={cardFront}
            handleCardFrontChange={handleCardFrontChange}
            cardBack={cardBack}
            handleCardBackChange={handleCardBackChange}
          />
          <button type="submit" className="btn btn-success">
            Save
          </button>
        </form>
      </div>
    );
  }
  return "Loading...";
}

export default AddCardScreen;