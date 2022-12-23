import React from "react";
import {Route, Switch} from "react-router-dom";
import "./src/Layout/Layout.css";

import Header from "./src/Layout"
import Home from "./src/Layout/home/home"
import Study from "./src/Layout/decks/Study"
import CreateDeckScreen from "./src/Layout/decks/CreateDeckScreen";
import DeckScreen from "./src/Layout/decks/DeckScreen.js";
import EditDeckScreen from "./src/Layout/decks/EditDeckScreen";
import AddCardScreen from "./src/Layout/cards/AddCardScreen";
import EditCardScreen from "./src/Layout/cards/EditCardScreen";
import NotFound from "./src/Layout/NotFound";

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