import { useEffect, useState } from "react";
import { useRecipe } from "./RecipeContext";

export default function InstructionBox({ instruction }) {
  const {
    recipes,
    favorites,
    setFavorites,
    removeFromFavorite,
    addToFavorite,
  } = useRecipe();

  return (
    <div className="flex m-12 justify-center ">
      <img
        src={instruction.image_url}
        className="rounded-[10px] mr-6 shadow-2xl w-[auto] h-[500px]"
      />
      <div>
        <p className="text-xs text-blue-500 m-0.5">{instruction.publisher}</p>
        <p className="font-bold text-lg m-0.5">{instruction.title}</p>
        {favorites.find((item) => item.id === instruction.id) ? (
          <button
            onClick={() => removeFromFavorite(instruction.id)}
            className="bg-green-600 text-white rounded-[5px] p-2 text-sm cursor-pointer mt-4 hover:bg-red-600"
          >
            Remove from Favorites
          </button>
        ) : (
          <button
            onClick={() => addToFavorite(instruction.id)}
            className="bg-green-600 text-white rounded-[5px] p-2 text-sm cursor-pointer mt-4 hover:bg-red-400"
          >
            Add to Favorites
          </button>
        )}
        <p className="font-bold text-m m-0.5 mt-4 mb-4">Ingredients:</p>
        <ul>
          {instruction.ingredients.map((item, index) => (
            <li key={index} className=" text-m ml-6">
              {item.quantity} {item.unit} {item.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
