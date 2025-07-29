import { createContext, useContext, useState, useEffect } from "react";

const RecipeContext = createContext();
export function useRecipe() {
  return useContext(RecipeContext);
}

export function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedDate = localStorage.getItem("favorites");
    if (storedDate) setFavorites(JSON.parse(storedDate));
    else {
      localStorage.setItem("favorites", JSON.stringify([]));
    }
  }, []);

  function removeFromFavorite(id) {
    setFavorites((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  }
  function addToFavorite(id) {
    setFavorites((prev) => {
      if (prev.some((item) => item.id === id)) return prev;
      const newItem = recipes.find((item) => item.id === id);
      console.log(newItem);
      const updated = [...prev, newItem];
      localStorage.setItem("favorites", JSON.stringify(updated)); // turn it into string and save to localstorage
      return updated;
    });
  }

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        setRecipes,
        favorites,
        setFavorites,
        addToFavorite,
        removeFromFavorite,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}
