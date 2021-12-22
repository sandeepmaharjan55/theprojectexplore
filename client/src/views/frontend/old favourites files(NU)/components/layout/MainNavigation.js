import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import {useContext} from "react";
import FavouritesContext from "../../store/favourites-context";

function MainNavigation() {
  const favouritesCtx = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}> Project Explore</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Destinations</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites
              <span className={classes.badge}>{favouritesCtx.totalFavourites}</span></Link>
          </li>
          <li>
            <Link to="/newdestination">New Destinations</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
