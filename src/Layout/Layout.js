import React from "react";
import {Route, Switch} from "react-router-dom";
import "./Layout.css";

import Header from "./Header";
import Home from "./home/home";
import Study from "./decks/Study";
//import CreateDeckScreen from "./decks/CreateDeckScreen";
import DeckScreen from "./decks/DeckScreen";
//import EditDeckScreen from "./decks/EditDeckScreen";
import AddCardScreen from "./cards/AddCardScreen";
//import EditCardScreen from "./cards/EditCardScreen";
import NotFound from "./NotFound";
/*

  
           
   <Route path="/decks/new">
             <CreateDeckScreen />
            </Route>
            <Route path="/decks/:deckId/cards/:cardId/edit">
              <EditCardScreen />
            </Route>
        
            <Route path="/decks/:deckId/edit">
              <EditDeckScreen />
            </Route>   */
            

function Layout() {
    return (
      <>
        <Header />
        <div className="container card">
          <Switch>

            <Route exact path="/">
              <Home />
            </Route> 
            
               <Route path="/decks/:deckId/cards/new">
              <AddCardScreen />
            </Route>
            
            <Route path="/decks/:deckId/study">Rendering in React
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