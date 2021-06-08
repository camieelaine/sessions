import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteSession) => {},
  removeFavorite: (sessionId) => {},
  itemIsFavorite: (sessionId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteSession) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteSession);
    });
  }

  function removeFavoriteHandler(sessionId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((session) => session.id !== sessionId);
    });
  }

  function itemIsFavoriteHandler(sessionId) {
    return userFavorites.some((session) => session.id === sessionId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
