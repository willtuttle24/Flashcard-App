import React from "react";
import {Route, Switch} from "react-router-dom";
import "./src/Layout/Layout.css";

import Header from "./src/Layout/Header.js"
import Home from "./src/Layout/decks/Study.js"
import Study from "./src/Layout/decks/Study.js"
import CreateDeckScreen from "./src/Layout/decks/CreateDeckScreen.js";
import DeckScreen from "./src/Layout/decks/DeckScreen.js";
import EditDeckScreen from "./src/Layout/cards/EditCardScreen.js";
import AddCardScreen from "./src/Layout/cards/AddCardScreen.js";
import EditCardScreen from "./src/Layout/cards/EditCardScreen.js";
import NotFound from "./src/Layout/NotFound.js";

function Layout() {
    return (
      <>
        <Header />
        <div className="container card">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
  
            <Route path="/decks/new">
              <CreateDeckScreen />
            </Route>
  
            <Route path="/decks/:deckId/cards/new">
              <AddCardScreen />
            </Route>
  
            <Route path="/decks/:deckId/cards/:cardId/edit">
              <EditCardScreen />
            </Route>
  
            <Route path="/decks/:deckId/edit">
              <EditDeckScreen />
            </Route>
  
            <Route path="/decks/:deckId/study">
              <Study />
            </Route>
  
            <Route path="/decks/:deckId">
              <DeckScreen />
            </Route>
  
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </>
    );
  }
  
  export default Layout;