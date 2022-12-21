import React, {useEffect, useState} from "react";
import {listDecks} from "../../utils/api/index"
import "home.css";

//import functions for study, view, delete, and create

function Home() {
    const [decks, setDecks] = useState([]);

//load decks from api
useEffect(() => {
    async function loadDecks() {
        const response = listDecks();
        const decksFromAPI = await response;
        setDecks(decksFromAPI);
    }
    loadDecks();
}, [])

return (
    <div className="home">

    </div>
)
}

export default Home;