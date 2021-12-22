import React, {Component} from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { FavouritesContextProvider } from "./store/favourites-context";

export class HomeIndex extends Component {
  render() {
    return (
      <FavouritesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavouritesContextProvider>
    );
  }
}

export default HomeIndex;