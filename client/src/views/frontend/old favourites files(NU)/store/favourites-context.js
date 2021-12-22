import { createContext, useState } from "react";
const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetupId) => {},
  itemIsFavourite: (meetupId) => {},
});
export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourtites] = useState([]);
  function addFavouriteHandler(favouriteMeetup) {
    setUserFavourtites((prevUserFavourites) => {
      return prevUserFavourites.concat(favouriteMeetup);
    });
  }
  function removeFavouriteHandler(meetupId) {
    setUserFavourtites((prevUserFavourites) => {
      return prevUserFavourites.filter(
        (favouriteMeetup) => favouriteMeetup.id !== meetupId
      );
    });
  }
  function itemIsFavouriteHandler(meetupId) {
    return userFavourites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  };
  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
}
export default FavouritesContext;
